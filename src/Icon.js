


export default function Icon(icon){
    switch (icon) {
        case `thunderstorms`:
            icon=`icons/thunderstorms.svg`
            console.log("thunderstorm")
            break;
        case `clear-sky`:
            icon=`icons/clear-sky.svg`
            console.log(`clear-sky`)
            break;
        case `cloudy`:
            icon=`icons/cloudy.svg`
            console.log(`cloudy`)
            break;
        case `haze-day`:
            icon=`icons/haze-day.svg`
            console.log(`fewCloudy`)
            break;
        case `mist`:
            icon=`icons/mist.svg`
            console.log(`mist`)
            break;
        case `overcast`:
            icon=`icons/overcast.svg`
            console.log(`brokenclouds`)
            break;
        case `rain`:
            icon=`icons/rain.svg`
            console.log(`rain`)
            break;
        case `snow`:
            icon=`icons/snow.svg`
            console.log(`snow`)
            break;

        default:
            icon=`icon/clear-sky.svg`
            console.log(`sky`)
    
    }
    return icon
}