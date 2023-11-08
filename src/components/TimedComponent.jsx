import { useEffect, useState } from "react";


const MyFuncComp = () => {
  
  const newTimeOut = setTimeout(() => {
    setIsVisible(false);
  }, 5000);
  return () => clearTimeout(newTimeOut);
};



  

const TimedComponent = ({ runMessageTimer, component }) => {
  const [isVisible, setIsVisible] = useState(true);

  

  if (isVisible) {
    return component;
  }
};

export default TimedComponent;
