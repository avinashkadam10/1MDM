import React,{useState, useEffect}from "react";
import "../../App.css";

function Hero() {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);


  useEffect(()=>{
    if(count<26000000){
      const timer = setTimeout(()=>{
        setCount(prev => prev + 100000);
      },10)
      return () =>
        clearTimeout(timer);
    }
  },[count])

  useEffect(()=>{
    if(count1<400000){
      const timer = setTimeout(()=>{
        setCount1(prev => prev + 2000);
      },10)
      return () =>
        clearTimeout(timer);
    }
  },[count1])

  useEffect(()=>{
    if(count2<200){
      const timer = setTimeout(()=>{
        setCount2(prev => prev + 1);
      },10)
      return () =>
        clearTimeout(timer);
    }
  },[count2])


  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row hero-content">
            <div className="col-6">
              <p className="para">Sell on 1mdm.com</p>
              <h1>Reach millions of B2B <br /> buyers globally</h1>
              <div>
                <button className="btn">Start selling</button>
                <button className="btn1">Chat with consultant</button>
              </div>
            </div>
            <div className="col-6 hero-side">
              <p className="para">{count}</p>
              <p>active buyers globally</p>
              <p className="para">{count1}</p>
              <p>product inquiries daily</p>
              <p className="para">{count2}</p>
              <p>countries and regions represented</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
