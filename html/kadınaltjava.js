/*function hesapla() {
    fetch('KadinVeriler.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('JSON dosyasına ulaşılamadı.');
            }
            return response.json();
        })
        .then(data => {
            
            const kalcagenislik = parseInt(document.getElementById("kalca").value);
            const belGenislik = parseInt(document.getElementById("Bel").value);

            const markalar = data.markalar;
            const sonucAlaniNike = document.getElementById('sonucAlaniNike');
            sonucAlaniNike.innerHTML = ''; 

           
            sonucAlaniNike.style.display = 'flex'; 
            sonucAlaniNike.style.flexWrap = 'wrap'; 
            sonucAlaniNike.style.gap = '10px';

            for (const marka in markalar) { 
                const altGiyimVerisi = markalar[marka].kadin.altgiyim;

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
                    sonucDiv.innerHTML = `<strong id="strong">${marka}</strong>: Sizin için uygun beden <strong id="strong">${uygunBeden}</strong>.`;
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
}*/
function hesapla() {
    fetch('KadinVeriler.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('JSON dosyasına ulaşılamadı.');
            }
            return response.json();
        })
        .then(data => {
            const kalcaGenislik = parseInt(document.getElementById("kalca").value);
            const belGenislik = parseInt(document.getElementById("Bel").value);

            const markalar = data.markalar;
            const sonucAlaniNike = document.getElementById('sonucAlaniNike');
            sonucAlaniNike.innerHTML = '';

            for (const marka in markalar) {
                const altGiyimVerisi = markalar[marka].kadin.altgiyim;

                let uygunBeden = null;
                let enYakınBeden = null;
                let enKüçükFark = Number.MAX_VALUE;

                for (const beden in altGiyimVerisi) {
                    const deger = altGiyimVerisi[beden];

                   
                    if (
                        kalcaGenislik >= deger.MinKalca &&
                        kalcaGenislik <= deger.MaxKalca &&
                        belGenislik >= deger.MinBel &&
                        belGenislik <= deger.MaxBel
                    ) {
                        uygunBeden = beden;
                        break;
                    }

                    
                    const fark = Math.abs(kalcaGenislik - deger.MinKalca) + Math.abs(belGenislik - deger.MinBel);
                    if (fark < enKüçükFark) {
                        enYakınBeden = beden;
                        enKüçükFark = fark;
                    }
                }

                // Sonucu oluşturma
                const sonucDiv = document.createElement('div');
                if (uygunBeden) {
                    sonucDiv.innerHTML = `<strong id="strong">${marka}</strong>: Sizin için uygun beden <strong id="strong">${uygunBeden}</strong>.`;
                    sonucDiv.style.color = "beige";
                } else {
                    sonucDiv.innerHTML = `<strong id="strong">${marka}</strong>: Sizin için uygun beden <strong id="strong">${enYakınBeden}</strong>.`;;
                    sonucDiv.style.color = "beige";
                }
                sonucAlaniNike.appendChild(sonucDiv);
            }
        })
        .catch(error => {
            console.error("Hata oluştu:", error);
        });
}

