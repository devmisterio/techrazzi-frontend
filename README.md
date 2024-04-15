# TechRazzi Etkinlik Yönetim Uygulaması

TechRazzi, kullanıcıların etkinliklere kaydolmasını, yorum yapmasını ve etkinlik detaylarını görüntülemesini sağlayan dinamik bir frontend uygulamasıdır. Next.js framework kullanılarak geliştirilmiş olan bu uygulama, modern web geliştirme teknikleri ve en iyi uygulamaları benimsemektedir.

## Uygulamanın Özellikleri

* **Etkinlik Listeleme:** Kullanıcılar mevcut etkinlikleri listeleyebilir ve detaylarını görüntüleyebilir.
* **Etkinlik Detayları:** Seçilen etkinliklerin detaylı açıklamaları, konuşmacı bilgileri, etkinlik zamanı ve mekan bilgileri kullanıcılara sunulur.
* **Kullanıcı Yorumları:** Kullanıcılar etkinlikler hakkında yorum yapabilir ve diğer yorumları okuyabilir.
* **Katılım Yönetimi:** Kullanıcılar etkinliklere katılım durumlarını yönetebilir (katılma/çıkma).
* **Kullanıcı Hesap İşlemleri:** Kayıt olma, giriş yapma, şifre yenileme gibi temel hesap işlemleri.

## Teknolojiler
* **Next.js:** SSR (Server Side Rendering) ve statik site generation özellikleriyle modern bir React frameworkü.
* **Tailwind CSS:** Hızlı ve responsive tasarım yapmayı kolaylaştıran bir CSS frameworkü.
* **SWR:** Veri fetch işlemleri için kullanılan, cache ve revalidation özellikleri sunan bir kütüphane.
* **Axios:** HTTP istekleri yapmak için kullanılan promise tabanlı bir kütüphane.

## Kurulum
1. Bu depoyu klonlayın.
2. Gerekli paketleri yüklemek için `npm install` komutunu çalıştırın.
3. Uygulamayı başlatmak için `npm run dev` komutunu çalıştırın.
4. Tarayıcınızda `http://localhost:3000` adresine giderek uygulamayı görüntüleyebilirsiniz.

## Yapı
Uygulama, kullanıcı arayüzü bileşenlerinin modüler bir şekilde organize edildiği bir yapıda geliştirilmiştir. Bileşenler, işlevselliklerine göre kategorilere ayrılmıştır (örneğin, auth için components/auth, etkinlik detayları için components/eventDetail).

## API İstekleri
Axios ile yapılandırılmış bir HTTP istemcisi kullanılarak backend API'lerine istekler gönderilir. İsteklerin yönetimi ve state güncellemeleri React hook'ları (useState, useEffect) ve SWR kütüphanesi ile sağlanır.
