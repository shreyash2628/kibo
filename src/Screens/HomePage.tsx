import { Button } from '@mui/material'
import React from 'react'
import Welcome from '../Images/Welcome.gif'
function HomePage() {
  return (
    <div className="">

       
        <div className='p-6 ' >
            <img className="object-cover w-screen h-screen" src={Welcome}/>
             
        </div>

    </div>
  )
}

export default HomePage