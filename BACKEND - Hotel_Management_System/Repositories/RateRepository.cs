using HotelManagement.Data;
using HotelManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Repositories
{
    public class RateRepository:IDataRate<Rates>
    {
        private readonly Context _RateDBContext;

        public RateRepository(Context Context)
        {
            _RateDBContext = Context;
        }
        public void Add(Rates entity)
        {
            _RateDBContext.Rate.Add(entity);
            _RateDBContext.SaveChanges();
        }
        public IEnumerable<Rates> GetAll()
        {
            return _RateDBContext.Rate.ToList();
        }

        public Rates Get(string type)
        {
            return _RateDBContext.Rate.Find(type);
        }
        public void Delete(String type)
        {
            Rates rate = _RateDBContext.Rate.Find(type);
            _RateDBContext.Rate.Remove(rate);
            _RateDBContext.SaveChanges();
        }

        public void Update(Rates dbEntity, Rates entity)
        {
           
            dbEntity.no_of_day = entity.no_of_day;
            dbEntity.no_of_guests = entity.no_of_guests;
            dbEntity.first_night_price = entity.first_night_price;
            dbEntity.Extension_price = entity.Extension_price;
            dbEntity.taxes = entity.taxes;
         
            

            _RateDBContext.SaveChanges();
        }



       


    }


}

