function hesapla() {
    fetch('KadinVeriler.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('JSON dosyasına ulaşılamadı.');
            }
            return response.json();
        })
        .then(data => {
            
            const gogusGenisligi = parseInt(document.getElementById("gogus").value);
            const boyUzunlugu = parseInt(document.getElementById("Boy").value);

            const markalar = data.markalar;
            const sonucAlaniNike = document.getElementById('sonucAlaniNike');
            sonucAlaniNike.innerHTML = ''; 

           
            sonucAlaniNike.style.display = 'flex'; 
            sonucAlaniNike.style.flexWrap = 'wrap'; 
            sonucAlaniNike.style.gap = '10px';

            for (const marka in markalar) { 
                const ustGiyimVerisi = markalar[marka].kadin.ustgiyim;

                let uygunBeden = null;

                
                for (const beden in ustGiyimVerisi) {
                    const deger = ustGiyimVerisi[beden];
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

             
                const sonucDiv = document.createElement('div'); 
                if (uygunBeden) {
                    sonucDiv.innerHTML = `<strong>${marka}</strong>: Sizin için uygun beden <strong>${uygunBeden}</strong>.`;
                    sonucDiv.style.color ="beige";
                    sonucDiv.style.width="150px";
                } else {
                    sonucDiv.innerHTML = `<strong>${marka}</strong>: Ölçü bulunamadı.`;
                    sonucDiv.style.color = 'black';
                }
                sonucAlaniNike.appendChild(sonucDiv); // Sonucu ekliyoruz
            }
        })
        .catch(error => {
            console.error("Hata oluştu:", error);
        });
}
