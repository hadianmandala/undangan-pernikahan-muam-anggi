document.getElementById('openInvitation').addEventListener('click', function () {
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';

  const music = document.getElementById('bg-music');
  if (music.paused) {
    music.play();
  }
});

function updateCountdown() {
  const eventDate = new Date('2025-09-21T00:00:00+08:00'); // waktu WITA
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML = '<p>Acara telah berlangsung 🎉</p>';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Panggil pertama kali

document.getElementById('rsvpForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('rsvpNama').value.trim();
  const status = document.getElementById('rsvpStatus').value;
  const ucapan = document.getElementById('rsvpUcapan').value.trim();

  if (!nama || !status) return;

  const container = document.getElementById('rsvpList');

  const item = document.createElement('div');
  item.classList.add('rsvp-item');
  item.innerHTML = `
    <strong>${nama}</strong> (${status})<br>
    <em>${ucapan}</em>
  `;

  container.prepend(item);
  this.reset();
});

