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
    public class ManagerController : ControllerBase
    {
        private readonly IDataRoom<Room> _context;
        private readonly IDataRate<Rates> _context2;

        public ManagerController(IDataRoom<Room> context,IDataRate<Rates> context2)
        {
            _context = context;
            _context2 = context2;
            
        }
        [HttpPost("add")]
        //public IActionResult AddRoom( int Rtype, string Status, string image)
        public IActionResult AddRoom(Room room)
        {
            /*Room Rooms = new Room()
            {
                
                type = Rtype,
                status = Status,
                Room_image = image
            };*/
            _context.AddRoom(room);
            return NoContent();
        }

        [HttpGet("view")]
        public IActionResult viewdetail()
        {
            IEnumerable<Room> rooms = _context.GetAll();
            return Ok(rooms);
        }


        [HttpPut("update/{room_no}")]
        //public IActionResult Put(int num,int Rtype,string Status,string image)
        public IActionResult Put(string room_no, Room room)
        {
            int Room_no = Convert.ToInt32(room_no);
           /* Room room = new Room()
            {
               type=Rtype,
               status=Status,
               Room_image=image

            };*/
          Room RoomToUpdate = _context.Get(Room_no);
            if (RoomToUpdate == null)
            {
                return NotFound("record couldn't be found.");
            }

            _context.Update(RoomToUpdate, room);
            return Ok(RoomToUpdate);
            //return NoContent();
        }
        [HttpDelete("delete/{room_no:int}")]
        public IActionResult Delete(int room_no)
        {
            Room room = _context.Get(room_no);
            if (room == null)
            {
                return NotFound("record couldn't be found.");
            }

            _context.Delete(room.Room_no);
            return NoContent();
        }
        
        
        
        [HttpPost("rate/add")]
        //public IActionResult AddRoom( int Rtype, string Status, string image)
        public IActionResult AddRate(Rates rate)
        {
            /*Room Rooms = new Room()
            {
                
                type = Rtype,
                status = Status,
                Room_image = image
            };*/
            _context2.Add(rate);
            return NoContent();
        }

        [HttpGet("rate/view")]
        public IActionResult viewrate()
        {
            IEnumerable<Rates> rate = _context2.GetAll();
            return Ok(rate);
        }


        [HttpPut("rate/update/{type}")]
        //public IActionResult Put(int num,int Rtype,string Status,string image)
        public IActionResult UpdateRate(string type, Rates rate)
        {
            
            /* Room room = new Room()
             {
                status=Status,
                type=Rtype,
                Room_image=image

             };*/
            Rates RateToUpdate = _context2.Get(type);
            if (RateToUpdate == null)
            {
                return NotFound("record couldn't be found.");
            }

            _context2.Update(RateToUpdate, rate);
            return Ok(RateToUpdate);
            //return NoContent();
        }
        [HttpDelete("rate/delete/{type}")]
        public IActionResult Deleterate(string type)
        {
            Rates rate = _context2.Get(type);
            if (rate == null)
            {
                return NotFound("record couldn't be found.");
            }

            _context2.Delete(rate.type);
            return NoContent();
        }

    }






}

