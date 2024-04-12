import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/lambodarbag')
        .then(res => res.json())
        .then(data => {
             setData(data)
        })
    },[])

  return (
    <div className='bg-gray-600 flex justify-center items-center flex-col p-4 text-3xl text-white text-center m-4' >
    <h1>Github Followings: {data.following}</h1>
    <img className= 'm-2  ' src= {data.avatar_url} alt="github image" width={250}/>
    </div>
  )
}

export default Github