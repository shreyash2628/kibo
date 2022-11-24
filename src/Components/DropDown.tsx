import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuIcon from '@mui/icons-material/Menu';

import LoginGIF from "../Images/Log.gif";
import LoginPage from './LoginPage';

import { BrowserRouter, Routes, Route  } from 'react-router-dom'


export default function DropDown() {
  const [open, setOpen] = React.useState(false);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
        
        <button  onClick={handleClickOpen}
        className="bg-black mx-2 my-2 rounded text-white content-start hover:animate-bounce">
        <MenuIcon/>
        </button>

        Employee Management App

        



   

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
     
        <LoginPage/>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}




// <Link   to='/admin/displayStudents'  style={{textDecoration:"none"}} >
// <span className="displayStudentRecords">
//         <ListItemButton sx={{ pl: 4 }}>
//             <ListItemIcon>
//                 <SlideshowIcon />
//             </ListItemIcon>
//         <ListItemText primary="Display Students" />
// </ListItemButton>
// </span>        
// </Link>
