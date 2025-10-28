# Simulacija Web Chat Aplikacije

Jednostavna web aplikacija za dopisivanje koja prikazuje osnovni koncept chata.  
Korisnik može unositi poruke, a aplikacija nasumično generira odgovore različitih "likova" (Thor, Wonder Woman i Grog).

---

## Funkcionalnosti

- Unos poruka putem tipkovnice ili gumba "Pošalji"
- Automatsko prikazivanje poruka u prozoru za chat
- Nasumični "odgovori" likova simulirani putem JavaScript funkcije
- Različite boje poruka za svakog lika
- Automatsno pomicanje prikaza na najnoviju poruku
- Uređen responzivan izgled pomoću CSS-a

---

## Tehnologije

- **HTML5** – struktura aplikacije  
- **CSS3** – stilizacija i pozadinske slike  
- **JavaScript (ES6)** – logika chata i manipulacija DOM-om  

---

## Struktura projekta

web-chat-app
│
├── index.html # Glavni HTML dokument
├── index.css # Stilovi aplikacije
├── script2.js # Logika slanja i simuliranja poruka
└── slike/ # Pozadinske slike i vizualni elementi

---

## Kako pokrenuti

1. Preuzmi repozitorij ili ga kloniraj:
   
   git clone https://github.com/tihanalisac/web-chat-app.git
Otvori datoteku index.html u pregledniku.
(Nema potrebe za serverom, sve radi lokalno.)

📸 Izgled aplikacije
Prikaz aplikacije


(možeš dodati vlastiti screenshot zaslona s chatom – npr. screenshots/chat.png)

# Što sam naučila
- Rad s DOM elementima i event listenerima
- Manipulacija dinamičkim sadržajem
- Korištenje CSS klasa za vizualno razlikovanje poruka
- Osnove simulacije korisničkih interakcija

# Moguća poboljšanja
- Dodavanje pravog backend servera (npr. Node.js + WebSocket)
- Pohrana poruka u localStorage ili bazu podataka
- Dodavanje avatara ili vremena slanja poruke
- Uvođenje korisničkih profila

Autorica: Tihana Lisac
Godina: 2023.
Projekt izrađen u svrhu vježbe i demonstracije osnovnih web tehnologija kao završni rad iz edukacije Front-end developer.
