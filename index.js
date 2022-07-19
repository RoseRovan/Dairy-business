const inputA = document.getElementById('shedA');
const inputB = document.getElementById('shedB');
const inputC = document.getElementById('shedC');
const inputD = document.getElementById('shedD');
const myContainer = document.getElementById('myContainer')



let weeklyIncomeQ= document.getElementById('output6'); 
let weeklyIncomeQ1= document.getElementById('output7'); 


myContainer.addEventListener('submit', (output)=>{
    output.preventDefault();

    let output1 = document.getElementById('output1');
    const answerA = parseInt(inputA.value);


    let results2 = document.getElementById('output2');
const answerB = parseInt(inputB.value);

let results3 = document.getElementById('output3');
const answerC = parseInt(inputC.value);

let results4 = document.getElementById('output4');
const answerD = parseInt(inputD.value);

    
    output1.innerHTML=`Your production in Shed A ${answerA} litres per day`

    
    output2.innerHTML=`Your production in Shed B ${answerB} litres per day`

    
    output3.innerHTML=`Your production in Shed C ${answerC} litres per day`

        output4.innerHTML=`Your production in Shed D ${answerD} litres per day`


       let answer5 = answerA+answerB+answerC+answerD;
       document.getElementById('output5').innerHTML=`The total production is ${answer5} litres per day`;

       incomeOverTime(answer5, 7);
       incomeOverTimeYear(answer5, 365);
       
        document.getElementById('sum1').style.display='block';
        document.getElementById('sum2').style.display='block';
        document.getElementById('sum3').style.display='block';
        document.getElementById('sum4').style.display='block';


       let January = answer5 * 45 * 31;
       document.getElementById('output8').innerHTML= `Your income for January is ${January}`

       let Feb = answer5 * 45 * 28;
       document.getElementById('output9').innerHTML= `Your income for February is ${Feb}`

       let March = answer5 * 45 * 31;
       document.getElementById('output10').innerHTML= `Your income for March is ${March}`

       let April = answer5 * 45 * 30;
       document.getElementById('output11').innerHTML= `Your income for April is ${April}`

       let May = answer5 * 45 * 31;
       document.getElementById('output12').innerHTML= `Your income for May is ${May}`

       let June = answer5 * 45 * 30;
       document.getElementById('output13').innerHTML= `Your income for June is ${June}`

       let July = answer5 * 45 * 31;
       document.getElementById('output14').innerHTML= `Your income for July is ${July}`

       let August = answer5 * 45 * 31;
       document.getElementById('output15').innerHTML= `Your income for August is ${August}`

       let September = answer5 * 45 * 30;
       document.getElementById('outpu16').innerHTML= `Your income for September is ${September}`

       let October = answer5 * 45 * 31;
       document.getElementById('output17').innerHTML= `Your income for October is ${October}`

       let November = answer5 * 45 * 30;
       document.getElementById('output18').innerHTML= `Your income for November is ${November}`

       let December = answer5 * 45 * 31;
       document.getElementById('output19').innerHTML= `Your income for December is ${December}`


})

function incomeOverTime(totalProduction, time){
    const price = 45;
   let weeklyIncome = (totalProduction * price) * time;
weeklyIncomeQ.innerHTML = `Your weekly income will be Ksh ${weeklyIncome}`

}

function incomeOverTimeYear(totalProduction, time){
    const price = 45;
   let yearlyIncome = (totalProduction * price) * time;
weeklyIncomeQ1.innerHTML = `Your weekly income will be Ksh ${AnnualyIncome}`

}