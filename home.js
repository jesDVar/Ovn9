let number = 1;

while(number <= 100 )  {
    if( ((number % 3) === 0) && ((number % 4) === 0 ))  {
        console.log('Bish-Bosh');
    }
    else if ((number % 3) === 0)  {
        console.log('Bish');
    }
    else if ((number % 4) === 0)  {
        console.log('Bosh');
    }
        else console.log(number);
        number++;
    }