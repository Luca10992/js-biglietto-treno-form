const usernameImput = document.getElementById("username");
const distanceImput = document.getElementById("distance");
const ageImput = document.getElementById("age");
const buttonImput = document.getElementById("generate");
const priceTicket = document.getElementById("price-ticket");
const usernameTicket = document.getElementById("username-ticket");
const offertaTicket = document.getElementById("offerta-ticket");
document.getElementById("display-none").style.display='none';

const priceStandard = 0.21;

buttonImput.addEventListener('click', function() {
    const username = usernameImput.value;
    console.log('Nome e Cognome: ' + username);
    const distance = distanceImput.value;
    console.log('Km da percorrere: ' + distance);
    const age = ageImput.value;
    console.log('Fascia di età: ' + age);
    
    const baby = "baby"
    const old = "old"
    const standard = "standard"
    const priceKm = priceStandard * distance;
    
    if (age == "minorenne") {
        discount = 20;
        offertaTicket.innerHTML = 'Biglietto: ' + baby; 
    } else if (age == "ov65") {
        discount = 40;
        offertaTicket.innerHTML = 'Biglietto: ' + old;
    } else {
        discount = 0;
        offertaTicket.innerHTML = 'Biglietto: ' + standard;
    }
    
    const finalPrice = priceKm - (priceKm * discount / 100);
    const priceText = "€" + finalPrice.toFixed(2);
    console.log('Prezzo biglietto: ' + priceText);

    document.getElementById("display-none").style.display='block'; 
    usernameTicket.innerText = username;
    priceTicket.innerHTML = priceText;
})



