"use client"
import { ThreeCircles } from  'react-loader-spinner'

const loading = () => {
  return (
<ThreeCircles
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass="position-absolute top-50 start-50 translate-middle"
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor="#0D6EFD"
  innerCircleColor="#0D6EFD"
  middleCircleColor="#0D6EFD"
/>
    )
};

export default loading;
