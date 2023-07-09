  import './Reservation.css';
  import React, { useContext, useState } from 'react';
  import Button from '@mui/material/Button';
  import TextField from '@mui/material/TextField';
  import Dialog from '@mui/material/Dialog';
  import DialogActions from '@mui/material/DialogActions';
  import DialogContent from '@mui/material/DialogContent';
  import DialogContentText from '@mui/material/DialogContentText';
  import DialogTitle from '@mui/material/DialogTitle';
  import Calend from '../Calender/Calendar.jsx';
  import axios from 'axios';
  import { UserContext } from '../../useContext/userContext';
  import Alert from '@mui/material/Alert';
  import Stack from '@mui/material/Stack';
  import { api } from '../../APi';
  

  const Reservation = ({ service }) => {
    const { currentUser } = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [date, setDate] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
  
    console.log(service.id);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleReservation = async () => {
      setName('');
      setEmail('');
      setMobileNumber('');
      setShowCalendar(false);
      setOpen(false);
      try {
        await axios.post(`${api}/rental`, {
          ServiceId: service.id,
          UserId: currentUser.id,
          rentalDate: date,
        });
        console.log('Saved to rentals table');
  
        const reservationDetails = `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company Name:</strong> ${service.companyName}</p>
          <p><strong>Phone Number:</strong> ${mobileNumber}</p>
          <p><strong>Rental Date:</strong> ${date}</p>
          <p><strong>Description:</strong> Your reservation was successful.</p>
        `;
  
        await axios.post(`${api}/reservation`, {
          email: 'rafikmhadhbi01@gmail.com',
          reservationDetails,
        });
        console.log('Email sent');
  
        const reservationDetails2 = `
          <p><strong>Name:</strong> ${currentUser.username}</p>
          <p><strong>Company Name:</strong> ${currentUser.email}</p>
          <p><strong>Phone Number:</strong> ${mobileNumber}</p>
          <p><strong>Rental Date:</strong> ${date}</p>
          <p><strong>Description:</strong> Mr ${name} made a reservation for ${date}.</p>
        `;
  
        await axios.post(`${api}/reservation`, {
          email: 'rafikmhadhbi01@gmail.com',
          reservationDetails: reservationDetails2,
        });
        console.log('Email sent');
  
      setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      } catch (error) {
        console.error('Error:', error);
          setError(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      }
  
 
    };
  
    const handleCalendar = (date) => {
      console.log(date);
      setDate(date);
    };

    return (
      <section id="home">
               <div className='alert'>
        {success && (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert variant="filled" severity="success">
            Your reservation was successful. Check your email for confirmation.
          </Alert>
        </Stack>
      )}

      {error && (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert variant="filled" severity="error">
            Email Error
          </Alert>
        </Stack>
      )}
        </div>
        <div className="left">
          <h1>Farehni</h1>
          <p>Your wedding team and everything in between</p>

          <div>
            <Button variant="outlined" onClick={handleClickOpen}>
              Reservation
            </Button>
            <Dialog  open={open} onClose={handleClose}>
              <DialogTitle>Reservation</DialogTitle>
              <DialogContent  >
                <DialogContentText>Fill the form to make a Reservation</DialogContentText>
                <TextField
                  // sx={{border:'2px solid red'}}
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

                {showCalendar && <Calend service={service} handleCalender={handleCalendar} />}

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
