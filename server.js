const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// public klasöründeki HTML, CSS ve resim(logo) dosyalarını dışa açıyoruz
app.use(express.static(path.join(__dirname, 'public')));

// Ana sayfa yönlendirmesi
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Sunucuyu başlatma
app.listen(PORT, () => {
    console.log(`Sunucu hatasız çalışıyor: http://localhost:${PORT}`);
});