/*Funciones a elaborar:

* animateByLine: 
Esta función debe imprimir el corazón línea por línea en la consola del editor, debe de haber un salto de línea entre cada impresión. 
Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de línea.

* animateByChart: 
Esta función debe imprimir el corazón carácter por carácter en la consola del editor, debe de haber un delay entre cada impresión de carácter. 
Cada vez que se complete la impresión de una línea, se debe hacer un salto de línea. 
Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de carácter.

Pistas:

- Investiga sobre la función setTimeout, puede ser de interés.
- Usa console.log o process.stdout.write para imprimir en la consola de acuerdo a lo que necesites.
- Recuerdas que necesitas iterar un string, ¿cómo lo conviertes en un array de caracteres?*/

const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁"
];

const animateByLine = (ms) => {
    let i = 0;

    const primeraLinea = () => {
        if (i < asciiHeart.length) {
            console.log(asciiHeart[i]); 
            i++;

            setTimeout(primeraLinea, ms); 
        }
    };

    primeraLinea(); 
};

animateByLine(500); 



const animateByChart = (ms) => {
    let linea1 = 0;
    let caracter1 = 0;

    const caracter = () => {
        if (linea1 < asciiHeart.length) {
            const line = asciiHeart[linea1].split(''); 

            if (caracter1 < line.length) {
                process.stdout.write(line[caracter1]); 
                currentChar++;
            } else {
                console.log(); 
                linea1++;
                caracter1 = 0;
            }

            setTimeout(caracter, ms); 
        }
    };

    caracter(); 
};

animateByChart(100); 
