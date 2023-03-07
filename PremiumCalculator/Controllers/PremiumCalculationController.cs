using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PremiumCalculator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PremiumCalculator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PremiumCalculationController : ControllerBase
    {
        // GET: api/<PremiumCalculationController>
        [HttpGet("{SumInsured}/{OccupationRating}/{Age}")]
        public IEnumerable<string> Get(int SumInsured, double OccupationRating, double Age)
        {
            if (Age <= 70)
            {
                Premium premium = new();

                premium.DeathPremium = (float)((SumInsured * OccupationRating * Age) / 1000 * 12);
                premium.TPDPremiumMonthly = (float)((SumInsured * OccupationRating * Age) / 1234);

                string json = JsonConvert.SerializeObject(premium);
                return new string[] { premium.DeathPremium.ToString("0.00"), premium.TPDPremiumMonthly.ToString("0.00") };
            }

            else
            {
                //return new HttpResponseMessage(HttpStatusCode.NotAcceptable);
                return new string[] { HttpStatusCode.NotAcceptable.ToString(), "Age is out of limit" };
            }
        }


    }
}
