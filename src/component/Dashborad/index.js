import React, { useState, useEffect } from 'react';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Button from '@mui/material/Button';
import "./index.css"

const chart1Data =[
  [{title:"EMA(20)", value:22074.34,id:1},
  {title:"SMA(20)", value:22164.35,id:2},
  {title:"Rst(14)", value:41.60,id:3},
  {title:"Awesome", value:-18.68,id:4},
  {title:"Macd(12,26,9)", value:22074.34,id:5},
  {title:"EMA(20)", value:22074.34,id:6},  ],
  [
    {title:"S1", value:22074.34,id:1},
    {title:"S2", value:22074.34,id:2},
    {title:"S3", value:22074.34,id:3},
    {title:"R1", value:22074.34,id:4},
    {title:"R2", value:22074.34,id:5},
    {title:"R3", value:22074.3,id:6},
  ],
  [
    {title:"EMA(5)", value:21934.32,prefix:"S",id:1},
    {title:"SMA(5)", value:21962.31,prefix:"S",id:2}
  ],
  [
    {title:"RSI(14)", value:21934.32,prefix:"N",id:1},
    {title:"Stock %K(14,3,3)", value:21962.31,prefix:"N",id:2}
  ]
]

const StockChart = () => {
  const [volume, setVolume] = useState(15); // Initial value
  const [value2, setValue2] = useState(25); // Initial value
  const [value3, setValue3] = useState(35); // Initial value
  const [value4, setValue4] = useState(10); // Initial value
  return (
    <div className="stock-dashboard">
      <div className="dashboard-header">
        <div className="logo">
          <img src="https://i.ibb.co/2MZwyr8/Zerodha-Logo-1.png" alt="Zerodha Logo" className='zerodhalogo'/> {/* Assuming you have a Zerodha logo */}
        </div>
       
      </div>


     <div className="onlyDashboard">
     <div className="chart-container">
        <div className="chart-data">
          <div className='Nifty-50-heading'>
            <div className='nselogodiv'>
            <img src="https://i.ibb.co/N9cY3dv/NSE-logo.png" alt="nselogo" className='nselogoimg'/>
            <h4>NIFTY 50</h4>
         
            </div>
          <div className="current-price">
            <span><FaIndianRupeeSign/> 21,358.80</span>
           <div className='downgrade'>
           <FaArrowDown/>
            <span>(-9.98%)</span>
           </div>
          </div>
          </div>
          <div className="time-frame">
          <Button variant="outlined" size="small" className="timebutton">
          5min
        </Button>
        <Button variant="outlined" size="small" className="timebutton">
          10min
        </Button>
        <Button variant="outlined" size="small" className="timebutton">
          15min
        </Button>
        <Button variant="outlined" size="small" className="timebutton">
          30min
        </Button>
        <Button variant="outlined" size="small" className="timebutton" m="10px">
          hour
        </Button>
        <Button variant="contained" size="small" className="timebutton" >
          1 Day
        </Button>
          </div>
        </div>
        
      </div>
   <div className='main-graph-container'>
   <div className="market-summary">
        <div className="graph-header">
        <h4>Summary</h4>
          <IoIosInformationCircleOutline/>
        </div>
        <div className='graph-1-container'>
     <input
        type="range"
        id="volume"
        name="volume"
        min="0"
        max="100"
        value={volume} // Set the value based on state
        readOnly
        style={{
          background: 'transparent',
          color: 'transparent',
          outline: 'none',
          appearance: 'none',
          cursor: 'pointer',
         
        }}
        className='Slider'
      />


     </div>
     <div className='Graph-values'>
      <div className='graph-1-subvalue-div bg-primary'>

      <p className='red'><span className='black'>14</span> <br/>Bearish</p>
      </div>
      <div className='graph-1-subvalue-div'>
    
      <p><span className='black'>8</span> <br/>Neutral</p>
      </div>
      <div className='graph-1-subvalue-div'>
        
      <p className='green'><span className='black'>5</span> <br/> Bullish</p>
      </div>
     </div>
     <div className='bottom-values'>
      <ul className='unordered-list'>
        {chart1Data[0].map((each)=>(
          <li className='Eachlist' key={each.id}>
            <p className='textbold'>{each.value}</p>
            <p className='textvalue'>{each.title}</p>
          </li>
        ))}
      </ul>
     </div>
      </div>


      <div className="market-summary">
        
        <div className="graph-header">
        <h4>Support & Resistance</h4>
          <IoIosInformationCircleOutline/>
        </div>
        <div className='graph-2-container'>
     <input
        type="range"
        id="volume"
        name="volume"
        min="0"
        max="100"
        value={value2} // Set the value based on state
        readOnly
        style={{
          background: 'transparent',
          color: 'transparent',
          outline: 'none',
          appearance: 'none',
          cursor: 'pointer',
         
        }}
        className='Slider'
      />


     </div>
    
     <div className='bottom-values'>
      <ul className='unordered-list'>
        {chart1Data[1].map((each)=>(
          <li className='Eachlist' key={each.id}>
            <p className='textbold'>{each.value}</p>
            <p className='textvalue'>{each.title}</p>
          </li>
        ))}
      </ul>
     </div>
      </div>

      
      <div className="market-summary">
       
        <div className="graph-header">
        <h4>Moving Averages</h4>
          <IoIosInformationCircleOutline/>
        </div>
        <div className='graph-3-container'>
     <input
        type="range"
        id="volume"
        name="volume"
        min="0"
        max="100"
        value={value3} // Set the value based on state
        readOnly
        style={{
          background: 'transparent',
          color: 'transparent',
          outline: 'none',
          appearance: 'none',
          cursor: 'pointer',
         
        }}
        className='Slider'
      />


     </div>
     <div className='Graph-values'>
      <div className='graph-1-subvalue-div bg-primary'>

      <p className='orange'><span className='black'>11</span> <br/>Bearish</p>
      </div>
      <div className='graph-1-subvalue-div'>
    
      <p><span className='black'>2</span> <br/>Neutral</p>
      </div>
      <div className='graph-1-subvalue-div'>
        
      <p className='blue'><span className='black'>4</span> <br/> Bullish</p>
      </div>
     </div>
     <div className='bottom-values'>
      <ul className='unordered-list bootomul'>
        {chart1Data[2].map((each)=>(
          <li className='bottom-sec-list' key={each.id}>
            <div className='box-1'>
            <p className='prefix-name'>{each.prefix}</p>
            <p className='textbold'>{each.title}</p>
            </div>
            <p className='textbold'>{each.value}</p>
          </li>
        ))}
      </ul>
      <p className='viewDetails'>View Details</p>
     </div>
      </div>
      <div className="market-summary">
        
        <div className="graph-header">
        <h4>Oscillators</h4>
          <IoIosInformationCircleOutline/>
        </div>
        <div className='graph-4-container'>
     <input
        type="range"
        id="volume"
        name="volume"
        min="0"
        max="100"
        value={value4} // Set the value based on state
        readOnly
        style={{
          background: 'transparent',
          color: 'transparent',
          outline: 'none',
          appearance: 'none',
          cursor: 'pointer',
         
        }}
        className='Slider'
      />


     </div>
     <div className='Graph-values'>
      <div className='graph-1-subvalue-div bg-primary'>

      <p className='red'><span className='black'>14</span> <br/>Bearish</p>
      </div>
      <div className='graph-1-subvalue-div'>
    
      <p><span className='black'>8</span> <br/>Neutral</p>
      </div>
      <div className='graph-1-subvalue-div'>
        
      <p className='blue'><span className='black'>5</span> <br/> Bullish</p>
      </div>
     </div>
     <div className='bottom-values'>
     <ul className='unordered-list bootomul'>
        {chart1Data[3].map((each)=>(
          <li className='bottom-sec-list' key={each.id}>
            <div className='box-1'>
            <p className='prefix-name-bottom'>{each.prefix}</p>
            <p className='textbold'>{each.title}</p>
            </div>
            <p className='textbold'>{each.value}</p>
          </li>
        ))}
      </ul>
      <p className='viewDetails'>View Details</p>
     </div>
      </div>
   </div>
     </div>
     <div className="logo-bottom">
          <img src="https://i.ibb.co/2MZwyr8/Zerodha-Logo-1.png" alt="Zerodha Logo" className='zerodhalogo'/> {/* Assuming you have a Zerodha logo */}
        </div>
    </div>
  );
};

export default StockChart;
