import React, { useEffect, useState } from 'react'

function TestApi() {

const [items , setitems] = useState([])

useEffect(()=>{
   const getData = async() =>{
   const resdata = await fetch('https://fakestoreapi.com/products/categories')
   const parsedData = await resdata.json()
   setitems(parsedData)
//    window.localStorage.setItem('test',JSON.stringify(parsedData))
   }

   getData()
},[])
 console.log(items)
  return (
    <div>
        <img src={items.image} alt={items.title}/>  
    </div>
  )
}

export default TestApi