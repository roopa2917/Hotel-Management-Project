using HotelManagement.Data;
using HotelManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Repositories
{
    public class GuestRepository:IDataGuest<Guest>
    {
        private readonly Context _GuestDBContext;

        public GuestRepository(Context Context)
        {
            _GuestDBContext = Context;
        }
        public void AddGuest(Guest entity)
        {


            _GuestDBContext.Guests.Add(entity);
            _GuestDBContext.SaveChanges();




        }

        public IEnumerable<Guest> GetAll()
        {
            return _GuestDBContext.Guests.ToList();
        }
        public void Delete(int id)
        {
            Guest guest = _GuestDBContext.Guests.Find(id);
            _GuestDBContext.Guests.Remove(guest);
            _GuestDBContext.SaveChanges();
        }
        public Guest Get(int id)
        {
            return _GuestDBContext.Guests.Find(id);
        }
        public void Update(Guest dbEntity, Guest entity)
        {
            dbEntity.Name = entity.Name;
            dbEntity.Phone_no = entity.Phone_no;
            dbEntity.Address = entity.Address;
            dbEntity.Company = entity.Company;
            dbEntity.Email = entity.Email;
            dbEntity.Gender = entity.Gender;
        
            _GuestDBContext.SaveChanges();
        }


    }
}
