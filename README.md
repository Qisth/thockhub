# ThockHub

ThockHub adalah sebuah situs web katalog yang menyediakan produk berbasis keyboard mechanical. Situs web ini dikembangkan menggunakan React dan dibuat untuk memenuhi proyek akhir dari Web Development Pathway oleh GDG on Campus Universitas Sumatera Utara (GDGoC USU).

## Struktur Situs Web

### Home
Pada saat membuka situs web ini, pengguna akan diarahkan ke halaman beranda. Di sini akan dijelaskan tentang dasar-dasar dari situs web ThockHub. Pengguna dapat mengakses halaman katalog dan wishlist melalui baik navbar maupun tombol-tombol di halaman beranda.

### Catalog
Lalu pada saat membuka halaman katalog, pengguna akan ditawarkan card-card berisi keyboard mechanical dan detail yang menyertainya. Di sini, pengguna dapat memasukkan keyboard yang mereka inginkan ke dalam wishlist mereka (yang nanti akan disimpan dalam local storage, jadi wishlistnya akan berbeda-beda tergantung peramban yang digunakan).

### Wishlist
Saat membuka halaman wishlist, pengguna akan diberikan daftar keyboard yang sudah dimasukkan ke wishlist sebelumnya. Di sini, pengguna dapat menghapus keyboard dari wishlist. Setelah itu, halaman web akan diperbarui dan keyboard yang sudah dihapus dari wishlist tidak akan ditampilkan lagi. Halaman ini juga menampilkan jumlah keyboard yang berada dalam wishlist kita. Seperti yang sudah dijelaskan sebelumnya, wishlist ini menggunakan local storage (karena tidak ada dukungan untuk backend seperti Next.js). Oleh karena itu, wishlist ini akan berbeda-beda untuk setiap peramban yang digunakan.
