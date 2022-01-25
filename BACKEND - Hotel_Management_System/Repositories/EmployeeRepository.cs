using HotelManagement.Data;
using HotelManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Repositories
{
    public class EmployeeRepository : IDataEmployee<Staff_Members>
    {
        private readonly Context _StaffDBContext;

        public EmployeeRepository(Context Context)
        {
            _StaffDBContext = Context;
        }
        public void AddEmployee(Staff_Members entity)
        {


            _StaffDBContext.Staff_Member.Add(entity);
            _StaffDBContext.SaveChanges();




        }

        public IEnumerable<Staff_Members> GetAll()
        {
            return _StaffDBContext.Staff_Member.ToList();
        }
        public void Delete(int id)
        {
            Staff_Members employee = _StaffDBContext.Staff_Member.Find(id);
            _StaffDBContext.Staff_Member.Remove(employee);
            _StaffDBContext.SaveChanges();
        }
        public Staff_Members Get(int id)
        {
            return _StaffDBContext.Staff_Member.Find(id);
        }
        public void Update(Staff_Members dbEntity, Staff_Members entity)
        {
            
            dbEntity.Emp_Name = entity.Emp_Name;
            dbEntity.Emp_Address = entity.Emp_Address;
            dbEntity.Age = entity.Age;
            dbEntity.Email = entity.Email;
            dbEntity.Emp_Sal = entity.Emp_Sal;
            dbEntity.NIC = entity.NIC;
            dbEntity.Occupation = entity.Occupation;

            _StaffDBContext.SaveChanges();
        }

        public double staffSal()
        {
            return _StaffDBContext.Staff_Member.Sum(s=>s.Emp_Sal);

        }




    }
}
