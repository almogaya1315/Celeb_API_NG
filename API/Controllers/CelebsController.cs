using API.Models;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace API.Controllers
{
    [EnableCorsAttribute("http://localhost:56399", "*", "*")]
    public class CelebsController : ApiController
    {
        CelebContext db { get; set; }

        // GET: api/Celebs
        public IEnumerable<CelebModel> Get()
        {
            using (db = new CelebContext())
            {
                List<CelebModel> models = new List<CelebModel>();
                foreach (var entity in db.GetCelebs()) models.Add(new CelebModel()
                {
                    Id = entity.Id,
                    Name = entity.Name,
                    Age = entity.Age,
                    Country = entity.Country
                });
                return models;
            }
        }

        // GET: api/Celebs/5
        public CelebModel Get(int id)
        {
            using (db = new CelebContext())
            {
                var entity = db.GetCeleb(id);
                return new CelebModel()
                {
                    Id = entity.Id,
                    Name = entity.Name,
                    Age = entity.Age,
                    Country = entity.Country
                };
            }
        }

        // POST: api/Celebs
        public void Post([FromBody]CelebModel model)
        {
            using (db = new CelebContext())
            {
                db.CreateCeleb(new CelebEntity()
                {
                    Name = model.Name,
                    Age = model.Age,
                    Country = model.Country
                });
            }
        }

        // PUT: api/Celebs/5
        public void Put(int id, [FromBody]CelebModel model)
        {
            using (db = new CelebContext())
            {
                db.EditCeleb(id, new CelebEntity()
                {
                    Name = model.Name,
                    Age = model.Age,
                    Country = model.Country
                });
            }
        }

        // DELETE: api/Celebs/5
        public void Delete(int id)
        {
            using (db = new CelebContext())
            {
                db.DeleteCeleb(id);
            }
        }
    }
}
