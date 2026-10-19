# BSM Yıldırım Soğutma Teknik Servis — web sitesi

Mobil uyumlu, tek sayfalı Türkçe işletme sitesi. HTML, CSS ve JavaScript ile hazırlanmıştır; bir framework veya derleme adımı gerekmez.

## Dosyalar
- `index.html` — sayfa içeriği, arama/WhatsApp bağlantıları ve temel SEO meta etiketleri
- `style.css` — responsive tasarım
- `script.js` — mobil menü, yıl alanı ve WhatsApp randevu formu

## Yerel önizleme
`index.html` dosyasını tarayıcıda açın. En doğru test için VS Code Live Server gibi basit bir yerel sunucu kullanabilirsiniz.

## GitHub Pages ile yayınlama
1. GitHub'da yeni bir repository oluşturun (ör. `bsm-yildirim-servis`).
2. Bu klasördeki üç site dosyasını ve README'yi repository'nin kök dizinine yükleyin.
3. Repository → **Settings** → **Pages** bölümünü açın.
4. **Deploy from a branch** seçin; branch olarak `main`, klasör olarak `/ (root)` seçip kaydedin.
5. GitHub Pages'in verdiği URL üzerinden sitenizi kontrol edin.

## Yayınlamadan önce mutlaka düzenleyin
- `index.html` içinde `https://www.ornekalanadiniz.com/` geçen canonical ve Open Graph URL'lerini gerçek alan adınızla değiştirin. Alan adınız yoksa bu etiketleri gerçek URL'niz belli olana kadar kaldırabilirsiniz.
- İşletmenizin açık adresini ve çalışma saatlerini eklemek istiyorsanız doğrulanmış bilgileri girin.
- Fiyatları, hizmet kapsamını ve Bursa ilçelerine servis uygunluğunu yayınlamadan önce kontrol edin.
- Google'da ilk sırayı hiçbir kod tek başına garanti edemez. Google Search Console kurulumu, doğrulanmış Google İşletme Profili, gerçek müşteri yorumları, özgün hizmet/ilçe sayfaları, hızlı barındırma ve güvenilir yerel bağlantılar SEO'ya yardımcı olur.

## SEO notları
Başlık ve açıklama etiketleri, Türkçe sayfa dili, mobil uyumlu düzen, dahili bağlantılar ve `HomeAndConstructionBusiness` yapılandırılmış verisi eklendi. Yapılandırılmış veri yalnızca gerçek ve doğru işletme bilgileriyle kullanılmalıdır. İşletme adresi, alan adı ve diğer eksik bilgileri doğrulamadan uydurmayın.
