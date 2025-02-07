# Hangman Game

[Screenvid.webm](file:///Users/supercoder/Desktop/Macbook-Air-localhost-hoib2t0pa8hwbt.webm)

Das Projekt „Hangman Game“ wurde im Rahmen des sechsmonatigen Web-Development-Kurses während des „TypeScript“-Moduls entwickelt. Ziel dieses Projekts war es, meine neu erlernten Fähigkeiten in der Programmiersprache TypeScript zu demonstrieren. Das Spiel umfasst einen Zähler, der die verbleibenden Versuche anzeigt, sowie einen Countdown, der dem Nutzer bzw. der Nutzerin die verbleibende Spielzeit anzeigt. Es können beliebig viele Runden gespielt werden, wobei das Spiel auf ein Array mit einer festgelegten Anzahl von Wörtern zugreift, die jeweils zufällig ausgewählt werden und vom Nutzer erraten werden müssen.

## Table of Contents 

- [Über das Projekt](#über-das-projekt)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Voraussetzungen](#voraussetzungen)
  - [Installation](#installation)
- [Design](#design)
- [Deployment](#deployment)

## Über das Projekt

Für die Entwicklung dieses Projekts habe ich Visual Studio Code als Entwicklungsumgebung verwendet und die Website unter Einsatz von HTML sowie Tailwind CSS gestaltet. Die Funktionen zum Anzeigen der Buchstaben, des Zählers und des Countdowns habe ich in TypeScript implementiert.

Das Hauptziel dieses Projekts war es, die bis dahin erlernten Konzepte, insbesondere in TypeScript, praxisnah anzuwenden. Das Ergebnis ist eine Website, die ein spielerisches und gleichzeitig minimalistisches Design aufweist, mit dem die Nutzerin bzw. der Nutzer interagieren kann.

Der Zähler oben links wird nach jedem Klick auf den Button „Hit me (Again)“ zurückgesetzt und zählt herunter, sobald Buchstaben angeklickt werden, die nicht im gesuchten Wort enthalten sind. Auch der Countdown wird nach jedem Klick auf denselben Button auf eine neue Zeitspanne von 3 Minuten gesetzt. Sollte eines der beiden Elemente abgelaufen sein, wird dem Nutzer über die Anzeige „Game Over“ signalisiert, dass das Spiel verloren wurde. Über den Button „Hit me (Again)“ kann eine neue Runde gestartet werden. 

Zusätzlich wird der Nutzerin bzw. dem Nutzer angezeigt, welche Buchstaben, die bereits geklickt wurden, nicht im gesuchten Wort enthalten sind, indem diese ebenfalls visualisiert werden.

## Tech Stack

**Styling:**  
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)  

**IDE:**  
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)  

**TS:**<br/>
![Javascript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)

**Version Control:**  
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  


## Getting Startet

Hier ist eine Anleitung, wie du das "Personalized Nutrition Coaching"-Projekt auf deinem lokalen Rechner einrichtest und ausführst:

### Voraussetzungen

Folgende Programme solltest du installiert haben:

- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/download)
- [Vite](https://v5.vite.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)

### Installation

1. **Clone das "Repository":**
   ```bash
   git clone https://github.com/YvonneJL/Hangman-Game
   ```

### Ausführen des Projekts

2. **Öffne das Projekt und installiere Vite und Tailwind Css, indem du den Instruktionen auf den oben verlinkten Webseiten folgst :**
 
**Alles ist eingerichtet! Nun kannst du das "Hangman-Game"-Projekt erkunden und spielen.

## Design

Für das Design des Projekts gab es keine spezifischen Vorgaben. Ich habe mich für eine schlichte Gestaltung entschieden, da der Fokus dieses Projekts auf der praktischen Anwendung von TypeScript liegt. Durch die Integration der Schriftart „Barrio-Regular“ erhält die Website jedoch einen spielerischen Charakter, der zur Atmosphäre des Spiels beiträgt.


## Deployment

Hier gelangst du direkt zur Webseite
- [Hangman Game](https://hangman-game-seven-xi.vercel.app/)
