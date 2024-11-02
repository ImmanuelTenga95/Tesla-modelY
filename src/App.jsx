import { useEffect, useState, useReducer } from "react";
import NavBar from "./components/NavBar";
import Logo from "./assets/images/logo.svg";

import interiorBtnDark from "./assets/images/button-dark.avif";
import interiorBtnLight from "./assets/images/button-light.avif";

import interiorDarkImg from "./assets/images/model-y-interior-dark.jpg";
import interiorLightImg from "./assets/images/model-y-interior-light.jpg";

import solidBlack from "./assets/images/button-solid-black.avif";
import pearlWhite from "./assets/images/button-pearl-white.avif";
import deepBlue from "./assets/images/button-deep-blue-metallic.avif";
import stealthGrey from "./assets/images/button-stealth-grey.avif";
import ultraRed from "./assets/images/button-ultra-red.avif";
import quickSilver from "./assets/images/button-quicksilver.avif";

import solidBlackImg from "./assets/images/model-y-solid-black.jpg";
import pearlWhiteImg from "./assets/images/model-y-pearl-white.jpg";
import deepBlueImg from "./assets/images/model-y-deep-blue-metallic.jpg";
import stealthGreyImg from "./assets/images/model-y-stealth-grey.jpg";
import ultraRedImg from "./assets/images/model-y-ultra-red.jpg";
import quickSilverImg from "./assets/images/model-y-quicksilver.jpg";
//Performance
import performanceSolidBlackImg from "./assets/images/model-y-solid-black-performance.jpg";
import performancePearlWhiteImg from "./assets/images/model-y-pearl-white-performance.jpg";
import performanceDeepBlueImg from "./assets/images/model-y-deep-blue-metallic-performance.jpg";
import performanceStealthGreyImg from "./assets/images/model-y-stealth-grey-performance.jpg";
import performanceUltraRedImg from "./assets/images/model-y-ultra-red-performance.jpg";
import performanceQuickSilverImg from "./assets/images/model-y-quicksilver-performance.jpg";
import PaymentEstimate from "./components/PaymentEstimate";
import Accessories from "./components/Accessories";
import ChoiceButton from "./components/ChoiceButton";


const initialStates = {
  standardWheels: true, 
  performanceWheels: false,
  addPrice:false,
}

const ACTIONS = {
  STARNDARD: "Starndard",
  PERFORMANCE: "Perfomance",
}

const reducer =(state, action)=>{
  switch(action.type){
    case ACTIONS.STARNDARD:
      return {...state, standardWheels: true, performanceWheels:false};
    case ACTIONS.PERFORMANCE:
      return {...state, performanceWheels: true, standardWheels: false};
    default:
      return state;
  }
}

