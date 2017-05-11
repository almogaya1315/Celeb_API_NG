namespace DAL.Entities
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Linq;

    public class CelebContext : DbContext
    {
        public CelebContext()
            : base("name=CelebContext")
        {
        }

        public virtual DbSet<CelebEntity> Celebrities { get; set; }

        public IList<CelebEntity> GetCelebs()
        {
            return Celebrities.ToList();
        }

        public CelebEntity GetCeleb(int id)
        {
            return Celebrities.FirstOrDefault(c => c.Id == id);
        }

        public void CreateCeleb(CelebEntity entity)
        {
            Celebrities.Add(entity);
            SaveChanges();
        }

        public void EditCeleb(int id, CelebEntity celebEntity)
        {
            CelebEntity toEdit = GetCeleb(id);
            if (toEdit.Name != celebEntity.Name) toEdit.Name = celebEntity.Name;
            if (toEdit.Age != celebEntity.Age) toEdit.Age = celebEntity.Age;
            if (toEdit.Country != celebEntity.Country) toEdit.Country = celebEntity.Country;
            SaveChanges();
        }

        public void DeleteCeleb(int id)
        {
            Celebrities.Remove(GetCeleb(id));
            SaveChanges();
        }
    }
}