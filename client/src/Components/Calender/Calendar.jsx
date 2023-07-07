import React, { useState }from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import dayjs from 'dayjs';
function Calend() {
    const [val,setVal]=useState(new Date())
  return (
    <div>
           <Calendar onChange={setVal} value={val}/>
     {console.log(dayjs(val).format('YYYY-MM-DD'))}
    </div>
  )
}

export default Calend