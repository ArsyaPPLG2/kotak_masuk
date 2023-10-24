<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $message = $_POST["message"];

    // Simpan pesan dalam database atau berkas teks
    // Contoh: Simpan pesan ke berkas teks
    file_put_contents("messages.txt", $message . PHP_EOL, FILE_APPEND);

    // Kirim respons ke JavaScript
    http_response_code(200); // Berhasil
    exit;
}
?>
