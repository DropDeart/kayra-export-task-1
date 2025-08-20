using KayraExportTask1Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace KayraExportTask1Api.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
    }
}
