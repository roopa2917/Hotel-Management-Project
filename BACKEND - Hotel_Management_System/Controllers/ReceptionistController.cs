using HotelManagement.Data;
using HotelManagement.Models;
using HotelManagement.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceptionistController : ControllerBase
    {


        private readonly IDataGuest<Guest> _context;
        private readonly IDataReservation<Reservations> _context2;
        private readonly IDataRoom<Room> _context3;
        private readonly IDataRate<Rates> _context4;
        private readonly IDataBill<Bill> _context5;
        private readonly IDataPayment<Payment> _context6;
        private readonly Context joinTable;
       

        public ReceptionistController(IDataGuest<Guest> context, IDataReservation<Reservations> context2, IDataRoom<Room> context3, IDataRate<Rates> context4, IDataBill<Bill> context5, IDataPayment<Payment> context6,Context context7)
        {
            _context = context;
            _context2 = context2;
            _context3 = context3;
            _context4 = context4;
            _context5 = context5;
            _context6 = context6;
            joinTable = context7;
        }

        [HttpGet("view")]
        public IActionResult viewdetail()
        {
            IEnumerable<Guest> guests = _context.GetAll();
            return Ok(guests);
        }




        [HttpPost("add")]

        //public IActionResult AddGuest(string name,string address,string email,long phone,string gender,string company)
        public IActionResult AddGuest(Guest guest)
        {
           /* Guest guest = new Guest()
            {
               Name=name,
               Address=address,
               Email=email,
               Phone_no=phone,
               Gender=gender,
                Company=company


            };*/

            _context.AddGuest(guest);
            return NoContent();
        }

        [HttpDelete("delete/{gu_id:int}")]
        public IActionResult Delete(int gu_id)
        {
         Guest guest = _context.Get(gu_id);
            if (guest == null)
            {
                return NotFound(" record couldn't be found.");
            }

            _context.Delete(guest.gu_id);
            return NoContent();
        }

        [HttpPut("update/{gu_id}")]
        //public IActionResult Put(int id, string name, string address, string email, long phone, string gender, string company)
        public IActionResult Put(string gu_id,Guest guest)
        {
            int guestid = Convert.ToInt32(gu_id);
            /*Guest guest = new Guest()
            {
                Name = name,
                Address = address,
                Email = email,
                Phone_no = phone,
                Gender = gender,
                Company = company


            };*/

           Guest GuestToUpdate = _context.Get(guestid);
            if (GuestToUpdate == null)
            {
                return NotFound(" record couldn't be found.");
            }

            _context.Update(GuestToUpdate, guest);
            return Ok(GuestToUpdate);
            //return NoContent();
        }

        [HttpGet("search/{check_in}/{check_out}")]

        public IActionResult searchRoom(string check_in, string check_out)
        {

            IEnumerable<int> room_no = _context2.search(check_in, check_out);
            IEnumerable<Room> rooms = _context3.getRoom(room_no);
            return Ok(rooms);
        }


        [HttpPost("reservation/add")]

        //public IActionResult AddGuest(string name,string address,string email,long phone,string gender,string company)
        public IActionResult AddReservation(Reservations reservation )
        {

            _context2.Add(reservation);
            return NoContent();
        }


        [HttpGet("reservation/view")]
        public IActionResult viewRes()
        {
            IEnumerable<Reservations> res = _context2.GetAll();
            return Ok(res);
        }

        [HttpDelete("reservation/delete/{res_id:int}")]
        public IActionResult cancelRes(int res_id)
        {
            Reservations res = _context2.Get(res_id);
            if (res == null)
            {
                return NotFound("record couldn't be found.");
            }

            _context2.Delete(res.res_id);
            return NoContent();
        }


        [HttpGet("calBill/{resId:int}")]
        public Bill CalculateBill(int resId)
        {
            Reservations reservation=_context2.Get(resId);
            Room room = _context3.getRoomtype(reservation.room_no);

            Rates rate = _context4.Get(room.type);

            int guid = reservation.gu_id;
            int noofguest = reservation.no_of_adults + reservation.no_of_child;
            double price = (rate.first_night_price + (reservation.number_of_nights - 1) * rate.Extension_price) * noofguest;
            double tax = rate.taxes;
            string dt = DateTime.Now.ToString("yyyy/MM/dd hh:mm:ss");
            Bill bill = new Bill()
            {
                gu_id = guid,
                no_of_guest = noofguest,
                Price = price,
                Taxes = tax,
                Date = dt


            };

            _context5.Add(bill);
            Bill bill1 = _context5.GetId(guid, dt);
            return _context5.Get(bill1.bill_id);






        }
        [HttpPost("Payment")]
        public IActionResult BillPayment(Payment pay)
        {
           
            _context6.Add(pay);
            return NoContent();

        }

        [HttpGet("paymentHistory")]

        public IActionResult History()
        {
          var res =joinTable.Payments.Join(joinTable.Bills, p => p.bill_id, b => b.bill_id, (Payment, Bill) => new
                           { pay_id=Payment.pay_id,
                            gu_id=Bill.gu_id,
                            no_of_guest=Bill.no_of_guest,
                            price=Bill.Price,
                            taxes=Bill.Taxes,
                            total=Payment.Total,
                            Credit_details=Payment.Credit_details
            }).ToList();

            return Ok(res);
        }










    }
}
