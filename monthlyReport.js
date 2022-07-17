//assume that no_of_months is an object of key value  pairs example: {January: 31, February: 29, March: 31, April: 30};
function monthlyReport(selling_price, no_of_months){
	for(month in no_of_months){
    let income = no_of_months[month] * selling_price;
		console.log(`Your income for ${month} is ${income}.`);
	}
}
const monthData={January: 31, February: 29, March: 31, April: 30, May: 31, June: 30, July: 31, August: 31, September: 30, October: 31, November: 30,December: 31};
const selling_price=45;
monthlyReport(selling_price, monthData);