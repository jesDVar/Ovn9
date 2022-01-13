let number = 1;

while(number <= 100) {
    if( (number % 3) === 0 )  {
        if( number % 4 === 0 )  {
        console.log('Bish-Bosh');
    }
    console.log('Bish');
}
    else if ( number % 4 === 0 )  {
    console.log('Bosh');
}
number++;
console.log(number);
}
