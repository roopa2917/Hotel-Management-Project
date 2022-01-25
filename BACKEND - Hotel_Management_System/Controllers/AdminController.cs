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
    public class AdminController : ControllerBase
    {


        private readonly IDataOwner<Owner> _context;

        public AdminController(IDataOwner<Owner> context)
        {
            _context = context;
        }

        [HttpGet("login/{email}/{pwd}")]
        public string Login(string email, string pwd)
        {
            if (email == "admin@gmail.com" && pwd == "Admin@123")
                return "Successful";
            return "Login Failed!";
        }

        [HttpGet("view")]
        public IActionResult viewdetail()
        {
            IEnumerable<Owner> owners = _context.GetAll();
            return Ok(owners);
        }


        [HttpPost("add")]
        //public IActionResult Add(string email, string pwd, string des)
        public IActionResult AddEmp(Owner user)
        {
            /*Owner owner = new Owner()
            {
                Email = email,
                Password=pwd,
                Designation=des
            };*/
            _context.Add(user);
            return NoContent();
        }

        [HttpPut("update/{email}")]

        // public IActionResult Put(string email, string new_email, string pwd, string des)
        public IActionResult Put(string email,Owner user)
        {
            /*Owner owner = new Owner()
            {
                Email=new_email,
                Password=pwd,
                Designation=des


            };*/
            Owner UserToUpdate = _context.Get(email);
            if (UserToUpdate == null)
            {
                return NotFound("record couldn't be found.");
            }

            _context.Update(UserToUpdate, user);
            return Ok(UserToUpdate);
            //return NoContent();
        }

        [HttpDelete("delete/{email}")]
        public IActionResult Delete(string email)
        {
          Owner  owner  = _context.Get(email);
            if (owner == null)
            {
                return NotFound("record couldn't be found.");
            }

            _context.Delete(owner.Email);
            return NoContent();
        }


    }
}
