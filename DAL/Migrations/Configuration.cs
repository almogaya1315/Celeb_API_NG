namespace DAL.Migrations
{
    using Entities;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<DAL.Entities.CelebContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(DAL.Entities.CelebContext context)
        {
            context.Celebrities.Add(new CelebEntity() { Name = "Lior", Age = 32, Country = "Israel" });
            context.SaveChanges();
        }
    }
}
