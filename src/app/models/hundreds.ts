import { Unit } from './unit'
import { Tens } from './tens'
import { Ones } from './ones'
import { SpecialCase } from './specialCase'

/* Hundreds is the class responsible for mapping the digits 100-1000 into letters and calculating the total number of 
 * letters in the [100-1000] interval
 */
export class Hundreds extends Unit {
    public beforeHundred: number;
    public ones: Ones;
    public specialCase: SpecialCase;
    public tens: Tens;
    constructor() {
        super();

        this._mapDigits = ['cento'.length, 'duzentos'.length, 'trezentos'.length, 'quatrocentos'.length, 'quinhentos'.length,
            'seiscentos'.length, 'setecentos'.length, 'oitocentos'.length, 'novecentos'.length];
        this.ones = new Ones();
        this.specialCase = new SpecialCase();
        this.tens = new Tens();
        this.beforeHundred = this.ones.numberOfLetters + this.specialCase.numberOfLetters + this.tens.numberOfLetters;
        this.numberOfLetters = this.sumNumberOfLetters();
    }

    sumNumberOfLetters() : number {
        
        let sum = this._mapDigits.reduce((currentValue, previousValue) => {
            return currentValue + previousValue;
        });

        /* [1-99] has 9 occurencies in [100-1000]
         * 'cento e', 'duzentos e' occurs 99 times each (sum is the sum of mapDigits legths. plus 1 is the 'e' length)
         * letter 'e' counted 9 times when its not there ('duzentos', 'trezentos' ...)
         * 'cento' is counted where should be counted 'cem'
         */ 
        let accumulator = 9*this.beforeHundred + 99*(sum + 1) - 9 - 'cento'.length + 'cem'.length + 'mil'.length;
        
        return accumulator;
    }
    
}