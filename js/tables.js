import { CreateElement } from "./form.js";
const divTable = new CreateElement('container','div');
function creenteTable (){
    const table = divTable.appendChild(new CreateElement('table','table'));
    table.classList.add('table-bordered','text-white','border-secondary','mt-5');
    creanteTableHeader(table);
    creanteTBody(table);
}
function creanteTableHeader(element){
    const tableTR = element.appendChild(new CreateElement('tr','tr'));
    const titlesTableHeader = ['Num.','Valor da Parcela', 'Amortização', 'Juros %', 'Saldo devedor'];
    
    for(let i in titlesTableHeader){
        const tableTH = tableTR.appendChild(new CreateElement('col','th'));
        tableTH.classList.add('bg-secondary');
        tableTH.textContent = titlesTableHeader[i];
    }
}
function creanteTBody(element){
    element.appendChild(new CreateElement('tbody','tbody'));
}
creenteTable();