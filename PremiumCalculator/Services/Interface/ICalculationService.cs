using PremiumCalculator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PremiumCalculator.Services.Interface
{
    public interface ICalculationService
    {
        IEnumerable<string> calculate(Premium premium);
    }
}
