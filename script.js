const dialogText = document.getElementById('dialog-text');
const nextButton = document.getElementById('next-button');
const characterImage = document.getElementById('character');
const characterImage2 = document.getElementById('character2');
const dialogBox = document.getElementById('dialog-box'); // Tambahkan elemen dialog-box
const dialogName = document.getElementById('dialog-name');

const dialog = [
  { text: "Halo! Selamat datang di Tako Stories!", name: "Akane Sora", character: "sora.png", audio: "welcome_tako.mp3" },
  { text: "Terima kasih sudah datang!", name: "Akane Sora", character: "sora.png", audio: "thank_for_coming.mp3" },
  { text: "Kamu akan dibawa ke salah satu cerita dari Tako Stories, yaitu Dualite En Moi / Dualitas Dalam Diri.", name: "Sou Vlamour", character: "sou.png", audio: "kamu_akan_dibawa.mp3" },
  { text: "Penasaran kan, ceritanya seperti apa?", name: "Sou Vlamour", character: "sou.png" },
  { text: "Kalau begitu, kita langsung aja masuk ke cerita nya. Let's go!", name: "Akane Sora", character: "sora.png" },
  { text: ".........", background: "black_screen.jpg" },
  { text: "Fenomena yang di sebabkan oleh dua ilmuan kembar, Mooray bersaudara membuat heboh penduduk kota di sekitar area pinggir Pantai. Tak terkecuali bagi para member Tako Corp yang terkena imbasnya.", name: "Akane Sora", background: "chaos.jpeg" },
  { text: "Setelah berusaha untuk mengambil alih gedung demi mendapatkan keuntungan dari publik, mereka bermaksud untuk mengubah dunia dengan cara yang sangat tidak masuk akal.", background: "mooray_brothers.jpeg", name: "Akane Sora" },
  { text: "Chapter 1", background: "black_screen.jpg"},
  { text: "Jingganya langit menghias indah, bersahabat dengan lembutnya sekawanan awan yang berkumpul lalu berpisah. Deburan ombak menyapa pasir, mengatakan bahwa laut tengah mengalami pasang surut.", name: "Akane Sora", background: 'jingganya_langit.jpeg' },
  { text: "Siang berganti petang, & ini adalah saat untuk seorang pemuda manis bersurai kopi susu, pulang ke rumah.", name: "Akane Sora", background: 'a_man.jpeg'},
  { text: "Terima kasih ya, nak.", name: "Kakek & Nenek"},
  { text: "Terima kasih kembali, kakek. Senang bisa membantu.", name: "Pemuda"},
  { text: "Pemuda itu—atau bisa kita panggil dia dengan Kei—, berlenggang pulang membawa barang bawaan. Dia tak sabar untuk mencicipi camilan yang dibuatkan oleh pasangan tua itu dengan minuman kesukaan setiba dirumah nanti.", name: "Akane Sora", character: "sora.png"},
  { text: "Pasti enak bisa hidup menua dengan seseorang yang sangat kita sayangi... haha.", name: "Shirasagi Kei", character: "kei.png"},
  { text: "Kei tertawa miris. Sekian dua dekade dalam hidupnya, hayalan itu terasa mustahil untuk jadi nyata.", name: "Akane Sora", character: "sora.png"},
  { text: "Tapi jangan pesimis, Kei. Jodoh pasti gak akan kemana.", name: "Sou Vlamour", character: "sou.png"},
  { text: "............................"},
  { text: "Sementara dia hanya bisa berharap (sembari berhalusinasi) sambil memandang indah tenggelamnya matahari dengan secangkir kopi susu ditangan & camilan barusan.", name: "Akane Sora", character: "sora.png"},
  { text: "Krauss... !!"},
  { text: "Renyah, manis nan gurih. Meski tinggal di daerah pesisir, ternyata sepasang suami-istri paruh baya itu bisa membuat makanan ringan hasil laut dengan rasa yang enak secara tak terduga. Bahkan sangat cocok untuk di nikmati di waktu senja.", name: "Akane Sora", character: "sora.png"},
  { text: "Ah... suhu makin dingin. Tutup aja deh jendelanya.", name: "Shirasagi Kei", character: "kei.png"},
  { text: "gatal, Kei menggesek hidung dengan tentakelnya...", name: "Akane Sora", character: "sora.png"},
  { text: "...secara tak sadar. Dia bahkan tak tau darimana tentakel itu muncul darimana.", name: "Akane Sora", character: "sora.png"},
  { text: "Dan bagaimana dia bisa berakhir seperti ini.", name: "Akane Sora", character: "sora.png"},
  { text: "AAAAAAAAAGGH!!! A-Apa ini!?", name: "Shirasagi Kei", character: "kei.png"},
  { text: "bau amis yang makin menyerebak.", name: "Akane Sora", character: "sora.png"},
  { text: "Tidak ada angin, tidak ada hujan, & tidak ada yang ingin dia lakukan selain bersembunyi & memikirkan cara untuk mengakhiri mimpi buruk ini.", name: "Akane Sora", character: "sora.png"},
  { text: "Itu jikalau dia benar-benar berpikir benda yang menggeliat, licin & amis itu hanyalah ilusi yang tidak di inginkannya.", name: "Akane Sora", character: "sora.png"},
  { text: "A-apa ini seperti... terkena racun gurita cincin biru?", name: "Shirasagi Kei", character: "kei.png"},
  { text: "tidak, kasusnya tidak sama seperti digigit oleh laba-laba di film.", name: "Akane Sora", character: "sora.png"},
  { text: "Atau jangan-jangan..", name: "Shirasagi Kei", character: "kei.png"},
  { text: "...selama ini...", character: "kei.png"},
  { text: ".. aku adalah...", character: "kei.png"},
  { text: "... Putra Dr. Octopus!?", character: "kei.png"},
  { text: "Kei mencari sedikit sumber cahaya untuk melihat dimana letak cermin agar dia dapat melihat wujudnya dengan jelas.", name: "Akane Sora", character: "sora.png"},
  { text: "Delapan tentakel itu bergerak sesuai pikirannya. Dia bisa mengendalikan itu, meski butuh sedikit waktu sampai dia benar-benar bisa menyembunyikan sekian tangan tambahan yang dapat mengerat sebuah mug, secara menyeluruh.", name: "Akane Sora", character: "sora.png"},
  { text: "Keesokan harinya, dia kembali bekerja seperti biasa. Meski di selingi oleh rasa khawatir, takut-takut tentakelnya keluar di waktu yang tidak di inginkan. Sampai...", name: "Akane Sora", character: "sora.png"},
  { text: "Kei!", name: "Rifqi", character: "rifqi.png"},
  { text: "Oh, Rif— Whoa!", name: "Shirasagi Kei", character: "kei.png"},
  { text: "satu tarikan tangan membawanya duduk berjongkok ke dalam bawah meja.", name: "Akane Sora", character: "sora.png"},
  { text: "Sssh! Ada hal yang mau kukasih tau, tapi jangan kasih tau siapa-siapa, ngerti?", name: "Rifqi", character: "rifqi.png"},
  { text: "Memangnya apa?", name: "Shirasagi Kei", character: "kei.png"},
  { text: "Ya pasti rahasia lah! Tapi jangan kaget, ya. Lihat!", name: "Rifqi", character: "rifqi.png"},
  { text: "dia menggeram pelan seperti memaksa sesuatu untuk keluar dari atas kepalanya, lalu...", name: "Akane Sora", character: "sora.png"},
  { text: "POFF!!", name: "Akane Sora", character: "sora.png"},
  { text: "Sepasang telinga berbulu...", name: "Akane Sora", character: "sora.png"},
  { text: "....oh", name: "Shirasagi Kei", character: "kei.png"},
  { text: "Aneh banget loh co! Semalaman kepalaku pusing gara-gara ini!! Ini telinga furry bisa muncul dari kepala ini gara2 kenapa!? Salah makan kah!? Di azab, kah!?", name: "Rifqi", character: "rifqi.png"},
  { text: "menggenggam asal kedua daun telinga besar diatas kepala, Rifqi mengeluh frustasi.", name: "Akane Sora", character: "sora.png"},
  { text: "Gue sih gak mau adu nasib, tapi kayaknya lu bukan satu-satunya yang punya kuping kayak gitu.", name: "Ikubaru Ichiro", character: "Iku.png"},
  { text: "GAAAAAHNjir kaget!", name: "Shirasagi Kei & Rifqi", character: "kei.png", character2: "rifqi.png"},
  { text: "Iku? Lu juga punya?", name: "Rifqi", character: "rifqi.png"},
  { text: "Nih? Jelas banget kan?", name: "Ikubaru Ichiro", character: "Iku.png"},
  { text: "Kayaknya kalian semua udah menemukan wujud hewan representasi masing-masing ya.", name: "Another Member"},
  { text: "Pagi ~", name: "Hakuma Piora", character: "pio.png"},
  { text: "Daripada kalian ngumpet dibawah, mending kita bahas sambil duduk sini.", name: "Another Member"},
  { text: "Kei & Rifqi keluar dari kolong, lalu duduk di kursi dengan formasi lingkaran bersama yang lain.", name: "Akane Sora", character: "sora.png"},
  { text: "Apa ini? Konferensi meja bundar?", name: "Rifqi", character: "rifqi.png"},
  { text: "Anggap aja begitu.", name: "Layla Arabella", character: "Lela.png"},
  { text: "Coba lihat ini.", name: "Layla Arabella", character: "Lela.png"},
  { text: "................."},
  { text: "Di tunjukkannya sebuah berita digital, artikel tentang fenomena hewan representasi yang muncul dari masing-masing bagian tubuh pada manusia. Terpampang jelas dari tampilan layar yang menunjukkan orang-orang yang berlalu-lalang dengan sebagian wujud dari keunikan hewan representasi mereka masing-masing. Seperti telinga kucing, sayap burung, ekor buaya, sampai belalai gajah.", name: "Akane Sora", character: "sora.png"},
  { text: "Iya, belalai gajah.", name: "Akane Sora", character: "sora.png"},
  { text: "HIDUNG GAJAH!", name: "Akane Sora", character: "sora.png"},
  { text: "Jadi, bukan hanya kita?", name: "Another Member"},
  { text: "Seenggaknya begitu lah.", name: "Layla Arabella", character: "Lela.png"},
  { text: "Sebagian menganggap bahwa fenomena ini tidak hanya menarik, namun juga diselingi oleh pro & kontra. Ada yang merasa di rugikan, namun ada juga yang mendapatkan keuntungan.", name: "Akane Sora", character: "sora.png"},
  { text: "Bentuk contohnya adalah: Terungkap! Alasan seorang aktor panggung ini selalu dapat memukau para penonton dengan aktingnya adalah karena karakteristiknya. Hewan representasinya adalah bunglon!", name: "Akane Sora", character: "sora.png"},
  { text: "Atau...", name: "Akane Sora", character: "sora.png"},
  { text: "Terlalu seram! Pedagang buah di sudut kota gulung tikar karena hewan representasinya adalah ular mamba hitam.", name: "Akane Sora", character: "sora.png"},
  { text: "Dan... satu berita paling viral saat ini adalah...", name: "Akane Sora", character: "sora.png"},
  { text: "kemunculan bayangan aneh yang meninggalkan bekas korban berupa belasan mayat burung gagak.", name: "Akane Sora", character: "sora.png"},
  { text: "Di dalam berita disebutkan bahwa ada sosok misterius dengan bayangan aneh. Siluetnya nampak mengerikan, bagian dari tubuhnya seperti membuat gerakan membentang, membentuk simbol matahari.", name: "Akane Sora", character: "sora.png"},
  { text: "Para netizen berspekulasi bahwa wujud bayangan itu adalah seorang pria dengan berkepribadian buruk. Kesannya yang mengerikan membuat mereka berpikir kalau orang tersebut adalah seorang pembunuh berantai yang selama ini tengah menjadi buronan polisi selama 3 pekan terakhir.", name: "Akane Sora", character: "sora.png"},
  { text: "Sayangnya, diantara mereka saat ini tak ada satupun dari mereka yang menghiraukan berita tersebut. Bahkan saat—", name: "Akane Sora", character: "sora.png"},
  { text: "BRAAKK!!"},
  { text: "Guys! Guys!!! A-aku punya ekoooorrr!!", }

  // Tambahkan dialog berikutnya di sini...
];

