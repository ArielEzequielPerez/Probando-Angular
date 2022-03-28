using BackendComentario.Data.Repository.Interfaces;
using BackendComentario.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BackendComentario.Data.Repository
{
    public class Repository : IRepository
    {
        private readonly ComentarioDbContext _context;
        public Repository(ComentarioDbContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Comment> GetCommentByIdAsync(int Id)
        {
            return await _context.comments.FindAsync(Id);
        }

        public async Task<IEnumerable<Comment>> GetCommentsAsync()
        {
            return await _context.comments.ToListAsync();
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
