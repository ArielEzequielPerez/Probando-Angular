using AutoMapper;
using BackendComentario.Data.Repository.Interfaces;
using BackendComentario.Dtos;
using BackendComentario.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackendComentario.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ComentarioController : ControllerBase
    {
        private readonly IRepository _repository;
        private readonly IMapper _mapper;
        public ComentarioController(IRepository repository, IMapper mapper)
        {
            _repository=repository;
            _mapper=mapper;
        }
        // GET: api/<ComentarioController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try 
            {
                return Ok(await _repository.GetCommentsAsync());
            } catch(Exception ex) 
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<ComentarioController>/idd
        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            try
            {
                var comment = await _repository.GetCommentByIdAsync(id);
                if (comment == null)
                    return NotFound();
                return Ok(comment);
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<ComentarioController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] CommentCreateDto commentDto)
        {
            var commentToCreate = _mapper.Map<Comment>(commentDto);
            _repository.Add(commentToCreate);
            if (await _repository.SaveAll())
                return Ok(commentToCreate);

            return BadRequest();
        }

        // PUT api/<ComentarioController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] CommentUpdateDto commentUpdateDto)
        {
            if (id != commentUpdateDto.Id)
                return BadRequest("not matched id");

            var commentToUpdate = _repository.GetCommentByIdAsync(commentUpdateDto.Id);
            if (commentToUpdate == null)
                return BadRequest();

            await _mapper.Map(commentUpdateDto, commentToUpdate);
            if (!await _repository.SaveAll())
                return NoContent();
            return Ok(new { messege = "comentario actualiado con exito"});
        }

        // DELETE api/<ComentarioController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var comment = await _repository.GetCommentByIdAsync(id);
            if (comment == null)
                return NotFound();
            _repository.Delete(comment);
            if (!await _repository.SaveAll())
                return BadRequest();
            return Ok(new { message = "Comentario borrado con exito" });
        }
    }
}
