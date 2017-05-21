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
    [EnableCorsAttribute("http://localhost:55152", "*", "*")]
    public class CelebsController : ApiController
    {
        CelebContext db { get; set; }

        // GET: api/Celebs
        [HttpGet]
        public IHttpActionResult Get()
        {
            using (db = new CelebContext())
            {
                List<CelebModel> models = new List<CelebModel>();
                foreach (var entity in db.Celebrities) models.Add(new CelebModel()
                {
                    Id = entity.Id,
                    Name = entity.Name,
                    Age = entity.Age,
                    Country = entity.Country
                });
                return Ok<IEnumerable<CelebModel>>(models);
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
        [HttpPost]
        public IHttpActionResult Post([FromBody]CelebModel model)
        {
            using (db = new CelebContext())
            {
                int id;
                try
                {
                    id = db.CreateCeleb(new CelebEntity()
                    {
                        Name = model.Name,
                        Age = model.Age,
                        Country = model.Country
                    });
                }
                catch (Exception)
                {
                    throw;
                }
                return Ok($"Id #{id} was added!");
            }
        }

        // PUT: api/Celebs/5
        [HttpPut]
        public IHttpActionResult Put([FromUri]int id, [FromBody]CelebModel model)
        {
            using (db = new CelebContext())
            {
                try
                {
                    db.EditCeleb(id, new CelebEntity()
                    {
                        Name = model.Name,
                        Age = model.Age,
                        Country = model.Country
                    });
                }
                catch (Exception)
                {
                    throw;
                }
                return Ok($"Id #{id} was changed!");
            }
        }

        // DELETE: api/Celebs/5
        [HttpDelete]
        public IHttpActionResult Delete([FromUri]int id)
        {
            using (db = new CelebContext())
            {
                try
                {
                    db.DeleteCeleb(id);
                }
                catch (Exception)
                {
                    throw;
                }
                return Ok($"Id #{id} was deleted!");
            }
        }
    }
}
