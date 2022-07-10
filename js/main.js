import { Financing } from "./financing.js";
const clacButton = document.querySelector('.clac-button');
const fromFields = document.querySelectorAll('.from-fields');
const tBody = document.querySelector('tbody');
clacButton.addEventListener('click', ()=>{
        tBody.innerHTML = '';
        let simulation = new Financing(fromFields[0].value,fromFields[1].value,fromFields[2].value,fromFields[3].value);
        simulation.calcMonthlyInstallments();
        simulation.showDeadline();

})