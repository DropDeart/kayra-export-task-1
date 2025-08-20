using KayraExportTask1Api.DTOs;

namespace KayraExportTask1Api.Services
{
    public interface IProductService
    {
        Task<IEnumerable<ProductDto>> GetAllAsync(string? searchText = "");
        Task<bool>CreateAsync(ProductDto product);
    }
}
