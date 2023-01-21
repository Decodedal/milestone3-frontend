import { createContext, useEffect, useState } from "react";

export const CurrentUser = createContext()

function CurrentUserProvider({children}){
    const [currentUser, setCurrentUser]= useState(null)
    
    useEffect(()=>{
        
        const getLoggedInnUser = async() =>{
            let response = await fetch('https://style-central-bakcend.onrender.com/authentication/profile',{
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem('token')}`
                }
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInnUser()
    },[])

return(
    <CurrentUser.Provider value={{currentUser, setCurrentUser}}>
        {children}
    </CurrentUser.Provider>  
)

}

export default CurrentUserProvider