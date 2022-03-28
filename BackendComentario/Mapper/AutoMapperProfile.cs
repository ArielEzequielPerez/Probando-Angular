using AutoMapper;
using BackendComentario.Dtos;
using BackendComentario.Models;

namespace BackendComentario.Mapper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            //Post o Create
            CreateMap<CommentCreateDto, Comment>();
            //Put o Update
            CreateMap<CommentUpdateDto, Comment>();
            //Get o List
            CreateMap<Comment, CommentToListDto>();

        }

    }
}
