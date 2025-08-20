using KayraExportTask1Api.DTOs;
using KayraExportTask1Api.Entities;
using KayraExportTask1Api.Repositories;

namespace KayraExportTask1Api.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repository;

        public ProductService(IProductRepository productRepository)
        {
            _repository = productRepository;   
        }
        public async Task<bool> CreateAsync(ProductDto productDto)
        {
            try
            {
                var product = new Product
                {
                    Id = Guid.NewGuid(),
                    Name = productDto.Name,
                    Description = productDto.Description,
                    Price = productDto.Price,
                    Stock = productDto.Stock,
                    CreatedAt = DateTime.UtcNow
                };

                var added = await _repository.AddAsync(product);
                if (!added)
                    return false;
                return added;
            }
            catch (Exception ex) {
                throw new ApplicationException("Ürün eklenirken bir hata oluştu.", ex);
            }
        }

        public async Task<IEnumerable<ProductDto>> GetAllAsync(string? searchText = "")
        {
            try
            {
                var products = await _repository.GetAllAsync(searchText, false);

                return products.Select(p => new ProductDto
                {
                    Id = p.Id,
                    Name = p.Name,
                    Description = p.Description,
                    Price = p.Price,
                    Stock = p.Stock
                }).ToList();
            }
            catch(Exception ex)
            {
                throw new ApplicationException("Ürün listesi alınırken bir hata oluştu.", ex);
            }
            
        }
    }
}
