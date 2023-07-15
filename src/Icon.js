export default function Icon(props) {
  let icon = "";
  switch (props.code) {
    case `hunderstorm`:
      icon = `/icons/thunderstorms.svg`;
      console.log("thunderstorm");
      break;
    case `clear sky`:
      icon = `/icons/clear sky.svg`;
      console.log(`clearsky`);
      break;
    case `few clouds`:
      icon = `/icons/cloudy.svg`;
      console.log(`few clouds`);
      break;
    case `scattered clouds`:
      icon = `/icons/haze-day.svg`;
      console.log(`scattered clouds`);
      break;
    case `mist`:
      icon = `/icons/mist.svg`;
      console.log(`mist`);
      break;
    case `broken clouds`:
      icon = `/icons/overcast.svg`;
      console.log(`brokenclouds`);
      break;
    case `shower rain`:
      icon = `/icons/rain.svg`;
      console.log(`shower rain`);
      break;
    case `snow`:
      icon = `/icons/snow.svg`;
      console.log(`snow`);
      break;
    case `rain`:
      icon = `/icons/partly-cloudy-day-drizzle.svg`;
      console.log(`rain`);
      break;

    default:
      icon = `/icons/clear-sky.svg`;
      console.log(`sky`);
  }
  return <img src={icon} alt={props.code} />;
}