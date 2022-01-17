/**
 * Bish-Bosch 2.0
 * 
 */

//  const maxValue = window.prompt("Enter the highest number with decimals");
//  const Bish = window.prompt("Enter Bish");
//  const Bosh = window.prompt("Enter Bosh");

//  let number = 1;

const bish =document.querySelector('#bish');
const bosh =document.querySelector('#bosh');
const number =document.querySelector('#nrOfTimes');
const output =document.querySelector('#output');
document.querySelector('#run').addEventListener('click', function(){
    let bishNumber = bish.value;
    let boshNumber = bosh.value;
    let nr = number.value;
    console.log(bishNumber, boshNumber, nr);
    bishBosh(bishNumber, boshNumber, nr);
})

function bishBosh(Bish, Bosh, maxValue){
    
  let number = 1;
  let result = '';
    while(number <= maxValue )  {
         if( ((number % Bish) === 0) && ((number % Bosh) === 0 ) && (number > 0))  {
            //  console.log('Bish-Bosh');
            result += 'Bish-Bosh ';
         }
         else if ( ((number % Bish) === 0) && (number > 0))  {
            //  console.log('Bish');
             result += 'Bish ';
         }
         else if ( ((number % Bosh) === 0) && (number > 0))  {
            //  console.log('Bosh');
            result += 'Bosh ';
         }
         else  {
            //  console.log(number);¨
            result += number;
         }
         number++;
     }

     //console.log(output);

     output.innerText = result;

}
 