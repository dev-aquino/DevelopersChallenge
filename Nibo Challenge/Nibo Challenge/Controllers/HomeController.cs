using Microsoft.AspNetCore.Mvc;

namespace Nibo_Challenge.Controllers
{
    public class HomeController : Controller
    {
        private const string basePath = "~/wwwroot/dist/";

        public IActionResult Index()
        {
            return View($"{basePath}index.html");
        }
    }
}
