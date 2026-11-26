# Boutique Hotel Website Template (The Maritime Hotel Layout)

Bu paket, **The Maritime Hotel** web sitesinin yerleşim düzeni, renk paleti, tipografisi ve rezervasyon çubuğu mimarisi referans alınarak hazırlanmış, tamamen özelleştirilebilir, sıfır bağımlılıklı (saf HTML5, CSS3 ve Vanilla JS) bir web sitesi şablonudur.

## Klasör Yapısı

```text
boutique-hotel-template/
├── index.html          # Ana sayfa (Tam ekran hero slider, "Get A Room" rezervasyon barı, oda önizlemeleri)
├── rooms.html          # Odalar ve Süitler sayfası
├── location.html       # Konum ve Çevre rehberi
├── gallery.html        # Fotoğraf galerisi
├── history.html        # Tarihçe / Hikaye sayfası
├── dining.html         # Restoran & Gece Hayatı sayfası
├── accessibility.html  # Erişilebilirlik bildirimi
├── policy.html         # Misafir ve iptal politikaları
├── css/
│   └── style.css       # Tüm tasarım, renk değişkenleri (:root) ve mobil uyumluluk kuralları
├── js/
│   └── main.js         # Slider kontrolü, tarih seçici ve rezervasyon penceresi mantığı
└── assets/             # Kendi fotoğraflarınızla değiştireceğiniz görsel yer tutucular (.svg)
```

## Kendi Sitenize Nasıl Uyarlarsınız?

1. **Marka ve Metinler:** `index.html` ve diğer `.html` dosyalarındaki `THE MARITIME HOTEL` logosunu, adres/telefon bilgilerini ve oda açıklamalarını kendi markanızla değiştirin.
2. **Renkler ve Yazı Tipleri:** `css/style.css` dosyasının en üstündeki `:root` bölümünden `--color-navy`, `--color-gold` ve `--color-ivory` renklerini kendi kurumsal kimliğinize göre güncelleyin.
3. **Görseller:** `assets/` klasöründeki `.svg` yer tutucuların yerine kendi `.jpg` veya `.webp` fotoğraflarınızı koyup HTML/CSS içindeki dosya yollarını güncelleyin.
4. **Rezervasyon Sistemi Bağlantısı:** `js/main.js` dosyasındaki `bookingForm` submit olayını kendi rezervasyon motorunuza (ör. Cloudbeds, HotelRunner, SynXis veya özel rezervasyon sayfanız) yönlendirebilirsiniz.
