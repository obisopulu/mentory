import Svg, { Path } from 'react-native-svg';

const WeatherFog = () => {
  return(
    <Svg width="120" height="120" viewBox="0 0 60 60" fill="none">
      <Path d="M52 27.8822C52 31.358 50.729 34.5402 48.6215 37M32.9525 14.568C34.4417 14.0478 36.0445 13.7647 37.7142 13.7647C39.351 13.7647 40.9232 14.0367 42.3877 14.5374M42.3877 14.5374C41.5927 7.48427 35.5397 2 28.1905 2C20.3007 2 13.9047 8.32068 13.9047 16.1176C13.9047 17.8422 14.2176 19.4945 14.7904 21.0222M42.3877 14.5374C44.0952 15.1213 45.6558 16.0162 47 17.1535M14.7904 21.0222C14.1187 20.8918 13.4246 20.8235 12.7143 20.8235C6.79695 20.8235 2 25.564 2 31.4117C2 33.463 2.59025 35.378 3.61205 37M14.7904 21.0222C16.2015 21.296 17.5132 21.8435 18.6667 22.6065" stroke="black" strokeWidth="5" strokeLinejoin="round"/>
      <Path d="M17 52H37" stroke="black" strokeWidth="5" strokeLinejoin="round"/>
      <Path d="M9.5 44.5H24.5M44.5 44.5H34.5" stroke="black" strokeWidth="5" strokeLinejoin="round"/>
      <Path d="M2 37H52" stroke="black" strokeWidth="5" strokeLinejoin="round"/>
    </Svg>

  )
}

export default WeatherFog