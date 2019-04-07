console.log('running js script');
for (let i = 1; i < 17; i++) {
   
    let output = '';
    if(i % 3 === 0){output += 'Fizz'}
    if(i % 5 === 0){output += 'Buzz'}

    if(output == ''){output = i}
    console.log(output);
}