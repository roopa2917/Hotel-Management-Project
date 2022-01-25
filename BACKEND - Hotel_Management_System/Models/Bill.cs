using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Models
{
    public class Bill
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int bill_id { get; set; }
        
        [ForeignKey("gu_id")]
        public int gu_id { get; set; }
        
        
        public int no_of_guest { get; set; }
        public double Price { get; set; }
        public double Taxes { get; set; }
        public string Date { get; set; }
       
        
    }
}
