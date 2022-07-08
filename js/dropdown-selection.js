const dropdownSelection = document.querySelector('.dropdown-selection');
const dropdownSelectionItem = document.querySelectorAll('.dropdown-item');
dropdownSelection.addEventListener('click', ()=>{
    for (let i in dropdownSelectionItem) {
        if(typeof(dropdownSelectionItem[i]) == 'object') {
            dropdownSelectionItem[i].addEventListener('click', ()=> {
                if(dropdownSelectionItem[i].value == '13'){
                    dropdownSelection.textContent =  dropdownSelectionItem[i].textContent;
                } else {
                    dropdownSelection.textContent =  `Carência de ${dropdownSelectionItem[i].value} meses`;
                }
            });
        }
    }
})
