import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Show_Nationality from './Show_Nationality';
const InputData = () => {
    let [input, setinput] = useState('');
    let inputHandler=(e)=>{
        setinput(e.target.value);
    }
   
    let [apiData,setapiData] = useState([]);

    let getApiData= async()=>{
        let res = await fetch(`https://api.nationalize.io/?name=${input}`);
        let response = await res.json();
        setapiData(response.country)
        console.log(response.country)
    }

    useEffect(()=>{
        getApiData();
    },[input])
    let [filteredData,setfilteredData]= useState([]);
    let show_data=()=>{
        
        alert(input);

        let updated=apiData.filter((elem, index)=>{
               return elem.country_id === 'NG' 
        })
        setfilteredData(updated);
        console.log(updated);
    }
  return (
    <React.Fragment>
        <div className='container'>
        <div className='row'>
        <h1 className='my-5 text-center'>Get The Nationality by your name</h1>
        <div className='col-10 col-sm-6 col-md-6 col-lg-6 col-xl-6 mx-auto text-center'>
        <input type="text" className='form-control' onChange={inputHandler} value={input} />
        <button className='btn btn-primary' onClick={show_data}>Get Nationality</button>
        {/*
            apiData.map((elem,index)=>{
                return (
                    <React.Fragment key={index}>
                    <div><h1>Your Nationality is: {elem.country_id}</h1></div>
                    </React.Fragment>
                )
            })
        */}
        <Show_Nationality data = {filteredData} />
        </div>
        </div>
        </div>

    </React.Fragment>
    
  )
}

export default InputData