import { Hundreds } from '../models/hundreds'

/* SumCalculator is the class responsible for getting the values from ones, specialCase,
 * tens and hundreds and adding them together. Only Hundreds is instantiated because 
 * Hundreds use Ones, SpecialCase and Tens to calculate itself.
 */
export class SumCalculator {
    public totalSum: number;
    private hundreds: Hundreds;

    constructor(){
        this.hundreds = new Hundreds();
        this.totalSum = this.calculateSum();
    }

    calculateSum() {
        return this.hundreds.ones.numberOfLetters 
                + this.hundreds.specialCase.numberOfLetters
                + this.hundreds.tens.numberOfLetters
                + this.hundreds.numberOfLetters
    }
}