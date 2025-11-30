using Microsoft.AspNetCore.Mvc;

namespace MedicalServices.Controllers
{
    public class AuthController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}

