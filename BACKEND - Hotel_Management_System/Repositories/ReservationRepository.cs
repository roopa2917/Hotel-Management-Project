using HotelManagement.Data;
using HotelManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Repositories
{
    public class ReservationRepository : IDataReservation<Reservations>
    {
        private readonly Context _reservationDBContext;

        public ReservationRepository(Context Context)
        {
            _reservationDBContext = Context;
        }
        public IEnumerable<Reservations> GetAll()
        {
            return _reservationDBContext.Reservation.ToList();
        }

        public void Add(Reservations entity)
        {
            _reservationDBContext.Reservation.Add(entity);
            _reservationDBContext.SaveChanges();
        }

        public IEnumerable<int> search(string checkin, string checkout)
        {
            return _reservationDBContext.Reservation.Where(res => res.check_in_date == checkin
             && res.check_out_date == checkout).Select(r => r.room_no).ToList();


        }

        public Reservations Get(int res_id)
        {
            return _reservationDBContext.Reservation.Find(res_id);
        }
        public void Delete(int res_id)
        {
            Reservations res = _reservationDBContext.Reservation.Find(res_id);
            _reservationDBContext.Reservation.Remove(res);
            _reservationDBContext.SaveChanges();
        }
      

    }
}
    
