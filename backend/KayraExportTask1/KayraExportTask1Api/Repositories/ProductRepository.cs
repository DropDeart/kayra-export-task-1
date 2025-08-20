using KayraExportTask1Api.Context;
using KayraExportTask1Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace KayraExportTask1Api.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDbContext _appDbContext;
        private readonly DbSet<Product> _products;

        public ProductRepository(AppDbContext context)
        {
            _appDbContext = context;
            _products = _appDbContext.Set<Product>();
        }

        public async Task<IReadOnlyList<Product>> GetAllAsync(string? text = null, bool tracking = true)
        {
            var query = _products.AsQueryable();

            if (!tracking)
                query = query.AsNoTracking();

            if (!string.IsNullOrEmpty(text))
            {
                text = text.ToLower();
                query = query.Where(p =>
                    p.Name.ToLower().Contains(text) ||
                    p.Description.ToLower().Contains(text) ||
                    p.Id.ToString().Contains(text));
            }

            return await query.ToListAsync();
        }

        public async Task<bool> AddAsync(Product product)
        {
            await _products.AddAsync(product);
            return await SaveAsync();
        }
        

        public async Task<bool> SaveAsync()
        {
            return await _appDbContext.SaveChangesAsync() > 0;
        }
    }
}
