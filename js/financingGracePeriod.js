import { Financing } from "./financing.js";
import { Installment } from "./installments.js";

export class FinancinGracePeriond extends Financing {
    #gracePeriond;
    #interestRate;
    #installments = [];
    constructor(value, entryValue, intereseRate, deadline, gracePeriond){
        super(value, entryValue, intereseRate, deadline);
        this.#interestRate = intereseRate;
        this.#installments = super.getInstallments();
        this.#gracePeriond = gracePeriond;
    }
    calcMonthlyInstallments(){
        let balance = this.#installments[0].getBalance();
        for(let i = 0; i < this.#gracePeriond; i++){
            const number = this.#installments.length;
            balance += Financing.clacInterestRate(balance, this.#interestRate);
            this.#installments.push(new Installment(number,0,0,0,balance));  
        } 
        super.calcMonthlyInstallments();
    }

}