class FromSacInfo {
    #name;
    #placeholde;
    constructor(name,placeholder){
        this.#name = name;
        this.#placeholde = placeholder;
    }
    getDataName(){
        return this.#name;
    }
    getDataPlaceholde(){
        return this.#placeholde;
    }
}

export class CreateElement {
    #elementName;
    constructor(className, elementName){
        this.#elementName = document.createElement(elementName);
        this.#elementName.classList.add(className);
        return document.body.insertBefore(this.#elementName, null);
    }
}

const immobileValue = new FromSacInfo('Valor do Bem','R$ 200.000');
const entryValue = new FromSacInfo('Valor da Entrada','R$ 100.000');
const interestAmount = new FromSacInfo('Valor de Juros (%)','10%');
const deadline = new FromSacInfo('Prazo (em meses)', '12');
const fromInfo = [immobileValue, entryValue, interestAmount, deadline];

function creanteHeader() {
    const header = document.body.appendChild(new CreateElement('container', 'header'));
    header.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-column', 'mt-5');
    const imgHeader = header.appendChild(new CreateElement('d-flex','img'));
    imgHeader.src = './img/coin.png';
    const titleH1 = header.appendChild(new CreateElement('text-center', 'h1'));
    titleH1.classList.add('mt-2', 'text-white');
    titleH1.textContent = 'Simulador de Financiamento com Sistema de Amortização Constante (SAC)';

}

function createFromSAC() {
    const form = document.body.appendChild(new CreateElement('container', 'form'));
    form.classList.add('mt-3');

    createFromFields(form);
    return form;
}

function creanteContrainerDropdownAndSubmitButton(){
    let dropdownAndSubmit = form.appendChild(new CreateElement('input-group', 'div'));
    dropdownAndSubmit.classList.add('mb-3', 'd-flex', 'justify-content-center');

    createButtonDropdown(dropdownAndSubmit);

    const listDropdown = dropdownAndSubmit.appendChild(new CreateElement('dropdown-menu', 'ul'));
    listDropdown.classList.add('inline-block','w-50','pt-0');

    createListDropdownButton(listDropdown);
   
    return dropdownAndSubmit;
}

function creanteSumitButton(){
    const fromSubmit = dropdownAndSubmit.appendChild(new CreateElement('btn-primary','button'));
    fromSubmit.classList.add('btn','inline-block','w-50','submit');
    fromSubmit.textContent = 'Calcula';
}

function createFromFields(element){
    for(let i in fromInfo){
        let label = element.appendChild(new CreateElement('input-group', 'label'));
        let span =  label.appendChild(new CreateElement('input-group-text','span'));
        span.classList.add('bg-info', 'text-secondary', 'col','text-center', 'justify-content-center'); 
        span.textContent = fromInfo[i].getDataName();
        let formControl = label.appendChild(new CreateElement('form-control', 'input'));
        formControl.setAttribute('placeholder', fromInfo[i].getDataPlaceholde());
    }
}

function createButtonDropdown(element){
    const buttonDropdown = element.appendChild(new CreateElement('dropdown-toggle','button'));
    buttonDropdown.classList.add('btn','btn-secondary', 'btn-outline-info', 'dropdown-toggle', 'inline-block', 'w-50', 'dropdown-selection', 'text-white');
    buttonDropdown.setAttribute('data-bs-toggle', 'dropdown');
    buttonDropdown.setAttribute('aria-expanded', 'false');
    buttonDropdown.setAttribute('type','button');
    buttonDropdown.textContent = 'Com Carência?';
}

function createListDropdownButton(element){
    for(let i = 0; i <= 13; i++){
        let itemListDropdown = [];
        itemListDropdown[i] = element.appendChild(new CreateElement('dropdown-item','li'));
        itemListDropdown[i].value = i;
        if (i === 0 ){
            itemListDropdown[i].textContent = 'Carência'
            itemListDropdown[i].classList.add('disabled','text-center', 'bg-secondary', 'text-white');
        } else if (i === 13){
            itemListDropdown[i].textContent = 'Sem Carência'
        } else {
            itemListDropdown[i].textContent = `${i} meses`;
        }

    }

}

creanteHeader();
// get return for function and call her (from and dropdownAndSubmit)
const form = createFromSAC();
const dropdownAndSubmit = creanteContrainerDropdownAndSubmitButton();
creanteSumitButton();