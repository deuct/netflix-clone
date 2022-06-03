function changeLanguage() {
  lang = document.querySelectorAll(".curr-lang");
  optLang = document.querySelectorAll(".opt-lang");
  iconLang = document.querySelectorAll(".icon-lang");
  for (x = 0; x < lang.length; x++) {
    langs = lang[x].innerHTML;
  }
  console.log("language current: ", langs);
  if (langs == "English") {
    console.log("print lang: ", lang);
    for (x = 0; x < lang.length; x++) {
      lang[x].innerHTML = "Indonesia";
      optLang[x].innerHTML = "English";
      iconLang[x].style.marginLeft = "38%";
    }

    document.getElementById("header-fill").childNodes[1].innerHTML =
      "Film, acara TV tak terbatas, dan lebih banyak lagi.";
    document.getElementById("header-fill").childNodes[3].innerHTML =
      "Tonton di mana pun. Batalkan kapan pun.";
    document.getElementById("header-fill").childNodes[5].innerHTML =
      "Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.";

    document.getElementById("header-form").placeholder = "Alamat email";
    document.getElementById("header-btn").innerHTML = "Mulai ";
    document.getElementById("header-btn").style.padding = "11px";

    contentSatu = document.getElementById("content-1");
    contentSatu.childNodes[1].innerHTML = "Nikmati di TV-mu.";
    contentSatu.childNodes[3].innerHTML =
      "Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi.";

    contentDuaVid = document.getElementById("content-2vid");
    contentDuaVid.childNodes[1].innerHTML = "Men-download...";
    contentDuaVid.childNodes[3].style.visibility = "hidden";

    contentDua = document.getElementById("content-2");
    contentDua.childNodes[1].innerHTML =
      "Download acara TV untuk menontonnya secara offline.";
    contentDua.childNodes[3].innerHTML =
      "Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton.";

    contentTiga = document.getElementById("content-3");
    contentTiga.childNodes[1].innerHTML = "Tonton di mana pun.";
    contentTiga.childNodes[3].innerHTML =
      "Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu.";

    contentEmpat = document.getElementById("content-4");
    contentEmpat.childNodes[1].innerHTML = "Buat profil untuk anak.";
    contentEmpat.childNodes[3].innerHTML =
      "Kirim anak-anak untuk bertualang bersama karakter favorit mereka di dunia yang dibuat khusus untuk mereka—gratis dengan keanggotaanmu.";

    document.getElementById("faq-title").innerHTML = "Tanya Jawab Umum";

    faqButtonSatu = document.getElementById("faqSatu");
    faqButtonSatu.childNodes[1].childNodes[1].innerHTML = "Apa itu Netflix?";
    faqSatuDesc = document.getElementById("faq1").childNodes[1];
    faqSatuDesc.childNodes[1].innerHTML =
      "Netflix adalah layanan streaming yang menawarkan berbagai acara TV pemenang penghargaan, film, anime, dokumenter, dan banyak lagi di ribuan perangkat yang terhubung ke Internet. ";

    faqSatuDesc.childNodes[3].innerHTML =
      "Kamu bisa menonton sepuasnya, kapan pun kamu mau, tanpa satu iklan pun – semuanya dengan satu harga bulanan yang murah. Selalu ada tontonan baru dan acara TV serta film baru yang ditambahkan setiap minggu!";

    faqButtonDua = document.getElementById("faqDua");
    faqButtonDua.childNodes[1].childNodes[1].innerHTML =
      "Berapa biaya berlangganan Netflix ?";
    faqDuaDesc = document.getElementById("faq2").childNodes[1];
    faqDuaDesc.childNodes[1].innerHTML =
      "Tonton Netflix di smartphone, tablet, Smart TV, laptop, atau perangkat streaming-mu, semuanya dengan satu harga bulanan tetap Rentang harga mulai dari Rp54.000 hingga Rp186.000 per bulan. Tanpa biaya ekstra, tanpa kontrak.";

    faqButtonTiga = document.getElementById("faqTiga");
    faqButtonTiga.childNodes[1].childNodes[1].innerHTML =
      "Dimana saya bisa menonton?";

    faqTigaDesc = document.getElementById("faq3").childNodes[1];
    faqTigaDesc.childNodes[1].innerHTML =
      "Tonton di mana pun, kapan pun. Masuk ke akun Netflix-mu untuk menonton langsung di netflix.com dari komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix, termasuk smart TV, smartphone, tablet, pemutar media streaming, dan konsol game.";
    faqTigaDesc.childNodes[3].innerHTML =
      "Kamu juga bisa men-download acara favoritmu dengan aplikasi iOS, Android, atau Windows 10. Gunakan download untuk menonton saat kamu di perjalanan dan tidak punya koneksi Internet. Bawa Netflix ke mana saja.";

    faqButtonEmpat = document.getElementById("faqEmpat");
    faqButtonEmpat.childNodes[1].childNodes[1].innerHTML =
      "Bagaimana cara membatalkannya ?";
    faqEmpatDesc = document.getElementById("faq4").childNodes[1];
    faqEmpatDesc.childNodes[1].innerHTML =
      "Netflix fleksibel. Tanpa kontrak menyebalkan dan tanpa komitmen. Kamu dapat dengan mudah membatalkan akunmu secara online dengan dua kali klik. Tanpa biaya pembatalan – mulai atau hentikan akunmu kapan pun.";

    faqButtonLima = document.getElementById("faqLima");
    faqButtonLima.childNodes[1].childNodes[1].innerHTML =
      "Apa yang bisa ditonton di Netflix?";
    faqLimaDesc = document.getElementById("faq5").childNodes[1];
    faqLimaDesc.childNodes[1].innerHTML =
      "Netflix memiliki pustaka lengkap yang berisi film panjang, film dokumenter, acara TV, anime, Netflix original pemenang penghargaan, dan lebih banyak lagi. Tonton sepuasnya, kapan pun kamu mau.";

    faqButtonEnam = document.getElementById("faqEnam");
    faqButtonEnam.childNodes[1].childNodes[1].innerHTML =
      "Apakah Netflix sesuai bagi anak-anak ?";
    faqLimaDesc = document.getElementById("faq6").childNodes[1];
    faqLimaDesc.childNodes[1].innerHTML =
      "Pengalaman Netflix Anak disertakan dalam keanggotaan agar kamu punya kontrol orang tua saat anak-anak menikmati acara TV dan film untuk keluarga di rumah.";
    faqLimaDesc.childNodes[3].innerHTML =
      "Profil anak dilengkapi kontrol orang tua yang dilindungi PIN sehingga kamu bisa membatasi rating usia konten yang bisa ditonton anak dan memblokir judul tertentu yang tidak boleh ditonton anak-anak.";

    faqFooter = document.getElementById("faq-footer");
    faqFooter.childNodes[1].innerHTML =
      "Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.";
    faqFooter.childNodes[3].childNodes[1].placeholder = "Alamat email";
    document.getElementById("footer-btn").childNodes[1].innerHTML = "Mulai";
  } else if (langs == "Indonesia") {
    for (x = 0; x < lang.length; x++) {
      lang[x].innerHTML = "English";
      optLang[x].innerHTML = "Indonesia";
      iconLang[x].style.marginLeft = "45%";
    }

    document.getElementById("header-fill").childNodes[1].innerHTML =
      "Unlimited movies, TV shows, and more.";
    document.getElementById("header-fill").childNodes[3].innerHTML =
      "Watch anywhere. Cancel anytime.";
    document.getElementById("header-fill").childNodes[5].innerHTML =
      "Ready to watch? Enter your email to create or restart your membership.";

    document.getElementById("header-form").placeholder = "Email address";
    document.getElementById("header-btn").innerHTML = "Get Started ";
    document.getElementById("header-btn").style.padding = "11px";

    contentSatu = document.getElementById("content-1");
    contentSatu.childNodes[1].innerHTML = "Enjoy on your TV.";
    contentSatu.childNodes[3].innerHTML =
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.";

    contentDuaVid = document.getElementById("content-2vid");
    contentDuaVid.childNodes[1].innerHTML = "Stranger Things";
    contentDuaVid.childNodes[3].style.visibility = "visible";

    contentDua = document.getElementById("content-2");
    contentDua.childNodes[1].innerHTML =
      "Download your shows to watch offline.";
    contentDua.childNodes[3].innerHTML =
      "Save your favorites easily and always have something to watch.";

    contentTiga = document.getElementById("content-3");
    contentTiga.childNodes[1].innerHTML = "Watch everywhere.";
    contentTiga.childNodes[3].innerHTML =
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.";

    contentEmpat = document.getElementById("content-4");
    contentEmpat.childNodes[1].innerHTML = "Create profiles for kids.";
    contentEmpat.childNodes[3].innerHTML =
      "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.";

    document.getElementById("faq-title").innerHTML =
      "Frequently Asked Question";

    faqButtonSatu = document.getElementById("faqSatu");
    faqButtonSatu.childNodes[1].childNodes[1].innerHTML = "What is Netflix?";
    faqSatuDesc = document.getElementById("faq1").childNodes[1];
    faqSatuDesc.childNodes[1].innerHTML =
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.";

    faqSatuDesc.childNodes[3].innerHTML =
      "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!";

    faqButtonDua = document.getElementById("faqDua");
    faqButtonDua.childNodes[1].childNodes[1].innerHTML =
      "How much does Netflix cost? ";
    faqDuaDesc = document.getElementById("faq2").childNodes[1];
    faqDuaDesc.childNodes[1].innerHTML =
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from IDR54,000 to IDR186,000 a month. No extra costs, no contracts.";

    faqButtonTiga = document.getElementById("faqTiga");
    faqButtonTiga.childNodes[1].childNodes[1].innerHTML = "Where can I watch? ";

    faqTigaDesc = document.getElementById("faq3").childNodes[1];
    faqTigaDesc.childNodes[1].innerHTML =
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.";
    faqTigaDesc.childNodes[3].innerHTML =
      "You can also download your favorite shows with the iOS,Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.";

    faqButtonEmpat = document.getElementById("faqEmpat");
    faqButtonEmpat.childNodes[1].childNodes[1].innerHTML = "How do I cancel?";
    faqEmpatDesc = document.getElementById("faq4").childNodes[1];
    faqEmpatDesc.childNodes[1].innerHTML =
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.";

    faqButtonLima = document.getElementById("faqLima");
    faqButtonLima.childNodes[1].childNodes[1].innerHTML =
      "What can I watch on Netflix?";
    faqLimaDesc = document.getElementById("faq5").childNodes[1];
    faqLimaDesc.childNodes[1].innerHTML =
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.";

    faqButtonEnam = document.getElementById("faqEnam");
    faqButtonEnam.childNodes[1].childNodes[1].innerHTML =
      "Is Netflix good for kids? ";
    faqLimaDesc = document.getElementById("faq6").childNodes[1];
    faqLimaDesc.childNodes[1].innerHTML =
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.";
    faqLimaDesc.childNodes[3].innerHTML =
      "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.";

    faqFooter = document.getElementById("faq-footer");
    faqFooter.childNodes[1].innerHTML =
      "Ready to watch? Enter your email to create or restart your membership.";
    faqFooter.childNodes[3].childNodes[1].placeholder = "Email address";
    document.getElementById("footer-btn").childNodes[1].innerHTML =
      "Get Started";
  }
}
