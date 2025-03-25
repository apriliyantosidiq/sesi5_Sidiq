"Ini adalah script rumusnya"

export function kalkulator(angka1, angka2, operator) {
    switch (operator) {
        case "+":
            return angka1 + angka2;
            break ;
        case "-" :
            return angka1 - angka2;
            break ;
        case "*" :
            return angka1 * angka2;
            break ;
        case "/" :
            return angka1 / angka2;
            break ;
        case "/0" :
            return "Tidak Terhingga"
    default:
    return "Operator tidak valid!";
    }
}

"Ini adalah Script menunya"

import { kalkulator } from './rumus.js';
import readline from 'readline';

const inputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inputUser.question('Masukkan angka pertama: ', angka1 => {
    inputUser.question('Masukkan angka kedua: ', angka2 => {
        inputUser.question('Masukkan angka operator (+,-,*,/): ', operator => {
            console.log(
                `Hasil: ${kalkulator(
                parseFloat(angka1),
                parseFloat(angka2),
                operator
                )}`
                );
                inputUser.close();
            });
        });
    }) 