window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("startSection").style.display = "flex";
  }, 4000);
});

const startBtn = document.getElementById('startBtn');
const loadingScreen = document.getElementById('loadingScreen');
const loadingText = document.getElementById('loadingText');
const mainContent = document.getElementById('mainContent');
const bgMusic = document.getElementById('bgMusic');
const namaAnimasi = document.getElementById('namaRizky');

startBtn.addEventListener('click', () => {
  document.getElementById('startSection').style.display = 'none';
  loadingScreen.style.display = 'flex';

  // Tampilkan efek nama
  namaAnimasi.style.display = 'block';
  namaAnimasi.classList.add('fadeZoom');

  setTimeout(() => {
    namaAnimasi.classList.add('fadeOut');
  }, 2000);

  let percent = 0;
  const interval = setInterval(() => {
    loadingText.innerText = `Loading... ${percent}%`;
    percent++;
    if (percent > 100) {
      clearInterval(interval);
      loadingScreen.style.display = 'none';
      mainContent.style.display = 'block';
      bgMusic.play();
    }
  }, 30);
});