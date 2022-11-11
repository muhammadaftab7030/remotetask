import React, { useState } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../Context/context';

const InputData = () => {
    let {getValue} = useGlobalContext();
    let [inputValue, setinputValue] = useState('');
    let inputFieldHandler = (e)=>{
        setinputValue(e.target.value);
    }
  return (
   <React.Fragment>
   <Wrapper>
    <h1 className='header'>Enter Your Name and Get Your Nationality On Button Click</h1>
    <form>
    <input className='w-100' type="text"  onChange={inputFieldHandler} />
    <button className='w-100 btn-color' type="button" onClick={(e)=>getValue(e,inputValue)}>GET NATIONALITY</button>
    </form>
   </Wrapper>
   </React.Fragment> 
  )
}
let Wrapper = styled.section`
    width: 50%;
    margin: 20px auto;
    
    .header{
        color: ${({theme})=>theme.header_color} 
    }
    .btn-color{
        background: ${({theme})=>theme.btn_color};
        color: #FFFF;
        border: none;
        transition: background 2sg;
        &:hover{
            cursor: pointer;
            background: #023e8a;
        }
    }
    .w-100{
        width: 100%;
        margin: 10px 0px;
        padding: 10px;
        font-size: 20px
    }

`
export default InputData