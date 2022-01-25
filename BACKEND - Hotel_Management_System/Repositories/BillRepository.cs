using HotelManagement.Data;
using HotelManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Repositories
{
    public class BillRepository:IDataBill<Bill>
    {
        private readonly Context _BillDBContext;

        public BillRepository(Context Context)
        {
            _BillDBContext = Context;
        }
        public void Add(Bill entity)
        {
            _BillDBContext.Bills.Add(entity);
            _BillDBContext.SaveChanges();
        }
        public Bill Get(int Id)
        {
            return _BillDBContext.Bills.Find(Id);
        }
        public Bill GetId(int gu_Id,string dt)
        {
            return _BillDBContext.Bills.FirstOrDefault(b => b.gu_id == gu_Id && b.Date == dt);
        }
    }
}
