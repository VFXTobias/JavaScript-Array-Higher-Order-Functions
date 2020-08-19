
// Functions Section

function createCompany(name, category, startDate, endDate) {
    return {
        name,
        category,
        startDate,
        endDate
    };
}

// Variable Declarations

const companies =[]; //We're just 'hoisting' or instantiating the array of 'companies' so we can populate it using our own function 'createCompany'.


// Callbacks & other actions:

//Here we're just going to push company objects into our 'companies' array by using the function we created at the top called 'createCompany'.

companies.push(createCompany('Acme', 'Textile', 1990, 2000));
companies.push(createCompany('Udemy', 'Education', 2010, 2020));
companies.push(createCompany('BlockBuster Video', 'Video', 1980, 2006));
companies.push(createCompany('KMart', 'Retail', 1972, 2018));
companies.push(createCompany('Waldos', 'Retail', 2001, 2018));

// General Logging: 

console.log (companies);

// **********forEach**********

// ES5 method - not inline function. Syncronous method.
// The 'company' variable shown below can be called whatever you want to call it. It is an iterator variable that represents the a single object inside the targeted array and is only scopped in this statement.

    companies.forEach(function(company){
    console.log(company); //This returns the entire object inside that array.  Optionally you could explicitly ask for 'company.name' and get just a list of the names from the objects in the companies array.
});





// **********filter**********

// ES5 method - not inline function. Syncronous method.
// The 'company' variable shown below can be called whatever you want to call it. It is an iterator variable that represents a single object inside the targeted array and is only scopped in this statement.

//Let's filter the companies in the array by their starDate on or after 2000.

// const millenialComp = companies.filter(function(company){
//     if (company.startDate >= 2000){
//         return true;
//     }
// });

// Modern ES6 arrow function method:

const millenialComp = companies.filter(company => company.startDate >= 2000);

console.log(millenialComp);

//Let's filter the companies again and look for the category of 'Retail'. ES6 arrow function method.

const retailComp = companies.filter(company => company.category =='Retail');

console.log(retailComp);

//Let's try filtering our companies by those that lasted 10 years or less. ES6 arrow function method.

const lastedTenYears = companies.filter(company => (company.endDate - company.startDate <=10));

console.log(lastedTenYears);

// **********map**********

// Let's create an array of just the company names. ES5 method.

const companyNames = companies.map(function(company){
    return company.name;
});

console.log(companyNames);

//Let's try returning a string of just the company name along with their start to end dates.

//ES5 method: 

// const companyDates = companies.map(function (company) {
//     return `${company.name} [${company.startDate} - ${company.endDate}]`;
// });

//ES6 arrow function method :

 const companyDates = companies.map(company => `${company.name} [${company.startDate} - ${company.endDate}]`);

console.log (companyDates);

// **********sort**********

//Let's sort the companies by their startDate. ES5 method.

// const sortedCompanies = companies.sort(function(company1, company2){
//     if (company1.startDate > company2.startDate){
//         return 1; //This return of '1' translates to 'True'.
//     }else{
//         return -1;//This return of '-1' translates to 'False'.
//     }
// });

//ES6 arrow function method.

const sortedCompanies = companies.sort((company1, company2) => (company1.startDate > company2.startDate ? 1 : -1));

//The '?' syntax in the above statement is called a ternary operator.  Think of this as a shorthand for the 'if/else' instruction.  'If the conditional is true then return 1.  Else return -1.  The separator of ':' is used to differentiate between the 'If' and the 'Else'.  These get translated as 'true' or 'false'.

console.log(sortedCompanies);


// *********reduce**********

//For this method let's create a new array of just numbers to better illustrate the concept.

const scores = [5,8,4,9,12,15,17,6,3];

//Now let's get a sum of the scores using the ES5 for loop method (yuk!)

// let scoresSum = 0;
// for(let i=0; i <scores.length; i++){
//     scoresSum += scores[i];
// }

//Now let's get this done using REDUCE. The ES5 method.

// const scoresSum = scores.reduce(function(total, score){
//     return total + score;
// }, 0);

// ES6 arrow function method.

const scoresSum = scores.reduce((total, score) => total + score);

//Please note that there is an optional variable in the reduce method where you can indicate '0' as the last parameter so that the summing begins at '0'.  However, this seems to be unnecessary in this particular case.  Just keep it in mind though. You can see it used in the above ES5 method.

console.log(scoresSum);

//Let's try REDUCE on our companies array to get the total years. Note that in this case we DO need to add the additional parameter of '0' at the end of our statement. Here is the ES5 method.

// const totalYears = companies.reduce(function(total, company){
//     return total + (company.endDate - company.startDate);
// }, 0);

//ES6 arrow function method.

const totalYears = companies.reduce((total, company) => total + (company.endDate - company.startDate), 0);

console.log(totalYears);