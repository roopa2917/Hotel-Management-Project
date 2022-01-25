using HotelManagement.Data;
using HotelManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Repositories
{
    public class PaymentRepository:IDataPayment<Payment>
    {
        private readonly Context _PaymentDBContext;

        public PaymentRepository(Context Context)
        {
            _PaymentDBContext = Context;
        }
        public void Add(Payment entity)
        {
            _PaymentDBContext.Payments.Add(entity);
            _PaymentDBContext.SaveChanges();
        }
        public IEnumerable<Payment> GetAll()
        {
            return _PaymentDBContext.Payments.ToList();
        }

        public Payment Get(int Id)
        {
            return _PaymentDBContext.Payments.Find(Id);
        }

        public double getIncome()
        {
            return _PaymentDBContext.Payments.Sum(s=>s.Total);
        }
    }
}
