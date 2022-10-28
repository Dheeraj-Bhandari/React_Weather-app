import React, { useEffect } from 'react'

const Weathercard = ({ tempInfo }) => {

    const [weatherState, setweatherState] = React.useState("");

    const {
        temp, humidity, pressure, weathermood, name, speed, country, sunset

    } = tempInfo;

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Cloud": setweatherState("wi-day-cloudy")

                    break;
                case "Haze": setweatherState("wi-fog")

                    break;
                case "Clear": setweatherState("wi-day-sunny")

                    break;
                case "Mist": setweatherState("wi-dust")

                    break;

                default:
                    setweatherState("wi-day-sunny")
                    break;
            }
        }
    }, [weathermood])

    // convert time of sunset

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`
    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                    {/* <i className="wi wi-day-sunny"></i> */}

                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">{name}, {country}</div>

                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>

                {/* 4 col section */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className="wi wi-sunset"></i>
                            </p>
                            <p className="extra-info-leftside">{timeStr}<br />Sunset</p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className="wi wi-humidity"></i>
                            </p>
                            <p className="extra-info-leftside">{humidity} <br />humidity</p>
                        </div>


                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p><i className="wi wi-rain"></i>
                            </p>
                            <p className="extra-info-leftside">{pressure} <br />rain</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className="wi wi-strong-wind"></i>
                            </p>
                            <p className="extra-info-leftside">{speed}<br />wind</p>
                        </div>
                    </div>
                    <div id='madewithlove'>

                        <p >Made with <span>❤</span> by Dheeraj</p>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Weathercard