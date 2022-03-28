using BackendComentario.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BackendComentario.Data.Repository.Interfaces
{
    public interface IRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<Comment>> GetCommentsAsync();
        Task<Comment> GetCommentByIdAsync(int Id);
    }
}
