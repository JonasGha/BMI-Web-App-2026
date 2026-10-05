# BMI Web App


## Nach dem Klonen oder bei geänderten Abhängigkeiten

```sh
npm ci
```

## Entwicklung

```sh
npm run dev
```

Startet den lokalen Webserver unter http://localhost:5173 und öffnet die App
automatisch im Browser. Änderungen an HTML, JavaScript und CSS werden automatisch
übernommen. Tailwind läuft parallel im Watch-Modus. Mit `Strg+C` beendest du beide
Prozesse. Ist Port 5173 bereits belegt, beende zuerst den dort laufenden Server.

Falls PowerShell `npm.ps1` blockiert, verwende `npm.cmd run dev` (bzw. `npm.cmd ci`).

## Build und Veröffentlichung

```sh
npm run build
```

Erzeugt minimiertes CSS. Vor dem Veröffentlichen ausführen und den Inhalt von `src`
einschließlich der erzeugten `output.css` bereitstellen.



# Projektstruktur

John - Front Page, Graphen

Jonas - Formulare, Berechnung BMI

Malte - Einstellungen (Dark Mode, Email Adresse, User, PW, PW ändern, Geschlecht, Wunsch BMI)

Jan - Gemini, lokale KI -> Auswertung von den Daten (Handlungsempfehlung, Motivation)

Alex - Datenbanken, Tabelle, API

Zilke - Hardware besorgen (Raspberry PI 5 4gb, 32gb SD )
