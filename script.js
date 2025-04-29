let type = 'youtube';

function setType(selectedType) {
  type = selectedType;
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('bg-gradient-to-r', 'from-purple-500', 'to-pink-500', 'text-white');
    btn.classList.add('bg-opacity-50');
  });
  event.target.classList.add('bg-gradient-to-r', 'from-purple-500', 'to-pink-500', 'text-white');
}

function handleDownload() {
  const url = document.getElementById('url').value;
  const quality = document.getElementById('quality').value;
  const status = document.getElementById('status');

  if (!url) {
    status.textContent = "⚠️ Please enter a URL.";
    return;
  }

  status.textContent = "Processing...";

  fetch('https://your-backend-url.com/download', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url, type, quality })
  })
  .then(res => res.json())
  .then(data => {
    status.textContent = data.message || "✅ Download started!";
  })
  .catch(err => {
    status.textContent = "❌ Download failed.";
  });
}
