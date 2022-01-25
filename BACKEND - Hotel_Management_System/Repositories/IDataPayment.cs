using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Repositories
{
   public interface IDataPayment<TEntity>
    {
        void Add(TEntity entity);
        IEnumerable<TEntity> GetAll();
        
        TEntity Get(int Id);

        double getIncome();

    }
}
