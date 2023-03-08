using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PremiumCalculator.Models
{
    public class Premium
    {
        public int Sumins { get; set; }
        public double Occupation { get; set; }
        public double Age { get; set; }

        public float DeathPremium { get; set; }
        public float TPDPremiumMonthly { get; set; }
    }
}
