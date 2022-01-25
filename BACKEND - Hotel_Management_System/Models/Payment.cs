using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Models
{
    public class Payment
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int pay_id { get; set; }
        public string Pay_time { get; set; }
        public string Credit_details { get; set; }
        public double Total { get; set; }
        [ForeignKey("bill_id")]
        public int bill_id { get; set; }
        
       
    }
}
