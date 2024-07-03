document.getElementById('start-button').addEventListener('click', () => {
    const clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0; // Reset audio ke awal
    clickSound.play();

    // Tambahkan class "clicked" untuk memicu animasi splash
    const startButton = document.getElementById('start-button');
    startButton.classList.add('clicked');
    startButton.style.animation = 'pulse 2s';
    
    // Tambahkan delay di sini
      setTimeout(() => {
        startButton.classList.remove('clicked');
        window.location.href = 'game.html'; 
    }, 3000);// Ganti 'game.html' dengan nama file HTML game Anda
  });

  document.getElementById('start-button').addEventListener('mouseover', () => {
    const hoverSound = document.getElementById('hoverSound');
    hoverSound.currentTime = 0; // Reset audio ke awal
    hoverSound.play();
  });
  
  document.getElementById('start-button').addEventListener('mouseout', () => {
    const hoverSound = document.getElementById('hoverSound');
    hoverSound.pause();
  });

  const bgm = document.getElementById('bgm');
  const muteButton = document.getElementById('mute-button');
  const volumeSlider = document.getElementById('volume-slider');
  let isMuted = localStorage.getItem('isMuted') === 'true';
  const muteIcon = muteButton.querySelector('i');

  bgm.muted = isMuted;
  muteIcon.className = isMuted ? 'fa fa-volume-off' : 'fa fa-volume-high';

  muteButton.addEventListener('click', () => {
    isMuted = !isMuted; // Toggle status mute
    bgm.muted = isMuted;
    localStorage.setItem('isMuted', isMuted); // Simpan status mute ke localStorage
  
    // Ganti ikon pada tombol mute
    if (isMuted) {
      muteIcon.className = 'fa fa-volume-off'; // Ikon mute
    } else {
      muteIcon.className = 'fa fa-volume-high'; // Ikon unmute
    }
  });

  bgm.volume = volumeSlider.value;

  volumeSlider.addEventListener('input', () => {
    bgm.volume = volumeSlider.value;
    localStorage.setItem('volume', volumeSlider.value);
    console.log(volumeSlider.value);
  });