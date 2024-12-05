import Svg, { G, Path } from 'react-native-svg';

const TempInFahrenheit = () => {
  return(
    <Svg fill="#000000" height="64px" width="24px"  viewBox="0 0 32 32" >
      <G id="SVGRepo_bgCarrier" strokeWidth="0"></G>
      <G id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></G>
      <G id="SVGRepo_iconCarrier"> 
        <G> 
          <Path d="M5.5,2C3.6,2,2,3.6,2,5.5S3.6,9,5.5,9S9,7.4,9,5.5S7.4,2,5.5,2z M5.5,7C4.7,7,4,6.3,4,5.5S4.7,4,5.5,4S7,4.7,7,5.5 S6.3,7,5.5,7z"></Path> 
          <Path d="M29,2H12c-0.6,0-1,0.4-1,1v26c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1v-9h9c0.6,0,1-0.4,1-1v-4c0-0.6-0.4-1-1-1h-9V8h12 c0.6,0,1-0.4,1-1V3C30,2.4,29.6,2,29,2z"></Path> 
        </G> 
      </G>
    </Svg>
  )
}

export default TempInFahrenheit;
