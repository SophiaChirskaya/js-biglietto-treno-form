function pagare() {
        const eta = parseInt(document.getElementById("check-age").value);
        const km = parseFloat(document.getElementById("check-km").value);

        let prezzo; 

        if (eta >= 65) {
            prezzo = (km * 0.21) * 0.6;
        } else if (eta < 18) {
            prezzo = (km * 0.21) * 0.8;
        } else {
            prezzo = km * 0.21;
        }
        document.getElementById("prezzo").innerHTML = "Prezzo:" + prezzo;
}
