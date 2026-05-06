# PMI Türkiye SSS Chatbot

PMI Türkiye web sitesine kayan (floating) bir SSS asistanı olarak gömülmek
üzere tasarlanmış, **statik** ve hafif bir chatbot widget'ıdır.

- Backend yok
- Veritabanı yok
- API anahtarı yok
- Build adımı yok

Tüm yanıtlar `faqData.js` dosyasındaki SSS verisinden üretilir. Eşleşen
bir cevap bulunamazsa kullanıcıya PMI Türkiye ekibiyle iletişime geçmesi
önerilir.

---

## Dosya Yapısı

```
pmi-chatbot/
├── index.html        # Yerel test için demo sayfa (widget'ı yükler)
└── public/
    ├── chat.html     # Iframe içinde açılan chat arayüzü
    ├── widget.js     # Sayfaya gömülen kayan buton + popup
    ├── faqData.js    # SSS verisi (tek bilgi kaynağı)
    └── style.css     # chat.html stilleri
```

> Cloudflare Pages'e deploy ederken `public/` klasörünün içeriği
> sitenin köküne (root) servis edilir. Yani gerçek dağıtımda dosyalar
> `https://YOUR-DOMAIN/widget.js`, `https://YOUR-DOMAIN/chat.html`,
> `https://YOUR-DOMAIN/faqData.js`, `https://YOUR-DOMAIN/style.css`
> yollarından erişilebilir olur.

---

## faqData.js Nasıl Güncellenir?

`public/faqData.js` dosyasındaki `faqData` dizisine aynı yapıyla yeni
nesneler ekleyin:

```js
const faqData = [
  {
    category: "Üyelik",
    question: "PMI Türkiye'ye nasıl üye olabilirim?",
    answer: "Önce pmi.org üzerinden global PMI üyeliğinizi ...",
  },
  // yeni soru-cevaplar buraya ...
];
```

### Önerilen Kategoriler

`Genel`, `Üyelik`, `Kurumsal Üyelik`, `PMP`, `CAPM`, `Sertifikasyon`,
`Gönüllülük`, `Mentorluk`, `Etkinlikler`, `Dergi`, `Sponsorluk`, `PDU`

### Eşleştirme Mantığı

- Kullanıcı mesajı küçük harfe çevrilir ve Türkçe karakterler (`ç, ğ, ı,
  ö, ş, ü`) sadeleştirilir.
- Kelimeler, soru/cevap/kategori metinlerinde aranır ve bir skor
  hesaplanır.
- Yeterince güçlü bir eşleşme bulunduğunda ilgili cevap döndürülür.
- Aksi halde sabit yanıt verilir:
  > "Bu konuda SSS verisi içinde net bir yanıt bulamadım. Kesin bilgi
  > için PMI Türkiye ekibiyle iletişime geçmenizi öneririm."

---

## Cloudflare Pages'e Deploy

1. Bu projedeki dosyaları bir GitHub deposuna yükleyin.
2. Cloudflare Pages → **Create a project** → **Connect to Git**.
3. Repoyu seçin ve aşağıdaki ayarları kullanın:

   | Ayar | Değer |
   | --- | --- |
   | Framework preset | **None** |
   | Build command | _(boş bırakın)_ |
   | Build output directory | `public` |
   | Root directory | `/` (varsayılan) |

4. Deploy edin. Cloudflare size `https://your-project.pages.dev` gibi
   bir URL verecektir.

> Notlar:
> - `index.html` proje kökündedir; bu sayfa **sadece geliştirme/test**
>   amaçlıdır. Cloudflare Pages'te `public/` klasörünü yayınladığınız
>   için demo sayfası prod'a dahil edilmez. İsterseniz `index.html`'i
>   `public/` içine de kopyalayabilirsiniz.

---

## Web Ekibine Verilecek Entegrasyon Kodu

PMI Türkiye web ekibinin (WordPress, PHP veya başka bir CMS) sitenin
`<body>` etiketinin kapanışından hemen önce aşağıdaki tek satırı eklemesi
yeterlidir:

```html
<script src="https://YOUR-CLOUDFLARE-PAGES-URL/widget.js" defer></script>
```

`YOUR-CLOUDFLARE-PAGES-URL` kısmını Cloudflare Pages tarafından verilen
gerçek alan adınızla değiştirin (örn. `pmi-chatbot.pages.dev` veya
özel domain'iniz).

### WordPress'e Ekleme

- **Tema yöntemi:** Aktif temanın `footer.php` dosyasında `</body>`
  etiketinden hemen önce script satırını ekleyin.
- **Eklenti yöntemi:** "Insert Headers and Footers" gibi bir eklenti ile
  script'i footer alanına yapıştırın.

Widget tüm CSS'lerini kendi içinde enjekte eder ve tüm class/ID'leri
`pmi-ai-` ön ekiyle başlar; sitenin mevcut stillerine müdahale etmez.

---

## Yerel Geliştirme

Statik bir HTTP sunucu yeterlidir. Örneğin:

```bash
cd public && python3 -m http.server 8080
```

Sonra tarayıcıda `http://localhost:8080/` adresini açın ya da
projedeki `index.html` demo sayfasını çalıştırın.

---

## Lisans

Bu proje PMI Türkiye için geliştirilmiştir.
