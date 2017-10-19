using Bara.Abstract.Core;
using Bara.Core.Mapper;

namespace SQLReportTest
{
    public class TestBase
    {
        public IBaraMapper _baraMapper;
        public TestBase()
        {
            _baraMapper = MapperContainer.Instance.GetBaraMapper();
        }

    }
}