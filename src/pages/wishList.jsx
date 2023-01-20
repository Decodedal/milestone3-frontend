import React, { useEffect, useState, useContext } from 'react'
import { CurrentUser } from '../context/UserContext'
import GalleryItem from '../components/galleryItem'
import { Container, Grid, Stack } from '@mui/material'

const WishList = () => {

    const [items, setItem] = useState(null)

    const {currentUser, setCurrentUser} = useContext(CurrentUser)

//Fetches the user_items data for this user 
    useEffect(()=>{
        const fetchDb  = async() => {
        const resData = await fetch(`http://localhost:4000/items/${currentUser.user_id}`)
        const dbData = await resData.json()
        console.log(dbData)
        let itemArr =[]

        // dbData.forEach(async(item) =>{
        //     const apiRequest = await fetch(`https://fakestoreapi.com/products/${item.item_id}`)
        //     const apiData = await apiRequest.json()
        //     itemArr.push(apiData)
        //     setItem(...items, apiData)
        // })
        // // setItem(itemArr)
        // }
        }
        fetchDb()
    },[])

    console.log(items)
    // const mappedItems = items.map((item, key)=>{
    //     return(
    //         <GalleryItem item = {item} key ={key}/>
    //     )
    //  })

     //why rerendering


  return (
    <>
        {/* {mappedItems} */}
   </>
  )
}

export default WishList