document.addEventListener("DOMContentLoaded", function() {
  //dohvaćanje elemenata po ID-u
    const chatPoruke = document.getElementById("poruke");
    const porukeUnos = document.getElementById("unos-poruke");
    const gumbPosalji = document.getElementById("posalji");
  
    // Kada mi šaljemo poruku
    const posalji_Poruku = () => {
      const poruke = porukeUnos.value; //vrijednost koju unosimo u polje
      if (poruke.trim() !== '') { //probjeravanje je li polje prazno ili ne
        const ime = "Ja"; // Postavljamo ime korisnika na "Ja"
        const sadrzajPoruke = kreiraj_sadrzaj_poruke(ime, poruke, 'moje-poruke'); //kreiramo elemenet poruke sa kor. imenom, porukom i klasom
        chatPoruke.appendChild(sadrzajPoruke); //dodaje se u div sadržaj poruka
  
        porukeUnos.value = ''; //Postavljanje polja za unos na prazno polje
  
        simulacija_Odgovora(); //pozivanje somulacije odg
      }
    };
  
    // Simulacija odgovora
    const simulacija_Odgovora = () => {
      const imena = ["Thor", "Wonder Woman", "Grog"]; // Niz imena korisnika
      const randomImena = imena[Math.floor(Math.random() * imena.length)];
      const odgovori = ["Dobro", "Super", "Ništa", "hmmm", "Fjaka", "nije loše, šta ima s tobom", "ne pitaj ništa", "ZAŠTO?", "Ne davi", "spašavam svijet"];
      const randomOdgovori = odgovori[Math.floor(Math.random() * odgovori.length)];
      
      const imeKlase = imena_klase(randomImena); // Dohvaćanje CSS klase za korisničko ime
      const sadrzajOdgovora = kreiraj_sadrzaj_poruke(randomImena, randomOdgovori, imeKlase);
      chatPoruke.appendChild(sadrzajOdgovora);
  
      chatPoruke.scrollTop = chatPoruke.scrollHeight; // Pomicanje na dno poruka
    };
    
    //kreiranje sadržaja poruke
    const kreiraj_sadrzaj_poruke = (ime, poruke, imeKlase) => {
      const sadrzajPoruke = document.createElement('div'); //stvaranje div elementa u htmlu
      sadrzajPoruke.textContent = `${ime}: ${poruke}`;  // Postavljanje sadržaja poruke unutar stvorenogdiv elementa
      sadrzajPoruke.classList.add(imeKlase); //dodavanje klase div-u
      return sadrzajPoruke;
    };
  
    //stvara ime klase od random imena
    const imena_klase = (imena) => {
      switch (imena) {
        case "Thor":
          return "primljene-poruke-thor";
        case "Wonder Woman":
          return "primljene-poruke-wonder-woman";
        case "Grog":
          return "primljene-poruke-grog";
        default:
          return "primljene-poruke";
      }
    };
  
    gumbPosalji.addEventListener('click', posalji_Poruku); //događaj klik na gumb
    porukeUnos.addEventListener('keydown', event => {  //događaj pritisak enter-a
      if (event.key === 'Enter') {
        posalji_Poruku(); // Pozivanje funkcije za slanje poruke kada se pritisne tipka "Enter"
      }
    });
  });
  