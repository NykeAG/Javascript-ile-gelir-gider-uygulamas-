function otomatikCikarma() {
    var gelirToplam = 0;
    var giderToplam = 0;

    // Gelir miktarlarını topla
    document.querySelectorAll('.gelirMiktar').forEach(function(input) {
        gelirToplam += parseFloat(input.value) || 0;
    });

    // Gider miktarlarını topla
    document.querySelectorAll('.giderMiktar').forEach(function(input) {
        giderToplam += parseFloat(input.value) || 0;
    });

    // Sonucu hesapla ve sonuc alanına yazdır
    document.getElementById('sonuc').value = gelirToplam - giderToplam;
}

// Her bir miktar girdisi değiştiğinde otomatik çıkarma işlevini çağır
var miktarInputs = document.querySelectorAll('.gelirMiktar, .giderMiktar');
miktarInputs.forEach(function(input) {
    input.addEventListener('input', otomatikCikarma);
});

// Gelir Ekle butonuna tıklandığında yeni bir gelir girdi alanı oluştur
document.getElementById('gelirEkle').addEventListener('click', function() {
    var gelirContainer = document.getElementById('gelirContainer');

    var gelirIsmiInput = document.createElement('input');
    gelirIsmiInput.type = 'text';
    gelirIsmiInput.placeholder = 'Gelir ismi';

    var gelirMiktarInput = document.createElement('input');
    gelirMiktarInput.type = 'number';
    gelirMiktarInput.placeholder = 'Miktar';
    gelirMiktarInput.className = 'gelirMiktar';

    gelirMiktarInput.addEventListener('input', otomatikCikarma); // Yeni gelir miktarı alanına olay dinleyicisi ekle

    gelirContainer.appendChild(document.createElement('br'));
    gelirContainer.appendChild(gelirIsmiInput);
    gelirContainer.appendChild(gelirMiktarInput);
});

// Gider Ekle butonuna tıklandığında yeni bir gider girdi alanı oluştur
document.getElementById('giderEkle').addEventListener('click', function() {
    var giderContainer = document.getElementById('giderContainer');

    var giderIsmiInput = document.createElement('input');
    giderIsmiInput.type = 'text';
    giderIsmiInput.placeholder = 'Gider ismi';

    var giderMiktarInput = document.createElement('input');
    giderMiktarInput.type = 'number';
    giderMiktarInput.placeholder = 'Miktar';
    giderMiktarInput.className = 'giderMiktar';

    giderMiktarInput.addEventListener('input', otomatikCikarma); // Yeni gider miktarı alanına olay dinleyicisi ekle

    giderContainer.appendChild(document.createElement('br'));
    giderContainer.appendChild(giderIsmiInput);
    giderContainer.appendChild(giderMiktarInput);
});