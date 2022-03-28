using BackendComentario.Models;
using Microsoft.EntityFrameworkCore;

namespace BackendComentario.Data
{
    public class ComentarioDbContext : DbContext
    {
        public ComentarioDbContext(DbContextOptions<ComentarioDbContext> options ): base(options)
        {

        }
        public DbSet<Comment> comments { get; set; }
    }

}
