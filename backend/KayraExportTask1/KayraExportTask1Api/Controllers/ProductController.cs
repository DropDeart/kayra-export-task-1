using KayraExportTask1Api.DTOs;
using KayraExportTask1Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KayraExportTask1Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(string? searchText = "")
        {
            var result = await _productService.GetAllAsync(searchText);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Create(ProductDto productDto)
        {
            var created = await _productService.CreateAsync(productDto);
            return Ok(created);
        }
    }
}
