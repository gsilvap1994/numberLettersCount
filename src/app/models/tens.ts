import { Unit } from './unit'
import { Ones } from './ones'

/* Tens is the class responsible for mapping the digits 21-99 into letters and calculating the total number of 
 * letters in the [20-99] interval
 */
export class Tens extends Unit{
    private ones : Ones;
    constructor() {
        super();

        this._mapDigits = ['vinte'.length, 'trinta'.length, 'quarenta'.length, 'cinquenta'.length,
                            'sessenta'.length, 'setenta'.length, 'oitenta'.length, 'noventa'.length];
        this.ones = new Ones();
        this.numberOfLetters = this.sumNumberOfLetters();
    }

    sumNumberOfLetters(): number {
        // accumulator is the sum of all letters
        let accumulator = this._mapDigits.reduce((currentValue, previousValue) => {
            return currentValue + previousValue;
        });
        /* the letters in each index of mapDigits are occurring 10 times + 'e.length'
         * 'vinte', 'trinta' ... dont have the letter 'e',
         * [1-9] occur 8 times in [20-99] 
         */
        return (accumulator + 'e'.length) * 10 + 8*this.ones.numberOfLetters - this._mapDigits.length * 'e'.length ;
    }
    
}