const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1
const getMyTaxes = function(salary) {
    return salary * this.tax;
}
const myTaxes = getMyTaxes.call(ukraine, 10000);
console.log('------1------');
console.log('myTaxes:', myTaxes);

//2
const getMiddletaxes = function(){
    return this.tax * this.middleSalary;
};
console.log('------2-----');
const middleTaxes = getMiddletaxes.call(litva);
console.log('middle:', middleTaxes);

//3
const getTotalTaxes = function(){
    // return this.tax * this.middleSalary * this.vacancies; //4003459.98
    return Object.values(this).reduce((acc, cur) => acc * cur); //4003459.98
};
console.log('------3------');
const totalTaxes = getTotalTaxes.call(ukraine);
console.log('total', totalTaxes);

//4
const generateRandom = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
};
const getMySalary = function(country){    
    const report = setInterval(() => {
        const salary = generateRandom(1500, 2000);
        const taxes = country.tax;
        const profit = salary-taxes;
        console.log({salary, taxes, profit});
    }, 10000);
    //this is just in case you forgot to close the page, it will stop the interval execution
    setTimeout(() => {
        clearInterval(report);
        alert('auto-stop to dont waste your memory :) ')
    }, 60000)
};

getMySalary(ukraine);