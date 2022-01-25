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
    public class LoginController : ControllerBase
    {

        private readonly IDataOwner<Owner> _context;

        public LoginController(IDataOwner<Owner> context)
        {
            _context = context;
        }

        [HttpGet("{email}/{pwd}")]
        public Owner Login(string email, string pwd)
        {
            Owner user = new Owner()
            {
                Email = email,
                Password = pwd
            };
            var currentuser = _context.ValidateLogin(user);
            if (currentuser != null)
            {
                return _context.Get(email);
            }
            else
                return new Owner { Email = "", Password = "", Designation = "" }; ;

           
          
               
            /*if(currentuser.Designation=="Owner")
                 return Redirect("~/api/Owner/");
            else if (currentuser.Designation == "Manager")
                return Redirect("~/api/Manager/");
            else if (currentuser.Designation == "Receptionist")
                return Redirect("~/api/Receptionist/");
          
           else  return Content("Login Failed");*/

        }

    }
}

