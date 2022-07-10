export class Installment {
    #number;
    #value;
    #interestRate;
    #amortization;
    #balance;

    constructor(number, value, interestRate, amortization, balance){
        this.#number = number;
        this.#value = value;
        this.#interestRate = interestRate;
        this.#amortization = amortization;
        this.#balance = balance;
    }
    getBalance(){
        return this.#balance;
    }
    getDataFormatted(){
        const data = [];
        data.push(this.#number);
        data.push(this.#value.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}));
        data.push(this.#amortization.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}));
        data.push(this.#interestRate.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}));
        data.push(this.#balance.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}));
        return data;
    }   


}