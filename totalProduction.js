//assume that no_of_sheds is an object of key value  pairs example: {A: 510, B: 308, C: 486, D: 572};
function totalProduction(no_of_sheds){
    let total_production=0;
        for(shed in no_of_sheds){
            console.log(`Your production in Shed ${shed} ${no_of_sheds[shed]} litres per day`);
            total_production = total_production + no_of_sheds[shed];
        }
        console.log(`The total production is ${total_production} litres per day`);
    }
    const shedData={A: 510, B: 308, C: 486, D: 572};
    totalProduction(shedData)
