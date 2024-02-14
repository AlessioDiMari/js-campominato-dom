// Dichiaro il contenitore della griglia
const gridContainer = document.getElementById('gridContainer');

// Dichiaro il bottone che creerà la griglia
const createGridButton = document.getElementById('create-grid-button');

// Dichiaro il menu a discesa che selezionerà la dimenzione della griglia
const gridSizeSelect = document.getElementById('sizes-grid');

// Dichiaro gli elementi della User Intefrace
const userInterface = document.getElementById("user-interface");

const resutlsElement = document.getElementById("user-result");

const gameOver = document.getElementById("gameover");

// Dichiaro l'array delle bombe come variabile globale
const bombsArray = [];

function createGrid(size) {
    // Svuoto il contenitore della griglia da 
    // eventuali elementi precedenti indesiderati
    gridContainer.innerHTML = '';

    let cellCounter = 1;
    // Creo un doppio ciclo for per creare le celle
    // all'interno della griglia

    // Il primo servirà per le righe
    for (let i = 0; i < size; i++) {
        // Il secondo per le colonne
        for (let j = 0; j < size; j++) {
            // Creo la cella
            const cell = document.createElement('div');
            
            // Aggiungo la classe si stilizzazione
            cell.classList.add('cell');

            // Creo uno span per vedere il numero della cella
            const numberSpan = document.createElement("span");
            numberSpan.textContent = cellCounter;
            cell.appendChild(numberSpan)
            
            // Aggiungo un classe che cambia il
            // colore della cella al click
            cell.addEventListener('click', function(){
                this.classList.add('active');
                // Scrivo il click in console
                console.log(this.innerText)

                // Verifico se la cella cliccata appartiene pure all'array bombe
                if (bombsArray.includes(Number(this.innerText))){
                    this.classList.add("bomba");
                }
            })

            // Inserisco la cella nella griglia
            gridContainer.appendChild(cell);

            // Incremento cellCounter
            cellCounter++;
        }
        // Aggiungo un <br> per far si che la riga
        // successiva sia sotto la precendente
        const aCapo = document.createElement('br');
        gridContainer.appendChild(aCapo);
    }
    
}

// Creo l'event listener che richiamerà la funzione
createGridButton.addEventListener('click', function() {
    // Dichiaro la variabile "size" che sta dentro
    // la funzione "createGrid"
    const gridSize = parseInt(gridSizeSelect.value);
    if (!isNaN(gridSize) && gridSize > 0) {
        createGrid(gridSize);
    } else {
        alert('Seleziona una dimensione valida!');
    };

    createBomb();
});

// Funzione per creare numeri casuali da 1 al numero totale delle caselle
function createNumberRandom(){

    const numberRandom = Math.floor(Math.random() * Number(gridSizeSelect.value * gridSizeSelect.value) + 1);
    return numberRandom;
}


function createBomb(){

    // Creo un ciclo do while per inserire le bombe nell'array
    do{
        const newNumber = createNumberRandom();

        // Creo un if per verificare se las bomba è già all'interno dell'array
        if( !bombsArray.includes(newNumber)){

            bombsArray.push(newNumber);

        }
    } while ( bombsArray.length < 16)
    
    console.log(bombsArray)
}