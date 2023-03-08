using Newtonsoft.Json;
using PremiumCalculator.Models;
using PremiumCalculator.Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PremiumCalculator.Services
{
    public class CalculationService : ICalculationService
    {
        public IEnumerable<string> calculate(Premium premium)
        {
            premium.DeathPremium = (float)((premium.Sumins * premium.Occupation * premium.Age) / 1000 * 12);
            premium.TPDPremiumMonthly = (float)((premium.Sumins * premium.Occupation * premium.Age) / 1234);

            
            return new string[] { "Death Premium : " + premium.DeathPremium.ToString("0.00"), "TPD Premium Monthly : " + premium.TPDPremiumMonthly.ToString("0.00") };
        }
    }
}
