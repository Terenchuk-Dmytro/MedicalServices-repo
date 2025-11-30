using Microsoft.AspNetCore.Mvc;

namespace MedicalServices.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

