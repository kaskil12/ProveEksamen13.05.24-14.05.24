# PrøveEksamen

En nettside laget i React, med design fulgt fra mal.

## Om nettsiden

I repositoryet er det en mappe som heter react. Under denne mappen er filene til nettsiden. Nettsiden er lagd i React ved bruk av Tailwind og TypeScript.
For routing bruker prosjektet React Router Dom, hvor jeg har en Routes.tsx og en outlet på App.tsx, der undersidene blir printet på. Ved bruk av denne metoden gjør jeg at alle sidene er lagret i minnet, men ikke vist grafisk før du går inn på dem.
Prosjektet tar i bruk mange komponenter for å gjøre at sidene ikke har for rotete kode.

## Hva prosjektet er bygget opp av

### Avhengigheter

* React med TypeScript
* Tailwind
* Leaflet og OpenStreetMap for kartet.
* [Thispersondoesnotexit.com](https://www.thispersondoesnotexit.com) for bildene av de ansatte

### Installering

* For å laste ned prosjektet kan du først bruke Github Desktop for å klone repoet
* Du trenger pakkene som brukes for nettsiden, så for å laste ned dem, må du først åpne react mappen i Visual Studio Code (eller en annen foretrukket kodeeditor). Når du er der kan du åpne en ny terminal og passe på at du er i react-mappen. Da skriver du
```
npm i
```
for å laste ned alle avhengigheter.

### Kjøre prosjektet

* For å kjøre nettsiden, så må du være inne i react-mappen i terminalen, og så skrive:
```
npm run dev
```
* Nå er nettsiden oppe og går, og det eneste du trenger å gjøre er å gå inn på [localhost:5173](http://localhost:5173/)

## Forfattere

Kapser Kilde med hjelp av Vetle Lindbråten for gramatikk
