//Vorgabe an Wörtern
const words = ["Abendbrot", "Brueckentag", "Erklaerungsnot", "Fingerspitzengefuehl", "Fremdschaemen", "Geborgenheit", "Geschmacksverirrung", "Schweinehund", "Kopfkino", "Kummerspeck", "Schnapsidee", "Torschlusspanik", "verabredet", "verschlimmbessern", "Vorfreude", "Weltschmerz", "Zeitgeist", "Zugzwang"]

//HTML-Elemente ziehen
const sectionButtons = document.querySelector("#button-section");
const sectionResult = document.querySelector<HTMLDivElement>("#result-wrap");
const buttonHitMe = document.querySelector("#hit-me");
const wrongLetterSection = document.querySelector<HTMLDivElement>("#wrong-letters");
const counterPElement = document.querySelector("#counter");


//Variable für falsche Klicks initialisieren
let counterForClicks: number = 11;


if (sectionButtons && sectionResult && buttonHitMe && wrongLetterSection && counterPElement) {


    //Erstellen der Buchstaben-Buttons(dynamisch)
    for (let i=97; i<=122; i++ ) {
        const allButtons = document.createElement("button");
        sectionButtons.appendChild(allButtons);
        allButtons.textContent = String.fromCharCode(i).toUpperCase();
        allButtons.className = "rounded-xl text-yellow-100 p-2 bg-salmonish letter-button";
        allButtons.disabled = true;
    };

    //Initialisieren der Variablen, die 
    //das gesuchte Wort als Array enthält
    //alle <p>-Elemente, die die Buchstaben den gesuchten Wortes enthalten
    let wordAsArray: string[] = []
    let letterElements: HTMLParagraphElement[] = [];

    //Button "Hit me Again" Click-Event
    buttonHitMe.addEventListener("click", ()=> {
        //vor dem Generieren eines neuen Wortes, folgendes auf "reset"
        buttonHitMe.textContent = "Hit me Again";
        sectionResult.innerText = "";
        wrongLetterSection.innerText = "";
        letterElements = [];
        let randomWord = "";
        counterForClicks = 11;
        counterPElement.innerHTML = "11";
        allLetterButtons.forEach((button)=> button.disabled = false)
        //ein randomWord aus dem Array ziehen (zuvor leer initialisiert)
        randomWord = words[Math.floor(Math.random()*words.length)].toUpperCase();
        console.log(randomWord);
        //randomWort zu Array in zuvor initialisiertem Array
        wordAsArray = randomWord.split("");
        //hier render-Funktion aufrufen
        renderSearchedWordToDOM();

    });

    //! HIER NOCH AUFRÄUMEN?--> also mit innerHTML
    //Funktion-->jeder Buchstaben im Array in die DOM
    function renderSearchedWordToDOM () {
      if (sectionResult) {
        for(let i = 0; i<= wordAsArray.length-1; i++) {
          const containerAll = document.createElement("div");
          
          //Buchstaben und Styles
          const letterContainer = document.createElement("div");
          const letter = document.createElement("p");
          letter.className = "bg-yellow-100 text-salmonish px-4 py-2 mb-2 text-xl font-bold rounded-lg invisible"
          letter.textContent = wordAsArray[i];
          sectionResult.appendChild(containerAll);
          containerAll.appendChild(letterContainer);
          letterContainer.appendChild(letter);
          
          //Linien, um zu sehen wie viele Buchstaben es gibt
          const underLine = document.createElement("div");
          containerAll.appendChild(underLine);
          underLine.className = "bg-black w-full h-1"

          //<p>-Elemente in ein Array pushen, um später Klasse "invisible" zu entfernen
          letterElements.push(letter);
      };   
      };
    };


    //Event-Listener für Buchstaben-Buttons
    const allLetterButtons = document.querySelectorAll<HTMLButtonElement>(".letter-button");
    allLetterButtons.forEach((button)=> {
        button.addEventListener("click", ()=> {
            // wenn der Buchstabe vom Button dem Buchstaben im Array gleicht, wird die Klasse "invisible entfernt"
            for (let i=0; i< wordAsArray.length; i++) {
                if (button.innerHTML === wordAsArray[i]) {
                    letterElements[i].classList.remove("invisible");
                        //mit  .every() prüfen, ob keiner der Buchstaben "invisible" enthält
                        // dann Ausgabe "You Won"
                        const isEveryLetterVisible = letterElements.every((letter)=> {
                            return !letter.className.includes("invisible");
                        })
                        if (isEveryLetterVisible) {
                            wrongLetterSection.innerText = "";
                            wrongLetterSection.innerText = "You won 🍾";
                            wrongLetterSection.className = "flex justify-center text-4xl text-green-400 p-4";
                        };
                }; 
            };
            // wenn Buchstaben-Buttons, die nicht im Wort erscheinen geklickt werden-->Ausgabe in DOM
            // Counter mitlaufen lassen
            const isLetterInWord = wordAsArray.includes(button.innerHTML);
            if (!isLetterInWord) {
                    counterForClicks--
                    console.log(counterForClicks);
                    counterPElement.innerHTML = counterForClicks.toString();

                    const wrongLetterPElement = document.createElement("p");

                    wrongLetterSection.className = "flex gap-3 justify-center"
                    wrongLetterPElement.textContent = button.innerHTML;
                    wrongLetterPElement.className = "text-rb-iceblue text-3xl";

                    wrongLetterSection.appendChild(wrongLetterPElement);

                // Nach 11 falschen Klicks button-Elemente auf disabled stellen
                if (counterForClicks <= 0) {
                    allLetterButtons.forEach((button)=> button.disabled = true)
                    wrongLetterSection.innerText = "";
                    wrongLetterSection.innerText = "Game Over 🤡";
                    wrongLetterSection.className = "flex justify-center text-4xl text-red-400 p-4";
                }
            }
        })
    })
};  


//! Countdown hinzufügen
//! Animation--> You won/Game Over

//! readme

