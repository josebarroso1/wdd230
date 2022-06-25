const requestURL= 'data.json';
const cards = document.querySelector('.companies');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });

  function displayCompanies(companie) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let nameC = document.createElement('h2');
    let logoC = document.createElement('img');
    let adressC = document.createElement("p");
    let phoneC = document.createElement("p");
    let websiteC = document.createElement("a");
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    nameC.textContent = companie.name;
    adressC.textContent = companie.adress;

    // Change the textContent property of the p element to contain the prophet's date and place birth
    phoneC.textContent = `contact: ${companie.number}`;   
    websiteC.setAttribute('href', companie.website);
    websiteC.textContent = companie.website;
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logoC.setAttribute('src', companie.imageurl);
    logoC.setAttribute('alt', `Logo of ${companie.name}`);
    logoC.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(logoC);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

var special = ['th','st', 'nd', 'rd', 'th'];

function ordinal(n) {
return special[n];
}