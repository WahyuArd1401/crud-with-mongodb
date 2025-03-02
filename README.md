# 🥑 Meal Product API

Sebuah REST API sederhana untuk mengelola produk makanan menggunakan **Node.js**, **Express**, dan **MongoDB**.

## 🚀 Fitur
- 📌 CRUD Produk (Create, Read, Update, Delete)
- 📦 Menggunakan **MongoDB Atlas** sebagai database
- 🔧 Middleware **Express.json()** untuk parsing request body

---

## 📂 Struktur Folder
```
📦 meal-product-api
┣ 📂 models
┃ ┗ 📜 product.js
┣ 📂 routes
┃ ┗ 📜 productRoutes.js
┣ 📂 controllers
┃ ┗ 📜 productController.js
┣ 📜 .env.example (optional)
┣ 📜 server.js
┣ 📜 package.json
┣ 📜 README.md
```

---

## 🛠 Instalasi dan Penggunaan

### 1️⃣ **Clone Repository**
```sh
git clone https://github.com/username/meal-product-api.git
cd meal-product-api
```

### 2️⃣ **Instal Dependencies**
```sh
npm install
```

### 3️⃣ **Konfigurasi Environment Variables**
Buat file `.env` berdasarkan contoh di `.env.example`:
```
PORT=9000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/mydb
```

### 4️⃣ **Menjalankan Server**
- **Mode Development (dengan Watch Mode)**  
  ```sh
  npm run dev
  ```
- **Mode Production**  
  ```sh
  npm start
  ```

---

## 📌 API Endpoints

### ✅ **1. GET All Products**
```javascript
// Mendapatkan semua produk
// app.get('/api/products', async (req, res) => {
//   try {
//     // Mencari semua produk dari database
//     const products = await MealProduct.find({});
//     
//     // Mengembalikan response dengan status 200
//     res.status(200).json(products);
//   } catch (error) {
//     // Jika terjadi kesalahan, kirim pesan error dengan status 500
//     res.status(500).json({ message: error.message });
//   }
// });
```

### ✅ **2. POST Create Product**
```javascript
// Menambahkan produk baru ke database
// app.post('/api/products', async (req, res) => {
//   try {
//     // Membuat produk berdasarkan request body
//     const mealProduct = await MealProduct.create(req.body);
//     
//     // Mengembalikan produk yang telah dibuat
//     res.status(200).json(mealProduct);
//   } catch (error) {
//     // Jika terjadi kesalahan, kirim pesan error dengan status 500
//     res.status(500).json({ message: error.message });
//   }
// });
```

### ✅ **3. PUT Update Product**
```javascript
// Mengupdate produk berdasarkan ID
// app.put('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params; // Mendapatkan ID dari parameter URL
//
//     // Mencari dan memperbarui produk berdasarkan ID
//     const updatedProduct = await MealProduct.findByIdAndUpdate(id, req.body, { new: true });
//
//     if (!updatedProduct) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//
//     // Mengembalikan produk yang telah diperbarui
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     // Jika terjadi kesalahan, kirim pesan error dengan status 500
//     res.status(500).json({ message: error.message });
//   }
// });
```

### ✅ **4. DELETE Product**
```javascript
// Menghapus produk berdasarkan ID
// app.delete('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params; // Mendapatkan ID produk dari parameter URL
//
//     // Mencari dan menghapus produk dari database
//     const product = await MealProduct.findByIdAndDelete(id);
//
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//
//     // Mengembalikan pesan sukses jika produk berhasil dihapus
//     res.status(200).json({ message: 'Product deleted successfully' });
//   } catch (error) {
//     // Jika terjadi kesalahan, kirim pesan error dengan status 500
//     res.status(500).json({ message: error.message });
//   }
// });
```

---

## 🛠 Teknologi yang Digunakan
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework backend
- **MongoDB Atlas** - Database cloud
- **Mongoose** - ODM untuk MongoDB
- **Nodemon** - Auto-restart saat development

---

## 🎯 Lisensi
Proyek ini dilisensikan di bawah **MIT License**.

---

## ✨ Kontribusi
Jika ingin berkontribusi, silakan fork repository ini dan buat pull request!

---

🚀 **Happy Coding!**

