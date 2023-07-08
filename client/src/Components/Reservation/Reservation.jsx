
import './Reservation.css'

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Calend from "../Calender/Calendar.jsx"

const Reservation =()=> {


    const [open, setOpen] = React.useState(false);
    const [showcalender,setShowclander]=React.useState(false)
    const[name,setName]=React.useState("")
    const[mobileNumber,setMobileNumber]=React.useState("")
    const[mail,setMail]=React.useState("")
    const[saveDate,setSaveDate]=React.useState("")

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  


  return (


<section id="home">
  <div class="left">
      <h1>Farehni</h1>
      <p> Your wedding team and everything in between</p>

       <div>
       
      <Button variant="outlined" onClick={handleClickOpen}>
        Reservation
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reservation</DialogTitle>
        <DialogContent>
          <DialogContentText>
              Fill the form to make Rerservation
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            variant="standard"
          />
             <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
               <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mobile Number"
            type="number"
            fullWidth
            variant="standard"
          />

     
           {showcalender&&  <Calend />}
           <Button   onClick={()=>setShowclander(true)}>Choose a date </Button>
          

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button   onClick={handleClose}>Resevation</Button>
        </DialogActions>
      </Dialog>
    </div>





  </div>
  <div class="right">
      <img src="https://www.southernliving.com/thmb/Iu4xNZAGefcVGwUfIgEcboacY6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Wedding-2000-deabde099c18496dbd3b27f118ca7525.jpg"/>
  </div>
</section>




  )



  
  
    
    
}

export default Reservation