let currentDialogIndex = 0;
let currentAudio = null;
let isTyping = false;
let typeSound = new Audio('audio/sfx/typewriter_sfx.mp3');
typeSound.volume = 1;

async function showNextDialog() {
  if (currentDialogIndex < dialog.length && !isTyping) {
    const currentDialog = dialog[currentDialogIndex];

    // Update nama karakter
    dialogName.textContent = currentDialog.name || "";

    // Pengaturan karakter
    if (currentDialog.character2) {
      characterImage.src = `chara/${currentDialog.character}`;
      characterImage2.src = `chara/${currentDialog.character2}`;
      characterImage2.style.display = 'block';
      characterImage.style.left = '33%';
    } else if(currentDialog.character) {
      characterImage.src = `chara/${currentDialog.character}`;
      characterImage2.style.display = 'none';
      characterImage.style.display = 'block';
      if (currentDialog.character === "sora.png") {
        characterImage.style.width = '36%';
      } else {
        characterImage.style.left = '50%';
        characterImage.style.width = '40%'; // Atur kembali ukuran karakter jika bukan Sora
      }
    }else{
      characterImage2.style.display = 'none';
      characterImage.style.display = 'none';
    }

    if (currentDialog.background) {
      document.getElementById('tubuh').style.transition = 'opacity 0.5s ease';
      document.getElementById('tubuh').style.opacity = 0;
      document.getElementById('tubuh').style.backgroundImage = `url('bg/${currentDialog.background}')`;
      // document.getElementById('tubuh').style.width = '100%';
      document.getElementById('tubuh').style.backgroundRepeat = 'no-repeat';
      document.getElementById('tubuh').style.backgroundSize = 'cover';
      document.getElementById('tubuh').style.display = 'flex';
      document.getElementById('tubuh').style.justifyContent = 'center';
      document.getElementById('tubuh').style.alignItems = 'center';
      document.getElementById('tubuh').style.minHeight = '100vh';
      
      setTimeout(() => {
        document.getElementById('tubuh').style.opacity = 1;
      }, 100);
    }else{
      document.getElementById('tubuh').style.backgroundImage = `url('bg/bg2.jpg')`;
      // document.getElementById('tubuh').style.width = '100%';
      document.getElementById('tubuh').style.backgroundRepeat = 'no-repeat';
      document.getElementById('tubuh').style.backgroundSize = 'cover';
      document.getElementById('tubuh').style.display = 'flex';
      document.getElementById('tubuh').style.justifyContent = 'center';
      document.getElementById('tubuh').style.alignItems = 'center';
      document.getElementById('tubuh').style.minHeight = '100vh';
    }

    // Hentikan audio sebelumnya jika ada
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Putar audio baru jika ada
    if (currentDialog.audio) {
      currentAudio = new Audio(`audio/voices/${currentDialog.audio}`);
      currentAudio.play();
    }

    // Animasi teks diketik
    isTyping = true;
    typeSound.loop = true;
    typeSound.play();
    await typeWriterEffect(currentDialog.text);
    typeSound.pause(); // Hentikan suara ketik
    typeSound.currentTime = 0; // Reset suara ketik
    isTyping = false;

    currentDialogIndex++;
  } else if (!isTyping) { // Cek apakah animasi selesai sebelum menampilkan pesan selesai
    dialogText.textContent = "Cerita selesai!";
    nextButton.disabled = true;
  }
}

async function typeWriterEffect(text) {
  dialogText.textContent = "";
  for (let i = 0; i < text.length; i++) {
    dialogText.textContent += text.charAt(i);
    await new Promise(resolve => setTimeout(resolve, 50)); // Jeda 50ms
  }
}

nextButton.addEventListener('click', showNextDialog);
showNextDialog(); // Tampilkan dialog pertama saat halaman dimuat
