let number = 1;

while(number <= 100 )  {
    if( ((number % 3) === 0) && ((number % 4) === 0 ))  {
        console.log('Bish-Bosh');
        // number++;
    }
    else if ((number % 3) === 0)  {
        console.log('Bish');
        // number++;
    }
    else if ((number % 4) === 0)  {
        console.log('Bosh');
        // number++;
    }
        else console.log(number);
        number++;
    }