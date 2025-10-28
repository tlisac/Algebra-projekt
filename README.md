# Simulacija Web Chat Aplikacije

Jednostavna web aplikacija za dopisivanje koja prikazuje osnovni koncept chata.  
Korisnik može unositi poruke, a aplikacija nasumično generira odgovore različitih "likova" (Thor, Wonder Woman i Grog).

---

### Funkcionalnosti

- Unos poruka putem tipkovnice ili gumba "Pošalji"
- Automatsko prikazivanje poruka u prozoru za chat
- Nasumični "odgovori" likova simulirani putem JavaScript funkcije
- Različite boje poruka za svakog lika
- Automatsno pomicanje prikaza na najnoviju poruku
- Uređen responzivan izgled pomoću CSS-a

--

### Tehnologije

- **HTML5** – struktura aplikacije  
- **CSS3** – stilizacija i pozadinske slike  
- **JavaScript (ES6)** – logika chata i manipulacija DOM-om  

---

### Struktura projekta

web-chat-app <br>
│<br>
├── index.html # Glavni HTML dokument<br>
├── index.css # Stilovi aplikacije<br>
├── script2.js # Logika slanja i simuliranja poruka<br>
└── slike/ # Pozadinske slike i vizualni elementi<br>

---

### Kako pokrenuti

1. Preuzmi repozitorij ili ga kloniraj:

   git clone https://github.com/tlisac/Algebra-projekt.git
   
2. Otvori datoteku index.html u pregledniku.(Nema potrebe za serverom, sve radi lokalno.)



### Prikaz aplikacije


<img width="1290" height="772" alt="image" src="https://github.com/user-attachments/assets/d31237ca-30a7-4589-a062-91199d583d3b" />


### Što sam naučila
- Rad s DOM elementima i event listenerima
- Manipulacija dinamičkim sadržajem
- Korištenje CSS klasa za vizualno razlikovanje poruka
- Osnove simulacije korisničkih interakcija

### Moguća poboljšanja
- Dodavanje pravog backend servera (npr. Node.js + WebSocket)
- Pohrana poruka u localStorage ili bazu podataka
- Dodavanje avatara ili vremena slanja poruke
- Uvođenje korisničkih profila

---

Autorica: Tihana Lisac <br>
Godina: 2023. <br>
Projekt izrađen u svrhu vježbe i demonstracije osnovnih web tehnologija kao završni rad iz edukacije Front-end developer.
