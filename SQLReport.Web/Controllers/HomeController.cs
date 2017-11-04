using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SQLReport.Web.Models;

namespace SQLReport.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {

            return View();
        }

        [HttpGet]
        public FileStreamResult Export(String ComandText, object reqParams)
        {
            SqlToExcel sqlExcel = new SqlToExcel();
            var dataReader = sqlExcel.QueryDataSetBySql(ComandText, reqParams);
            var memStream = sqlExcel.ReaderToExcel(dataReader);
            Response.Headers.Add("Content-Disposition", "attachment;fileName='SqlReport.xls'");
            //return FileStreamResult(memStream, "application/ms-excel", "fileStream.xls");
            return new FileStreamResult(memStream, "application/ms-excel");

        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
