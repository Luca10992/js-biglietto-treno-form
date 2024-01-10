const usernameImput = document.getElementById("username");
const distanceImput = document.getElementById("distance");
const ageImput = document.getElementById("age");
const buttonImput = document.getElementById("generate");
const priceTicket = document.getElementById("price-ticket");

const priceStandard = 0.21;

buttonImput.addEventListener('click', function() {
    const username = usernameImput.value;
    console.log('Nome e Cognome: ' + username);
    const distance = distanceImput.value;
    console.log('Km da percorrere: ' + distance);
    const age = ageImput.value;
    console.log('Fascia di età: ' + age);

    const priceKm = priceStandard * distance;
    
    if (age == "minorenne") {
        discount = 20;
    } else if (age == "ov65") {
        discount = 40;
    } else {
        discount = 0;
    }
    
    const finalPrice = priceKm - (priceKm * discount / 100);
    const priceText = "€" + finalPrice.toFixed(2);
    console.log('Prezzo biglietto: ' + priceText);

    priceTicket.innerHTML = priceText;
})



