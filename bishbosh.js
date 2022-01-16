/**
 * Bish-Bosch 2.0
 * 
 */

 const maxValue = window.prompt("Enter the highest number with decimals");
 const Bish = window.prompt("Enter Bish");
 const Bosh = window.prompt("Enter Bosh");

 let number = 1;
 
 while(number <= maxValue )  {
     if( ((number % Bish) === 0) && ((number % Bosh) === 0 ) && (number > 0))  {
         console.log('Bish-Bosh');
     }
     else if ( ((number % Bish) === 0) && (number > 0))  {
         console.log('Bish');
     }
     else if ( ((number % Bosh) === 0) && (number > 0))  {
         console.log('Bosh');
     }
     else  {
         console.log(number);
     }
     number++;
 }