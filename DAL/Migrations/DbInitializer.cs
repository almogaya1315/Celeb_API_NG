using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Migrations
{
    public class DbInitializer: DbConfiguration
    {
        public DbInitializer()
        {
            SetDatabaseInitializer(new DropCreateDatabaseAlways<CelebContext>());
        }
    }
}
