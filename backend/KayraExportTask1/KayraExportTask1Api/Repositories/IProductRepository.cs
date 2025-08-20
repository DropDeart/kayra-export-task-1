using KayraExportTask1Api.Entities;

namespace KayraExportTask1Api.Repositories
{
    public interface IProductRepository
    {
        Task<IReadOnlyList<Product>> GetAllAsync(string? text = null, bool tracking = true);
        Task<bool> AddAsync(Product product);
        Task<bool> SaveAsync();
    }
}
