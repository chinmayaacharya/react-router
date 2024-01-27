import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData()
    useEffect(()=>{
        fetch('https://api.github.com/users/chinmayaacharya')
        .then((res)=>res.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })

    },[])
  return (
    <div className='bg-gray-500 text-center m-4 text-3xl py-5 text-white'>Github followers: {data.followers}
    <img src={data.avatar_url}  width={300} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
    const res=await fetch('https://api.github.com/users/chinmayaacharya')
    return res.json()
}