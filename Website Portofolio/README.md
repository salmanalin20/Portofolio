# Portfolio Website - Salman Ali Nazar

Portfolio website modern dengan desain **glassmorphism** yang menampilkan profil profesional, keahlian, dan proyek-proyek yang telah dikerjakan.

## 🎨 Fitur Utama

### Design & UI/UX
- **Glassmorphism Design** - Efek kaca blur yang elegan dan modern
- **Dark/Light Mode Toggle** - Switch antara tema gelap dan terang dengan preferensi tersimpan
- **Multi-Language Support** - Bahasa Indonesia dan English dengan toggle switcher
- **Responsive Design** - Optimal di semua perangkat (desktop, tablet, mobile)
- **Smooth Animations** - Berbagai animasi on-scroll (fade, zoom, slide, stagger)

### Sections
1. **Hero Section** - Intro dengan nama, subtitle, dan CTA buttons
2. **About Section** - Profil singkat dengan statistik (projects, clients, experience)
3. **Skills Section** - 6 kategori keahlian dengan icons dan tags
4. **Portfolio Section** - Showcase 3 proyek terbaik dengan image dan deskripsi
5. **Contact Section** - 4 metode kontak dengan action buttons
6. **Footer** - Social media links dan copyright

### Interactive Features
- **Download CV Button** - Button untuk download CV (ready untuk integrasi file)
- **Email Button** - Langsung buka email client dengan alamat pre-filled
- **WhatsApp Button** - Direct link ke WhatsApp chat
- **Instagram Button** - Link ke profil Instagram
- **Social Links** - GitHub, LinkedIn, Instagram di footer

## 🛠️ Teknologi

- **HTML5** - Semantic structure
- **CSS3** - Glassmorphism effects, animations, responsive design
- **JavaScript** - Interactive features, theme toggle, language switcher
- **Google Fonts** - Inter & Outfit typography
- **LocalStorage API** - Menyimpan preferensi tema dan bahasa

## 📁 Struktur File

```
Website Portofolio/
├── index.html          # Struktur HTML dengan data attributes untuk multi-language
├── style.css           # Design system dengan glassmorphism dan dual theme
├── script.js           # Interactive functionality dan animations
└── README.md           # Dokumentasi project
```

## 🚀 Cara Menggunakan

1. **Buka Website**
   ```
   Double-click index.html atau buka di browser
   ```

2. **Theme Toggle**
   - Klik slider di navigation bar untuk switch dark/light mode
   - Preferensi akan tersimpan otomatis

3. **Language Switcher**
   - Klik button dengan flag (🇮🇩/🇬🇧) untuk switch bahasa
   - Semua teks akan berubah sesuai bahasa yang dipilih

4. **Contact Buttons**
   - Email: Buka email client
   - WhatsApp: Direct chat
   - Instagram: Kunjungi profil
   - Download CV: Download file CV (perlu integrasi file)

## 🎯 Customization

### Mengubah Informasi Personal
Edit di `index.html`:
- Nama, subtitle, deskripsi (lines 52-63)
- About text (lines 98-112)
- Skills dan tags (lines 145-230)
- Projects (lines 244-312)
- Contact info (lines 327-361)

### Mengubah Warna Tema
Edit CSS variables di `style.css`:
- Dark mode: `:root` (lines 13-59)
- Light mode: `body.light-mode` (lines 64-92)

### Menambah Bahasa Baru
1. Tambah data attribute: `data-lang-fr="Text"`
2. Update JavaScript `updateLanguage()` function
3. Tambah button untuk bahasa baru

## 📱 Contact Information

- **Email**: salmanalinazar@mail.ugm.ac.id
- **WhatsApp**: +62 811 257 828
- **Instagram**: [@salmanali20_](https://www.instagram.com/salmanali20_/)
- **GitHub**: [Salmanali20](https://github.com/Salmanali20)
- **LinkedIn**: [Salman Ali Nazar](https://www.linkedin.com/in/salman-ali-nazar-0a8350263/)
- **Location**: Yogyakarta, Indonesia

## ✨ Highlights

- Premium glassmorphism design yang eye-catching
- Dual theme (dark/light) dengan smooth transitions
- Multi-language support (ID/EN) dengan localStorage
- Multiple contact methods dengan action buttons
- Fully responsive untuk semua devices
- Performance optimized dengan Intersection Observer
- SEO-ready dengan proper meta tags

## 📄 License

© 2025 Salman Ali Nazar. All rights reserved.

---

**Made with ❤️ using HTML, CSS & JavaScript**
