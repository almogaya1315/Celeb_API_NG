namespace DAL.Entities
{
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class CelebContext : DbContext
    {
        public CelebContext()
            : base("name=CelebContext")
        {
        }

        public virtual DbSet<CelebEntity> Celebrities { get; set; }
    }
}