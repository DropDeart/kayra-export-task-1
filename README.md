# Kayra Export Task Projesi

## 📌 Proje Hakkında
Bu proje, ürün yönetimi için geliştirilmiş bir full-stack web uygulamasıdır. Kullanılan teknolojiler:

- **Frontend:** Next.js (React) Sürüm : NextJS 15.5
- **Backend:** ASP.NET Core Web API  (.Net Core 8)
- **Veritabanı:** PostgreSQL  

Frontend, backend API'den veri çekerek ürün tablosunda gösterir. Özellikler:

- Ürünler için CRUD işlemleri
- Server-side ve client-side render (Next.js)
- Frontend ile backend iletişimi için CORS yapılandırması
- Dinamik ürün tablosu

---

## 🛠 Proje Yapısı

frontend/
├─ app/
│ ├─ page.tsx # Ana sayfa ve ürün tablosu
│ ├─ products/
│ │ ├─ ProductTable.tsx
│ │ └─ ProductModal.tsx
│ └─ services/
│ └─ productService.ts
backend/
├─ Controllers/
│ └─ ProductController.cs
├─ Services/
│ └─ IProductService.cs, ProductService.cs
├─ Models/
│ └─ Product.cs, ProductDto.cs

## API ve Veritabanını Çalıştırma

### 1. Gerekli Araçlar
- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- SQL Server veya PostgreSQL (projede hangi veritabanı kullanılıyorsa)
- (Opsiyonel) Visual Studio / VS Code

### 2. Paketleri Restore Etme
Terminal veya komut satırını açın ve backend projesinin dizinine gidin:

```bash
cd backend
dotnet restore

```

### 3. EF Migration İşlemi
Terminal veya komut satırını açın ve backend projesinin dizinine gidin:
 ```bash
cd backend
dotnet ef database update
```
Veritabanı bağlantı ayarlarını appsettings.json içinde kontrol edin.

Projeyi başlatın.