function App() {

  
  const [exteriorBtn, setExteriorBtn] = useState(solidBlackImg);
  const [interiorBtn, setInteriorBtn] = useState(interiorDarkImg);

  const [exteriorBorder, setExteriorBorder] = useState(solidBlack);

  const [interiorBorder, setInteriorBorder] = useState(interiorBtnDark);

  const [state, dispatch] = useReducer(reducer, initialStates)
  

  const [keyPerf, setKeyPerf] = useState("solidBlack");

  const [wheelPrice, setIswheelPrice] = useState(0)

  const [performanceUpgradePrice, setPerformanceUpgradePrice] = useState(0)
  const [performanceUpgrade, setPerformanceUpgrade] = useState(false)

  const [isFullDriving, setIsFullDriving] = useState(false)
  const [fullDrivingPrice, setFullDrivingPrice] = useState(0)


  const [isCenterConsoleTrays, setIsCenterConsoleTrays] = useState(false)
  const [isSunshade, setIsSunshade] = useState(false)
  const [isAllWheelInteriorLiners, setIsAllWheelInteriorLiners] = useState(false)

  const [centerConsoleTrays, setCenterConsoleTrays] = useState(0)
  const [sunshade, setSunshade] = useState(0)
  const [allWheelInteriorLiners, setAllWheelInteriorLiners] = useState(0)


  
  let totalPrice = 52490;

  const subTotal = (totalPrice + wheelPrice + performanceUpgradePrice + fullDrivingPrice +centerConsoleTrays + sunshade + allWheelInteriorLiners)
  const interestRate = 3;
  const loanAmount = subTotal - 6000;
  const monthlyInterestRate = (interestRate / 100) / 12;
  const n = 60;

  const monthlyPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, n)) /
            (Math.pow(1 + monthlyInterestRate, n) - 1);


  const exteriorImages =
    state.standardWheels == true
      ? {
          solidBlack: solidBlackImg,
          pearlWhite: pearlWhiteImg,
          deepBlue: deepBlueImg,
          stealthGrey: stealthGreyImg,
          ultraRed: ultraRedImg,
          quickSilver: quickSilverImg,
        }
      : {
          solidBlack: performanceSolidBlackImg,
          pearlWhite: performancePearlWhiteImg,
          deepBlue: performanceDeepBlueImg,
          stealthGrey: performanceStealthGreyImg,
          ultraRed: performanceUltraRedImg,
          quickSilver: performanceQuickSilverImg,
        };

  const interiorImages = {
    interiorBtnDark: interiorDarkImg,
    interiorBtnLight: interiorLightImg,
  };

  //Interior Image source object
  const ButtonsinteriorBtn = {
    interiorBtnDark,
    interiorBtnLight,
  };

  //Exterior Image source object
  const ButtonsImg = {
    solidBlack,
    pearlWhite,
    deepBlue,
    stealthGrey,
    ultraRed,
    quickSilver,
  };

  const handleExteriorClick = (e, key, imgSrc) => {
    e.preventDefault()
    const imageSelected = exteriorImages[key];
    setExteriorBtn(imageSelected);
    setExteriorBorder(imgSrc);
    setKeyPerf(key);
  };

  const handleInteriorClick = (e, key, imgSrc) => {
    e.preventDefault()
    const imageSelected = interiorImages[key];
    setInteriorBtn(imageSelected);
    setInteriorBorder(imgSrc);
  };

  const handleStarndardWheels = () => {
    
    dispatch({type: ACTIONS.STARNDARD})
    setIswheelPrice(prev=>{
      return 0;
    })
  };

  const handlePerformanceWheels = () => {
    
    dispatch({type: ACTIONS.PERFORMANCE})
    setIswheelPrice(prev=>{
      return 2500;
    })
  };


  const handlePerformanceUpgrade = () => {
    setPerformanceUpgrade(prevUpgrade => {
      const newUpgrade = !prevUpgrade; 
      setPerformanceUpgradePrice(newUpgrade ? 5000 : 0);
      return newUpgrade; 
    });
  };

  const handleSelfDriving = (e) => {
    setIsFullDriving(prev =>{
      const newDrivingState = !prev;
      setFullDrivingPrice(newDrivingState? 8500: 0);
      return newDrivingState;
    });
    
  };

  
  const handleCenterConsoleType =(e)=>{
    
    setIsCenterConsoleTrays(prev=>{
      const newState = !prev
      setCenterConsoleTrays(newState? 35: 0)
      return newState;
    })
  }

  const handleSunshade =(e)=>{
    
    setIsSunshade(prev=>{
      const newState = !prev
      setSunshade(newState ? 105: 0)
      return newState;
    })
  }

  const handleAllWheelInteriorLiners =(e)=>{
    
    setIsAllWheelInteriorLiners(prev=>{
      const newState = !prev
      setAllWheelInteriorLiners(newState? 225: 0)
      return newState;
    })
  }

  useEffect(() => {
    setExteriorBtn(exteriorImages[keyPerf]);
  }, [state.performanceWheels, state.standardWheels]);

  return (
    <div className="w-full ">
      <NavBar />
      <div className="w-full px-2 md:px-8">
        <div className="w-full flex justify-between items-center py-2">
          <img src={Logo} width={80} />
          <button className="font-bold">US</button>
        </div>
        <div className="w-full md:flex md:space-x-4">
          <div className="w-full md:w-3/5 ">
            <div className="w-full">
              <img src={exteriorBtn} className="w-full h-auto" />
            </div>
            <div className="w-full">
              <img src={interiorBtn} className="w-full h-auto md:h-80" />
            </div>
          </div>
          <div className="w-full md:w-2/5 p-4 ">
            <div className="w-full text-center mb-8">
              <p className="text-lg md:text-5xl font-bold mb-3">Mondel Y</p>
              <p className="italic">Customize Your Car</p>
            </div>
            <div className="w-full mb-8">
              <p className="font-bold text-md mb-3">Exterior Color</p>
              <div className="w-full flex gap-2">
                {Object.entries(ButtonsImg).map(([key, imgSrc]) => (
                  <button
                    key={key}
                    onClick={(e) => handleExteriorClick(e, key, imgSrc)}
                    className={`${
                      exteriorBorder == imgSrc
                        ? "transform scale-125 p-1 border-2 rounded-full"
                        : ""
                    } transition-transform duration-300 ease-in-out`}
                  >
                    <img
                      src={imgSrc}
                      alt={key}
                      width={40}
                      height={40}
                      
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full mb-8">
              <p className="font-bold text-md mb-3">Interior Color</p>
              <div className="w-full flex gap-2">
                {Object.entries(ButtonsinteriorBtn).map(([key, imgSrc]) => (
                  <button
                    key={key}
                    onClick={(e) => handleInteriorClick(e, key, imgSrc)}
                    className={`${
                      interiorBorder == imgSrc
                        ? "transform scale-125 p-1 border-2 rounded-full"
                        : ""
                    } transition-transform duration-300 ease-in-out`}
                  >
                    <img
                      src={imgSrc}
                      alt={key}
                      width={40}
                      height={40}
                      
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full mb-8">
              <p className="text-md font-bold mb-3">Wheels</p>
              <ChoiceButton state={state.standardWheels} handleOnclick={handleStarndardWheels} type="Standard Wheels"/>

              <ChoiceButton state={state.performanceWheels} handleOnclick={handlePerformanceWheels} type="Perfomance Wheels (+$2,500)"/>
              
            </div>
            <div className="w-full mb-8">
              <div className={`${isFullDriving? 'border-blue-300 bg-blue-100' : ''} w-full border rounded-md p-2 md:p-4`}>
                <p className="font-bold mb-3">Full Self-Driving</p>
                <div className="w-full flex items-center">
                  <input
                    type="checkbox"
                    className="me-2"
                    onChange={(e) => handleSelfDriving(e)}
                  />
                  <p>Add full Self-Driving for $8,500</p>
                </div>
              </div>
            </div>
            <div className="w-full mb-4">
              <p className="font-bold mb-3">Perfomance package</p>
              
              <ChoiceButton state={performanceUpgrade} handleOnclick={handlePerformanceUpgrade} type="Perfomance Upgrade (+$5,000)"/>
              
            </div>
            <div className="w-full">
              <p className="font-bold mb-3">Accessories</p>
              <Accessories state={isCenterConsoleTrays} handleOnChange={handleCenterConsoleType} title="Center Console Trays" price={35}/>
              <Accessories state={isSunshade} handleOnChange={handleSunshade} title="Sunshade" price={105}/>
              <Accessories state={isAllWheelInteriorLiners} handleOnChange={handleAllWheelInteriorLiners} title="All-Wheel Interior Liners" price={225}/>
              
              <div className="w-full mb-3">
                <p className="font-semibold ">Total Price</p>
                <p className="font-bold text-xl pb-3 border-b">
                  ${((totalPrice + wheelPrice + performanceUpgradePrice + fullDrivingPrice +centerConsoleTrays + sunshade + allWheelInteriorLiners).toFixed(2)).toLocaleString()}
                </p>
              </div>
              <PaymentEstimate monthlyPayment={monthlyPayment} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
