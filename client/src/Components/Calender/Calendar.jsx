import React, { useEffect, useState }from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import dayjs from 'dayjs';
import axios from 'axios';
import "./Calendar.css"
function Calend() {
    const [val,setVal]=useState(new Date())
    const [bookedDates, setBookedDates] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3004/api/rental")
        .then(res=>{
          const bookedDates=res.data.map(rental=>{
            console.log(rental.ServiceId)
            if(rental.ServiceId===0){
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

    
           <Calendar onChange={setVal} value={val} tileClassName={tileClassName}/>
     {console.log(dayjs(val).format('YYYY-MM-DD'))}
    </div>
  )
}

export default Calend