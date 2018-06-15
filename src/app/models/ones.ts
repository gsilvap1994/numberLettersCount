import { Unit } from './unit'

/* Ones is the class responsible for mapping the digits 1-9 into letters and calculating the total number of 
 * letters in the [1-9] interval
 */
export class Ones extends Unit {
    
    constructor() {
        super()

        this._mapDigits = ['um'.length, 'dois'.length, 'tres'.length, 'quatro'.length, 
           'cinco'.length, 'seis'.length, 'sete'.length, 'oito'.length, 'nove'.length];
        this.numberOfLetters = this.sumNumberOfLetters();
    }

    sumNumberOfLetters() : number {
        // the number of letters in [1-9] is the sum of values in the array of lengths
        return this._mapDigits.reduce((currentValue,previousValue) => {
            return currentValue + previousValue;
        });
    }
}