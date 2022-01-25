using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Repositories
{
  public  interface IDataEmployee<TEntity>
    {
       
        void AddEmployee(TEntity entity);
        IEnumerable<TEntity> GetAll();
        void Delete(int entity);
        TEntity Get(int id);
        void Update(TEntity dbEntity, TEntity entity);
        double staffSal();

    }
}
