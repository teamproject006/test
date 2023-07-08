import './Reservation.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Calend from '../Calender/Calendar.jsx';
import axios from 'axios';

const Reservation = () => {
  const [open, setOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReservation = () => {
    // Perform reservation logic here
    // You can access the form data using the name, email, and mobileNumber state variables
    // You can send the data to your backend or perform any other required operations
    // Reset the form after processing the reservation
    setName('');
    setEmail('');
    setMobileNumber('');
    setShowCalendar(false);
    setOpen(false);
  };
  const handleCalender=(date)=>{
    console.log(date)

    setShowCalendar(false)
    axios.post("http://localhost:3004/api/rental",{
      "ServiceId":1,
      "UserId":1,
      "rentalDate":date
    }).then(()=>{
      console.log("saved to rentals tables")
      axios.post("http://localhost:3004/api/reservation",{
        'email':email ,
        "reservationDetails":"reservation done"
      })
      .then(()=>console.log("email sent"))
      .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
  }

  return (
    <section id="home">
      <div className="left">
        <h1>Farehni</h1>
        <p>Your wedding team and everything in between</p>

        <div>
          <Button variant="outlined" onClick={handleClickOpen}>
            Reservation
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Reservation</DialogTitle>
            <DialogContent>
              <DialogContentText>Fill the form to make a Reservation</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="mobileNumber"
                label="Mobile Number"
                type="tel"
                fullWidth
                variant="standard"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />

              {showCalendar && <Calend handleCalender={handleCalender} />}

              <Button onClick={() => setShowCalendar(true)}>Choose a date</Button>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleReservation}>Apply Reservation</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      <div className="right">
        <img src="https://www.southernliving.com/thmb/Iu4xNZAGefcVGwUfIgEcboacY6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Wedding-2000-deabde099c18496dbd3b27f118ca7525.jpg" alt="Wedding" />
      </div>
    </section>
  );
};

export default Reservation;
