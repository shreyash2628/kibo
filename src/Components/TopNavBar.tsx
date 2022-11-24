import React from 'react'
import Button from '@mui/material/Button';
import HelloGIF from '../Images/Hello.gif';

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import DropDown from './DropDown';
import { Navigate, useNavigate,Link } from 'react-router-dom';



function AppBar() {
    const navigate = useNavigate()

  return (
    <div>

        <div className="max-w-auto h-14 bg-black text-white content-start ">
            <div className="flex flex-row content-end">
           
        <DropDown />


            <button onClick={ ()=>navigate('/employeeList') } className="border rounded m-4 place-content-end	 bg-white text-black">
                Employee List
            </button>


            </div>
        </div>
        
    </div>
  )
}

export default AppBar