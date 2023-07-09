import React, { useEffect, useState }from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import dayjs from 'dayjs';
import axios from 'axios';
import "./Calendar.css"
import { api } from '../../APi';
function Calend({handleCalender,service}) {
    const [val,setVal]=useState(new Date())
    const [bookedDates, setBookedDates] = useState([]);
    useEffect(()=>{
        axios.get(`${api}/rental`)
        .then(res=>{
          //eslint-disable-next-line
          const bookedDates=res.data.map(rental=>{
           
            if(rental.ServiceId===service.id){
             return  dayjs(rental.rentalDate).toDate()
            }
           
          })
          setBookedDates(bookedDates);
        })
        .catch(err=>console.log(err))
    },[])
    const tileClassName = ({ date }) => {
      return bookedDates.some((bookedDate) => dayjs(bookedDate).isSame(date, 'day')) ? 'booked' : '';
    };
  return (
    <div className='calender'>

    
           <Calendar onChange={setVal} value={val} tileClassName={tileClassName} onClickDay={()=>handleCalender(dayjs(val).format('YYYY-MM-DD'))}/>
   
    </div>
  )
}

export default Calend