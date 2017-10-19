using Microsoft.VisualStudio.TestTools.UnitTesting;
using SQLReport;

namespace SQLReportTest
{
    [TestClass]
    public class SqlReportTest : TestBase
    {
        [TestMethod]
        public void SqlReport_Test()
        {
            SqlToExcel sqlExcel = new SqlToExcel(_baraMapper);
            //var result = _baraMapper.QueryBySql("Select * from T_Test", null);
            var dataReader = sqlExcel.QueryDataSetBySql("Select * from T_Test", null);
            var memStream = sqlExcel.ReaderToExcel(dataReader);
            sqlExcel.SaveToFile(memStream, "test2.xls");
        }
    }
}
