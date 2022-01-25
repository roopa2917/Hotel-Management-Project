using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Repositories
{
    public interface IDataBill<TEntity>
    {
        void Add(TEntity entity);
        TEntity Get(int Id);
        TEntity GetId(int gu_id, string dt);
    }
}
