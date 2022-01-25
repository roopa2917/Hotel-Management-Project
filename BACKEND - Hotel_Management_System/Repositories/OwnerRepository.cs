using HotelManagement.Data;
using HotelManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Repositories
{
    public class OwnerRepository : IDataOwner<Owner>
    {
        private readonly Context _OwnerDBContext;

        public OwnerRepository(Context Context)
        {
            _OwnerDBContext = Context;
        }
        public void Add(Owner entity)
        {
            _OwnerDBContext.Owners.Add(entity);
            _OwnerDBContext.SaveChanges();
        }
        public IEnumerable<Owner> GetAll()
        {
            return _OwnerDBContext.Owners.ToList();
        }

        public Owner Get(string email)
        {
            return _OwnerDBContext.Owners.Find(email);
        }
        public void Delete(String email)
        {
            Owner owner = _OwnerDBContext.Owners.Find(email);
            _OwnerDBContext.Owners.Remove(owner);
            _OwnerDBContext.SaveChanges();
        }
        
        public void Update(Owner dbEntity, Owner entity)
        {
       
            dbEntity.Password = entity.Password;
            dbEntity.Designation = entity.Designation;

            _OwnerDBContext.SaveChanges();
        }



        public Owner ValidateLogin(Owner entity)
        {
            var CurrOwner = _OwnerDBContext.Owners.FirstOrDefault
                (Owner => Owner.Email == entity.Email
                 && Owner.Password == entity.Password);
            return CurrOwner;
        }

       
       
    }
}

