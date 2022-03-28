
using System;
using System.ComponentModel.DataAnnotations;

namespace BackendComentario.Dtos
{
    public class CommentUpdateDto
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Creator { get; set; }
        [Required]
        public string Text { get; set; }
        [Required]
        public DateTime DateCreate { get; set; }
    }
}
