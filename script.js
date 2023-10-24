function sendMessage() {
    var message = document.getElementById('message').value;
    if (message !== '') {
        // Kirim pesan ke server PHP
        fetch('inbox.php', {
            method: 'POST',
            body: JSON.stringify({ message: message }),
        })
        .then(response => response.json())
        .then(data => {
            // Handle respons dari server (misalnya, menampilkan pesan di Kotak Masuk)
            // Refresh daftar pesan
            loadMessages();
        });
    }
}

function loadMessages() {
    // Ambil pesan dari server dan tampilkan di #message-list
}

// Panggil loadMessages saat halaman dimuat
loadMessages();
