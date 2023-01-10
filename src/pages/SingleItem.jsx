import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleItem = () => {

    const { id } = useParams()

    const [item , setitem] = useState([])

useEffect(()=>{
   const getData = async() =>{
   const resdata = await fetch(`https://fakestoreapi.com/products/${id}`)
   const parsedData = await resdata.json()
   setitem(parsedData)
//    window.localStorage.setItem('test',JSON.stringify(parsedData))
   }

   getData()
},[])
 console.log(item)

  return (
    <div>{item.title}</div>
  )
}

export default SingleItem