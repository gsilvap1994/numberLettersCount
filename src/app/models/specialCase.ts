import { Unit } from './unit'

/* 
 * The interval between [10-19] dont have any pattern, so this are the specialCase;
 */
export class SpecialCase extends Unit {
    constructor() {
        super();

        this._mapDigits = ['dez'.length, 'onze'.length, 'doze'.length, 'treze'.length, 'quatorze'.length, 'quinze'.length,
            'dezesseis'.length, 'dezessete'.length, 'dezoito'.length, 'dezenove'.length];
        this.numberOfLetters = this.sumNumberOfLetters();
    }

    sumNumberOfLetters(): number {
        // the number of letters in [10-19] is the sum of values in the array of lengths
        return this._mapDigits.reduce((previousValue,currentValue) => {
            return previousValue + currentValue;
        });
    }

}