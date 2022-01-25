using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Models
{
    public class Staff_Members
    {
        [Key]
        public int stm_id { get; set; }
        public string Emp_Name { get; set; }
        public string Emp_Address { get; set; }
        public string NIC { get; set; }
        public double Emp_Sal { get; set; }
        public int Age { get; set; }
        public string Occupation { get; set; }
        public string Email { get; set; }
    }
}
