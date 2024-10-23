//custom hooks

import { useEffect, useState } from "react"


const useFetch=(url)=>{
 
    const[data , setdata]=useState([])

    useEffect(()=>{
        fetch(url).then((result)=>{
            result.json().then((response)=>{
                setdata(response)
            })
        })
    },[])
    return data
}

export default useFetch