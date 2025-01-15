// JSON dosyasını çekmek için Fetch API
fetch("ErkekVeriler.json")
  .then((response) => {
    if (!response.ok) throw new Error("JSON dosyası yüklenemedi!");
    return response.json();
  })
  .then((data) => {
    console.log("JSON Verisi:", data);

    // Hesaplama butonuna tıklanınca çalışacak
    document.getElementById("hesapla").addEventListener("click", function () {
      const gogus = parseInt(document.getElementById("gogus").value, 10);
      const boy = parseInt(document.getElementById("boy").value, 10);
      const bel = parseInt(document.getElementById("bel").value, 10);
      const kalca = parseInt(document.getElementById("kalca").value, 10);

      // Kullanıcı seçimi: üst giyim mi alt giyim mi?
      const kategori = document.querySelector(
        'input[name="kategori"]:checked'
      ).value;

      const ustGiyim = data.markalar.nike.erkek.ustgiyim;
      const altGiyim = data.markalar.nike.erkek.altgiyim;

      let sonuc = "Uygun bir beden bulunamadı.";

      // Seçime göre doğru JSON verisinde arama yap
      if (kategori === "ustgiyim") {
        for (const beden in ustGiyim) {
          const kriterler = ustGiyim[beden];
          if (
            gogus >= kriterler.MinGogusUst &&
            gogus <= kriterler.MaxGogusUst &&
            boy >= kriterler.MinBoyUzunluk &&
            boy <= kriterler.MaxBoyUzunluk
          ) {
            sonuc = `Uygun üst beden: ${beden}`;
            break;
          }
        }
      } else if (kategori === "altgiyim") {
        for (const beden in altGiyim) {
          const kriterler = altGiyim[beden];
          if (
            kalca >= kriterler.MinKalca &&
            kalca <= kriterler.MaxKalca &&
            bel >= kriterler.MinBel &&
            bel <= kriterler.MaxBel
          ) {
            sonuc = `Uygun alt beden: ${beden}`;
            break;
          }
        }
      }

      // Sonucu ekrana yazdır
      document.getElementById("sonuc").innerText = sonuc;
    });
  })
  .catch((error) => {
    console.error("Hata:", error);
  });
