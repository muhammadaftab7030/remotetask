import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../Context/context'
const Show_Nationality = () => {
    let {country, isLoading} = useGlobalContext();
    if(isLoading){
        return (
            <React.Fragment>
            <Wrapper>
            <h1 style={{textAlign: 'center'}}>Loading...</h1>
            </Wrapper>
            </React.Fragment>
        )
    }else{
        let maxi=Math.max(...country.map(o => o.probability));
        let filteredNationality = country.filter((elem)=>elem.probability === maxi? elem.country_id:null)
  return (
    <React.Fragment>
    <Wrapper>
    <h1>Your Nationality is: {
        filteredNationality.map((elem)=> elem.country_id)
    }</h1>
    </Wrapper>
    </React.Fragment>   
  )
}
}
let Wrapper = styled.section`
    width: 50%;
    margin: 20px auto;
    text-align: center;
    .header{
        color: ${({theme})=>theme.header_color} 
    }
    .w-100{
        width: 100%;
    }

`
export default Show_Nationality