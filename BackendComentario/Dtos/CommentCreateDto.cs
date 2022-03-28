using System;
using System.ComponentModel.DataAnnotations;

namespace BackendComentario.Dtos
{
    public class CommentCreateDto
    {
        public string Title { get; set; }
        [Required]
        public string Creator { get; set; }
        [Required]
        public string Text { get; set; }
        [Required]
        public DateTime DateCreate { get; set; }
        public CommentCreateDto()
        {
            DateCreate = DateTime.Now;
        }

    }
}
