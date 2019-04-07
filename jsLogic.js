console.log('running js script');
for (let i = 1; i < 17; i++) {
   
    let output = '';
    if(i % 3 === 0){output += 'Fizz'}
    if(i % 5 === 0){output += 'Buzz'}

    if(output == ''){output = i}
    // console.log(output);
}
let sensors =[
    {
        timestamp: "2019-03-07T19:14:30Z",
        sensor: "Sensor 1",
        people: 0
    },
    {
        timestamp: "2019-03-07T19:19:35Z",
        sensor: "Sensor 2",
        people: 0
    },
    {
        timestamp: "2019-03-07T19:24:43Z",
        sensor: "Sensor 1",
        people: 0
    },
    {
        timestamp: "2019-03-07T19:29:49Z",
        sensor: "Sensor 2",
        people: 0
    }
];
  sensors.sort((a,b) => {

    a = a.sensor;
    b = b.sensor;
    return a<b ? -1 : a>b ? 1 : 0;
})

console.log('sorted sensors', sensors);

  

