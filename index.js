
let priceArray = [];

const heading1 = document.querySelector('h1');
heading1.textContent = 'Freelancer Forum';

const heading4 = document.querySelector('h4');
heading4.textContent = `The average 
                        starting price is 
                        ${averageStartingPrice() > 0 ? averageStartingPrice() : 0}`;

const heading2 = document.getElementById("freelance-h2");
heading2.textContent = 'Available Freelancers';

 
const namesList = ['Alice', 'Bob', 'Carol', 'Dan', 'Ethan', 'Frank', 'Tom'];
const occupationList = ['Writer', 'Artist', 'Programmer', 'Programmer', 'Teacher', 'Artist', 'Teacher'];
const priceList = [35, 45, 70, 70, 60, 40, 55];


let randomNumList = [];





const setIntervalId = setInterval(addFreeLancers, 2000);

//to show freelancers info

function render(freeLancers) {
  const namesParent = document.querySelector('#names');
  const occupationsParent = document.querySelector('#occupations');
  const priceParent = document.getElementById('price');
  
  
  
  const showFreelancers = freeLancers.map(freelancer => {
    const nameList = document.createElement('li');
    nameList.textContent = freelancer.name;
    
    const occupationList = document.createElement('li');
    occupationList.textContent = freelancer.occupation;

    const priceList = document.createElement('li');
    priceList.textContent = freelancer.price;
   

    namesParent.appendChild(nameList);
    occupationsParent.appendChild(occupationList);
    priceParent.appendChild(priceList);

  });

 console.log('PriceArray:', priceArray);
 heading4.textContent = `The average 
                        starting price is 
                        ${averageStartingPrice() > 0 ? averageStartingPrice() : 0}`;
  return showFreelancers;
  
}


function addFreeLancers() {
  let freeLancers = [];
  //Generate Random Number
  let randomNum = generateRandomNumber();
  let lsitIndex;
  console.log(`randomNum: ${randomNum}`);

  if(!randomNumList.includes(randomNum)) {
      randomNumList.push(randomNum);
      lsitIndex = randomNum
  } 
   
  if(lsitIndex != undefined) {
    
    const name = namesList[lsitIndex];
    const occupation = occupationList[lsitIndex];
    const price = priceList[lsitIndex];

    priceArray.push(price);
    freeLancers.push({ name, occupation, price});
    console.log(`freeLancers: ${JSON.stringify(freeLancers)}`);
    render(freeLancers);
  }
 
  if(randomNumList.length >= 6) {
    clearInterval(setIntervalId);
  }
}

function generateRandomNumber() {
 return (Math.floor(Math.random() * namesList.length)); 
}

function averageStartingPrice() {
  let averagePrice = 0;
  const totalPrice = priceArray.reduce((sum, price) => {
    return (sum + price);
  },0);
  console.log('totalPrice::', totalPrice);
  averagePrice = totalPrice / (priceArray.length);
  return averagePrice;
}