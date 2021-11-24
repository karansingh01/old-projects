# 3D-modellering workshop med Bekk (for studenter)

Dette er en workshop designet for å gi en innføring i hvordan man kan bruke programmering til å lage 3D-modeller - som også blir mulig å 3D-printe.

For å få 3D-modellen printet ut må du lage en PR. Dette kan blant annet gjøres med å gå inn på [`print-ut-denne.py`](print-ut-denne.py)-filen og følge instruksene.

## Verktøy

- [VSCode](https://code.visualstudio.com/) (Anbefalt)
- [Python 3](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/en/)
- [OpenSCAD](https://openscad.org/)

## Installere pakker

Nå som du har satt opp både Python 3 og Node.js, må du installere noen pakker:

```bash
pip3 install solidpython numpy pillow
npm install -g nodemon # For å få auto-refresh på 3D-modellen
```

## Sette opp kodemiljøet

1. Åpne en terminal, f.eks. i VSCode, og kjør:

   ```bash
   nodemon julekule/julekule.py
   # Eller
   nodemon --exec python3 julekule/julekule.py # om du bruker python 2
   ```

   Husk å naviger til riktig mappe (altså hit denne readme'en er). I VSCode skal dette skje automatisk.

2. Neste steg er å åpne OpenSCAD og åpne `.scad`-filen som nå ble generert. _Når du gjør kodeendringer nå vil du se endringene på 3D-modellen med en gang. Dette er supernyttig om man skal kode 3D-modeller!_

3. (Anbefalt) Plasser vinduene ved siden av hverandre, slik:
   ![Kodemiljø](https://user-images.githubusercontent.com/8504538/141381286-7e681745-31bb-47b6-8467-7f6b9853dbf9.png)

## Inspirasjon / Eksempler

Her kan du finne noen eksempler på hva du kan lage:

- [/julekule](julekule)  
  <img src="https://user-images.githubusercontent.com/8504538/141822348-9a3c55de-824e-4b6c-9253-252dbc959114.png" height="240px" />

- [/vase](vase)  
  <img src="https://user-images.githubusercontent.com/8504538/141823363-98f9e12a-91a9-4199-bbc7-ea583f4a00fd.png" height="240px" />

- [/boks](boks)  
  <img src="https://user-images.githubusercontent.com/8504538/141859168-d8f5bd3e-39e9-492f-a094-16a8ddb9da5b.png" height="240px" />

- Ellers finnes det masse på [Thingiverse](https://www.thingiverse.com/)!
