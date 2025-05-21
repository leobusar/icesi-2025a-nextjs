import { useEffect, useState } from "react";
import Cookies from 'js-cookie'; 
import { AuthService } from "@/services/auth.service";
import { User } from "@/interfaces/user";

export const useCurrentUser = () => {
    const [user, setCurrentUser] = useState <User|null > (null); 

    useEffect(()=>{
        const user = Cookies.get('currentUser'); 
        if(user){
            setCurrentUser(JSON.parse(user))
        }
    },[]);
    
    return {user}

}