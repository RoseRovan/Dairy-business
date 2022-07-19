const shedA = document.getElementById("shedA");
const shedB = document.getElementById("shedB");
const shedC = document.getElementById("shedC");
const shedD = document.getElementById("shedD");
const formResults = document.getElementById("formResults");

let weeklyIncomeP = document.getElementById("results6");
let weeklyIncomeP1 = document.getElementById("results7");

formResults.addEventListener("submit", (result) => {
  result.preventDefault();

  let results1 = document.getElementById("results1");
  const answerA = parseInt(shedA.value);

  let results2 = document.getElementById("results2");
  const answerB = parseInt(shedB.value);

  let results3 = document.getElementById("results3");
  const answerC = parseInt(shedC.value);

  let results4 = document.getElementById("results4");
  const answerD = parseInt(shedD.value);

  results1.innerHTML = `Your production in Shed A ${answerA} litres per day`;

  results2.innerHTML = `Your production in Shed B ${answerB} litres per day`;

  results3.innerHTML = `Your production in Shed C ${answerC} litres per day`;

  results4.innerHTML = `Your production in Shed D ${answerD} litres per day`;

  let answer5 = answerA + answerB + answerC + answerD;
  document.getElementById(
    "results5"
  ).innerHTML = `The total production is ${answer5} litres per day`;

  incomeOverTime(answer5, 7);
  incomeOverTimeYear(answer5, 365);

  document.getElementById("sum1").style.display = "block";
  document.getElementById("sum2").style.display = "block";
  document.getElementById("sum3").style.display = "block";
  document.getElementById("sum4").style.display = "block";

  let January = answer5 * 45 * 31;
  document.getElementById(
    "results8"
  ).innerHTML = `Total January income is ${January}`;

  let Feb = answer5 * 45 * 28;
  document.getElementById(
    "results9"
  ).innerHTML = `Total February income is ${Feb}`;

  let March = answer5 * 45 * 31;
  document.getElementById(
    "results10"
  ).innerHTML = `Total March income is ${March}`;

  let April = answer5 * 45 * 30;
  document.getElementById(
    "results11"
  ).innerHTML = `Total April income is ${April}`;

  let May = answer5 * 45 * 31;
  document.getElementById(
    "results12"
  ).innerHTML = `Total May income is ${May}`;

  let June = answer5 * 45 * 30;
  document.getElementById(
    "results13"
  ).innerHTML = `Total June income is ${June}`;

  let July = answer5 * 45 * 31;
  document.getElementById(
    "results14"
  ).innerHTML = `Total July income is ${July}`;

  let August = answer5 * 45 * 31;
  document.getElementById(
    "results15"
  ).innerHTML = `Total August income is ${August}`;

  let September = answer5 * 45 * 30;
  document.getElementById(
    "results16"
  ).innerHTML = `Total September income is ${September}`;

  let October = answer5 * 45 * 31;
  document.getElementById(
    "results17"
  ).innerHTML = `Total October income is ${October}`;

  let November = answer5 * 45 * 30;
  document.getElementById(
    "results18"
  ).innerHTML = `Total November income is ${November}`;

  let December = answer5 * 45 * 31;
  document.getElementById(
    "results19"
  ).innerHTML = `Total December income is ${December}`;
});

function incomeOverTime(totalProduction, time) {
  const price = 45;
  let weeklyIncome = totalProduction * price * time;
  weeklyIncomeP.innerHTML = `Your weekly income will be Ksh ${weeklyIncome}`;
}

function incomeOverTimeYear(totalProduction, time) {
  const price = 45;
  let yearlyIncome = totalProduction * price * time;
  weeklyIncomeP1.innerHTML = `Your weekly income will be Ksh ${yearlyIncome}`;
}