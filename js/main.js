import { Financing } from "./financing.js";
import { FinancinGracePeriond } from "./financingGracePeriod.js";

const clacButton = document.querySelector(".clac-button");
const fromFields = document.querySelectorAll(".from-fields");
const tBody = document.querySelector("tbody");
const dropdownSelection = document.querySelector('.dropdown-toggle');

clacButton.addEventListener("click", () => {
  tBody.innerHTML = "";

  let simulation;
  if (
    dropdownSelection.textContent == "Com Carência?" ||
    dropdownSelection.textContent == "Sem Carência"
  ) {
    simulation = new Financing(
      fromFields[0].value,
      fromFields[1].value,
      fromFields[2].value,
      fromFields[3].value
    );
  } else {
    let gracePeriond = dropdownSelection.textContent.replace(
      "Carência de ",
      ""
    );
    gracePeriond = Number(gracePeriond.replace(" meses", ""));
    simulation = new FinancinGracePeriond(
      fromFields[0].value,
      fromFields[1].value,
      fromFields[2].value,
      fromFields[3].value,
      gracePeriond
    );
  }
  simulation.calcMonthlyInstallments();
  simulation.showDeadline();
});
