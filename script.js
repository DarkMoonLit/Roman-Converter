//Create variables
const numInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

//Create object and array for keys in descending order and result empty string
const romanObj = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
};

const numKeys = Object.keys(romanObj).map(Number).sort((a, b) => b - a);
let result = "";

//Add event listener- click
convertBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  isInvalid(numInput.value);

  setTimeout(()=>{
    reset();
  }, 5000);
})

//Add event listener- keydown
numInput.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    isInvalid(numInput.value);
  }
})

//Function for conversion to roman numerals
const intToRoman = (num) => {
  numKeys.forEach((key) => {
    while(num >= key){
    result += romanObj[key];
    num -= key;
    }
  });
  output.textContent = `${result}`;
  output.classList.remove('hidden');
  return result;
}

//Function to check validity of integers
const isInvalid = (num) => {
  if (num === "" || isNaN(num)){
    output.textContent = "Please enter a valid number";
    output.classList.add('error');
    output.classList.remove('hidden');
    return true;
    
  } else if (num <= 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
    output.classList.add('error');
    output.classList.remove('hidden');
    return true;

  } else if (num > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
    output.classList.add('error');
    output.classList.remove('hidden');
    return true;

  } else {
    reset(); 
    intToRoman(num);   
  }
}

//Reset function
const reset = () => {
    output.textContent = "";
    output.classList.add('hidden');
    output.classList.remove('error');
    result = "";
  }





