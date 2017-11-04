using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using NPOI;
using System.IO;
using NPOI.SS.UserModel;
using NPOI.HSSF.UserModel;
using Bara.Abstract.Core;
using Bara.Core.Mapper;

namespace SQLReport
{
    public class SqlToExcel
    {
        private static IBaraMapper _baraMapper;
        public SqlToExcel(IBaraMapper baraMapper)
        {
            _baraMapper = baraMapper;
        }

        public SqlToExcel()
        {
            _baraMapper = MapperContainer.Instance.GetBaraMapper();
        }
        public IDataReader QueryDataSetBySql(String Sql, object reqParams)
        {
            var dataReader = _baraMapper.ExecuteReader(Sql, reqParams);
            return dataReader;
        }

        //从datereader（也可以使用datatable） 读取数据添加到excel工作簿，然后转换到内存流
        public MemoryStream ReaderToExcel(IDataReader reader)
        {
            MemoryStream ms = new MemoryStream();

            using (reader)
            {
                IWorkbook workbook = new HSSFWorkbook();
                ISheet sheet = workbook.CreateSheet();
                IRow headerRow = sheet.CreateRow(0);
                int cellCount = reader.FieldCount;

                // handling header.
                for (int i = 0; i < cellCount; i++)
                {
                    headerRow.CreateCell(i).SetCellValue(reader.GetName(i));
                }

                // handling value.
                int rowIndex = 1;
                while (reader.Read())
                {
                    IRow dataRow = sheet.CreateRow(rowIndex);

                    for (int i = 0; i < cellCount; i++)
                    {
                        dataRow.CreateCell(i).SetCellValue(reader[i].ToString());
                    }

                    rowIndex++;
                }

                workbook.Write(ms);
                ms.Flush();
                ms.Position = 0;
            }
            return ms;
        }

        public void SaveToFile(MemoryStream ms, string fileName)
        {
            using (FileStream fs = new FileStream(fileName, FileMode.Create, FileAccess.Write))
            {
                byte[] data = ms.ToArray();

                fs.Write(data, 0, data.Length);
                fs.Flush();

                data = null;
            }
        }

        //将内存流输出为下载文件
        //static void RenderToBrowser(MemoryStream ms, HttpContext context, string fileName)
        //{
        //    if (context.Request.Browser.Browser == "IE")
        //        fileName = HttpUtility.UrlEncode(fileName);
        //    context.Response.AddHeader("Content-Disposition", "attachment;fileName=" + fileName);
        //    context.Response.BinaryWrite(ms.ToArray());
        //}
    }
}
