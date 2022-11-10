import React from 'react'

const Show_Nationality = (props) => {
    let data1 = props.data;

  return (
    <React.Fragment>
    
    {
        data1.map((elem,index)=>{
            return (
                <React.Fragment key={index}>
                <div><h1>Your Nationality is: {elem.country_id}</h1></div>
                </React.Fragment>
            )
        })
    }
    </React.Fragment>
  )
}

export default Show_Nationality