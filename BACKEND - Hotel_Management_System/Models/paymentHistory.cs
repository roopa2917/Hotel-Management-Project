using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelManagement.Models
{
    public class paymentHistory
    {

        public int pay_id;
        public int gu_id;
        public int no_of_guest;
        public double price;
        public double taxes;
        public double total;
        public string Credit_details;
    }
}
