# ----------------------------------------------------------------
## Projekt för cypress för kraftsamla portalen.
# ----------------------------------------------------------------

# Docker
För att starta scripten behöver du först installera dependencies som ligger i package.json filen.
För att installera dessa skriv "npm install" i terminalen. 
När installationen är färdig kan du starta testerna genom npx kommandon. Några av de vanligaste är:
    # npx cypress run - detta kommer att starta samtliga tester.
    # npx cypress open - detta kommer att öppna cypress ui.


För att starta testerna i docker behöver du först installera docker desktop eller en likvärdig applikation på din dator. 
För att starta testerna - starta docker desktop.
Detta steg behövs bara göras första gången och vid ändingar av kod som läses in vid bygge.
  - Öppna terminalen på vs-code och skriv "docker-compose up --build"
Vid mindre ändringar eller för snabbare start när projektet är byggt.
  - Öppna terminalen på vs-code och skriv "docker-compose up"
Docker kommer att starta projektet och automatiskt köra samtliga tester. 