

// nullable type   /


const searchName = (value: string)=>{
    if (value) {
        console.log('Searching....');
    } else {
        console.log('there is nothing to search...');
    }
}



// searchName(null) 



// unknown type 

const getSpeedInMeterPerSecond = (value: unknown) => {
    
    if (typeof value === 'number') {
        const convertedSpeed = (value * 1000)/3600;

        console.log(`The speed is ${convertedSpeed}`);
    }
}


getSpeedInMeterPerSecond(300)