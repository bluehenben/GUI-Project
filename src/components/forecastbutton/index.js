// import preact
import { h, render, Component } from 'preact';
// import forecast button icon
import hourlyforecast_image from '../../assets/icons/hourlyforecast.png';
// import styles
import style_forecastbutton from './style_forecastbutton';

// this component is used to view the 10-hour forecast page 
export default class ForecastButton extends Component {
  render() {
    return (
      <div id="forecast" style="float:left">
        <div class={style_forecastbutton}>
          <img src={hourlyforecast_image}/>
        </div>
      </div>
    );
  }
}
