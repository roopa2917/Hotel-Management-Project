using HotelManagement.Models;
using HotelManagement.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OwnerController : ControllerBase
    {

        private readonly IDataEmployee<Staff_Members> _context;
        private readonly IDataPayment<Payment> _context2;

        public OwnerController(IDataEmployee<Staff_Members> context, IDataPayment<Payment> context2)
        {
            _context = context;
            _context2 = context2;
        }

        [HttpGet("view")]
        public IActionResult viewdetail()
        {
           
            IEnumerable<Staff_Members> employees = _context.GetAll();
            return Ok(employees);
        }





        [HttpPost("add")]
        //public IActionResult AddEmp(string emp_Name, string emp_Address, string nic, double emp_Sal, int age, string occupation, string email)
        public IActionResult AddEmp(Staff_Members employee)
        {
            /*Staff_Members employees = new Staff_Members()
            {
                Emp_Name = emp_Name,
                Emp_Address = emp_Address,
                NIC = nic,
                Emp_Sal = emp_Sal,
                Age = age,
                Occupation = occupation,
                Email = email


            };*/

            _context.AddEmployee(employee);
            //return Content("Record Added Successfuly");
            return NoContent();
        }

        [HttpDelete("delete/{id:int}")]

        public IActionResult Delete(int id)
        {
            Staff_Members employee = _context.Get(id);
            if (employee == null)
            {
                return NotFound("The Employee record couldn't be found.");
            }

            _context.Delete(employee.stm_id);
            return NoContent();
        }
        [HttpPut("update/{id}")]
  //      public IActionResult Put(int id, string emp_Name, string emp_Address, string nic, double emp_Sal, int age, string occupation, string email)
        public IActionResult Put(string id, Staff_Members employees)
{
            int stm_id = Convert.ToInt32(id);
           /* Staff_Members employees = new Staff_Members()
            {
                Emp_Name = emp_Name,
                Emp_Address = emp_Address,
                NIC = nic,
                Emp_Sal = emp_Sal,
                Age = age,
                Occupation = occupation,
                Email = email


            };*/

            Staff_Members employeeToUpdate = _context.Get(stm_id);
            if (employeeToUpdate == null)
            {
                return NotFound("The Employee record couldn't be found.");
            }

            _context.Update(employeeToUpdate, employees);
            return Ok(employeeToUpdate);
            //return NoContent();
        }


        [HttpGet("staffSal")]
        public double calstaffSal()
        {
            return _context.staffSal();
        }

        [HttpGet("income")]
        public double calIncome()
        {
            return _context2.getIncome();
        }














    }

}

