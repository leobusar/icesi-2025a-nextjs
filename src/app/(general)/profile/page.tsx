"use client"; 
import { useRouter } from "next/navigation";

import { useCurrentUser } from "@/hooks/auth/useCurrentUser"
import { useLogout } from "@/hooks/auth/useLogout";

export default function  Profile(){
    const {user:currentUser} =useCurrentUser();
    const {logout} = useLogout();
    const router = useRouter();

    return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
        <p className="font-bold text-2xl">Welcome back</p>
        <div className="font-semibold"> You are {currentUser?.name}</div>

        <button 
            className="mt-4 p-2 bg-gray-900 text-white rounded hover:bg-gray-600 transition-all"
            onClick={()=>{ logout(); router.push("/login")} }>
                Logout
            </button>
    </div>
    )
}