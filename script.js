var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const d1= new Date(date1);
	const d2= new Date(date2);

	const utc1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
	const utc2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());

	const dif = utc2 - utc1;
 
	const ms = 24*60*60*1000;

	return dif/ms;
	
};  
 
// Do not change the code below.

const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
