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
    },
    {
        timestamp: "2019-03-07T19:24:43Z",
        sensor: "Sensor 3",
        people: 0
    },
    {
        timestamp: "2019-03-07T19:29:49Z",
        sensor: "Sensor 3",
        people: 0
    }
];

// let fitlerdData = {
//     sensor1: 'sensoor 1 data',
//     sensor2: 'sensor 2 data',
//     sensor3: 'sensor 3 data'
//                     }

  sensors.sort((a,b) => {

    a = a.sensor;
    b = b.sensor;
    return a<b ? -1 : a>b ? 1 : 0;
})

// console.log('sorted sensors', sensors);
// const buildLineSeries = () => {
//     <LineSeries
//         color="red"
//         data={buildData()}
//         />
// }
filterUniqueSensors = (sensors) => {
    let uniqueObject = {};
    for (let name of sensors) {
        uniqueObject[name.sensor] = 1;
    }
    let uniqueArray = [];
    for (let id in uniqueObject) {
        uniqueArray.push(id);
    }
    // console.log(uniqueArray);
    
    return uniqueArray;
}
// const buildData = () => {
let sensorNames = filterUniqueSensors(sensors);
let groupedSensors = []
let fitleredSensorsArray;
for (let name of sensorNames) {
    fitleredSensorsArray = sensors.filter(eachSensor => {
         return eachSensor.sensor === name
         
        })
        
        groupedSensors.push(fitleredSensorsArray)
}
// console.log('grouped by sensor name', groupedSensors);
let newdata = []
groupedSensors.map(batch => {
    console.log('batch', batch);
})
// console.log('new data', newdata);

// }

// render(){
//     return(
//         <XYPlot
//             xType="time"
//             width={300}
//             height={300}>
//             <HorizontalGridLines />
//             {this.buildLineSeries()}
//         </XYPlot>
//     )
// }





  

