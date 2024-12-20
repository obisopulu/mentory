import Svg, { G, Path } from 'react-native-svg';

interface WeatherUnint {
  unit: string
}

const TempInFahrenheit = ({unit}: WeatherUnint) => {
  return(
    <Svg fill="#000000" height="64px" width="24px"  viewBox="0 0 32 32" >
      <G id="SVGRepo_bgCarrier" strokeWidth="0"></G>
      <G id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></G>
      <G id="SVGRepo_iconCarrier"> 
        <G> 
          <Path d="M5.5,2C3.6,2,2,3.6,2,5.5S3.6,9,5.5,9S9,7.4,9,5.5S7.4,2,5.5,2z M5.5,7C4.7,7,4,6.3,4,5.5S4.7,4,5.5,4S7,4.7,7,5.5 S6.3,7,5.5,7z"></Path> 
          {unit == 'f' ? 
            <Path d="M29,2H12c-0.6,0-1,0.4-1,1v26c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1v-9h9c0.6,0,1-0.4,1-1v-4c0-0.6-0.4-1-1-1h-9V8h12 c0.6,0,1-0.4,1-1V3C30,2.4,29.6,2,29,2z"></Path> 
          :
            <Path d="M26.7,23.3c-0.3-0.3-0.8-0.4-1.2-0.2C24.5,23.7,23.2,24,22,24c-4.4,0-8-3.6-8-8s3.6-8,8-8c1.2,0,2.5,0.3,3.6,0.9 C26,9.1,26.4,9,26.7,8.7l2.9-2.9C29.9,5.5,30,5.2,30,4.9c0-0.3-0.2-0.6-0.5-0.7C27.2,2.8,24.7,2,22,2C14.3,2,8,8.3,8,16 s6.3,14,14,14c2.7,0,5.2-0.8,7.5-2.2c0.3-0.2,0.4-0.4,0.5-0.7c0-0.3-0.1-0.6-0.3-0.8L26.7,23.3z"></Path> 
          }
          
        </G> 
      </G>
    </Svg>
  )
}

export default TempInFahrenheit;
