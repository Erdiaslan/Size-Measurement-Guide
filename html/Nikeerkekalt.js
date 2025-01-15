/*
function hesapla(){

    fetch('ErkekVeriler.json')
    
        .then(response => {
            if (!response.ok) {
                throw new Error('JSON dosyasına ulaşılamadı.');
            }
            return response.json();
        })
        .then(data => {
            
            const kalcagenislik = parseInt(document.getElementById("kalca").value);
            const belGenislik = parseInt(document.getElementById("bel").value);
    
            const altGiyimVerisi = data.markalar.nike.erkek.altgiyim;
    
            let uygunBeden = null;
    
            for (const beden in altGiyimVerisi) {
                const deger = altGiyimVerisi[beden];
                if (
                    kalcagenislik >= deger.MinKalca &&
                    kalcagenislik <= deger.MaxKalca &&
                    belGenislik >= deger.MinBel &&
                    belGenislik <= deger.MaxBel
                ) {
                    uygunBeden = beden;
                    break;             }
            }
    
            if (uygunBeden) {
                alert(`Sizin için uygun beden: ${uygunBeden}`);
            } else {
                alert("Maalesef, ölçülerinize uygun bir beden bulunamadı.");
            }
        })
        .catch(error => {
            console.error("Hata oluştu:", error);
        });
    }*/
    /*function hesapla() {
    fetch('ErkekVeriler.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('JSON dosyasına ulaşılamadı.');
            }
            return response.json();
        })
        .then(data => {
            // Kullanıcıdan verileri alın
            const kalcagenislik = parseInt(document.getElementById("kalca").value);
            const belGenislik = parseInt(document.getElementById("bel").value);
            const altGiyimVerisi = data.markalar.nike.erkek.ustgiyim;

            let uygunBeden = null;

            // Beden belirleme
            for (const beden in altGiyimVerisi) {
                const deger = altGiyimVerisi[beden];
                if (
                    gogusGenisligi >= deger.MinGogusUst &&
                    gogusGenisligi <= deger.MaxGogusUst &&
                    boyUzunlugu >= deger.MinBoyUzunluk &&
                    boyUzunlugu <= deger.MaxBoyUzunluk
                ) {
                    uygunBeden = beden;
                    break;
                }
            }

            // Sonuç alanını güncelle
            const sonucAlani = document.getElementById('sonucAlani');
            const sonucMesaji = document.getElementById('sonucMesaji');

            if (uygunBeden) {
                sonucMesaji.innerText = `Sizin için uygun beden: ${uygunBeden}`;
                sonucAlani.style.borderColor = "green";
            } else {
                sonucMesaji.innerText = "Maalesef, ölçülerinize uygun bir beden bulunamadı.";
                sonucAlani.style.borderColor = "red";
            }

            // Sonuç alanını görünür yap
            sonucAlani.style.display = "block";
        })
        .catch(error => {
            console.error("Hata oluştu:", error);

            // Hata durumunda kullanıcıya mesaj göster
            const sonucAlani = document.getElementById('sonucAlani');
            const sonucMesaji = document.getElementById('sonucMesaji');
            sonucMesaji.innerText = "Bir hata oluştu, lütfen tekrar deneyin.";
            sonucAlani.style.borderColor = "red";
            sonucAlani.style.display = "block";
        });
}*/
function hesapla() {
    fetch('ErkekVeriler.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('JSON dosyasına ulaşılamadı.');
            }
            return response.json();
        })
        .then(data => {
            
            const kalcagenislik = parseInt(document.getElementById("kalca").value);
            const belGenislik = parseInt(document.getElementById("bel").value);

            const markalar = data.markalar;
            const sonucAlaniNike = document.getElementById('sonucAlaniNike');
            sonucAlaniNike.innerHTML = ''; 

           
            sonucAlaniNike.style.display = 'flex'; 
            sonucAlaniNike.style.flexWrap = 'wrap'; 
            sonucAlaniNike.style.gap = '10px';

            for (const marka in markalar) { 
                const altGiyimVerisi = markalar[marka].erkek.altgiyim;

                let uygunBeden = null;

                
                for (const beden in altGiyimVerisi) {
                    const deger = altGiyimVerisi[beden];
                    if (
                        kalcagenislik >= deger.MinKalca &&
                        kalcagenislik <= deger.MaxKalca &&
                        belGenislik >= deger.MinBel &&
                        belGenislik <= deger.MaxBel
                    ) {
                        uygunBeden = beden;
                        break;
                    }
                }

             
                const sonucDiv = document.createElement('div'); 
                if (uygunBeden) {
                    sonucDiv.innerHTML = `<strong id="strong"> ${marka}</strong id="strong">: Sizin için uygun beden <strong id="strong">${uygunBeden}</strong>.`;
                    sonucDiv.style.color ="beige";
                    sonucDiv.style.width="150px";
                } else {
                    sonucDiv.innerHTML = `<strong id="strong">${marka}</strong>: Ölçü bulunamadı.`;
                    sonucDiv.style.color = 'black';
                }
                sonucAlaniNike.appendChild(sonucDiv); // Sonucu ekliyoruz
            }
        })
        .catch(error => {
            console.error("Hata oluştu:", error);
        });
}
