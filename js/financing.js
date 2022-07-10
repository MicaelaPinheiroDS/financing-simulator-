import { Installment } from "./installments.js";
const table = document.querySelector('.table');
const tBody = document.querySelector('.tbody');
export class Financing {
    #interestRate;
    #deadline;
    #installments = [];

    constructor(value, entryValue, intereseRate, deadline){
        this.#interestRate = intereseRate;
        this.#deadline = deadline;
        this.#installments.push(new Installment(0,0,0,0, value - entryValue));
    }
    static clacInterestRate(value, interestRate){
        return value * (interestRate / 100);
    }
    calcMonthlyInstallments(){
        let balance = this.#installments[this.#installments.length-1].getBalance();
        let deadline = this.#deadline - (this.#installments.length - 1);
        let amortization = balance / deadline;
        for(let i = 0; i < deadline; i++){
            const number = this.#installments.length;
            const interest = Financing.clacInterestRate(balance, this.#interestRate);
            const value = interest + amortization;
            balance -= amortization;
            if(balance < 0 ) {balance = 0};
            this.#installments.push(new Installment(number, value, interest, amortization, balance));

        }
    }
    showDeadline(){
        table.style.display = '';
        const installments = this.#installments.slice(1);
        let line;
        let i = 0;
        for(let installment of installments){
            if(i % 2 == 0){
                line = tBody.insertRow(-1);
                line.style.background = '#004ead';
                console.log(line);
            } else{
                line = tBody.insertRow(-1);
            }
            for(let data of installment.getDataFormatted()){
                const cell = line.insertCell(-1);
                cell.textContent = data;
            }
            i++;
        }
    }
    getInstallments(){
        return this.#installments
    }
}