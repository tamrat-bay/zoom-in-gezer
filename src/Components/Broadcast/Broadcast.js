import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import DaysNav from './DaysNav';
import './Broadcast.css'


function Broadcast() {
    const [eventsByDate, setEventsByDate] = useState([]);
    const [day, setDay] = useState(1) // 0 = yesterday 1 = today 2 = tommorow

    const yesterdayDate = () =>{
      return new Date(new Date().setDate(new Date().getDate()-1)).toDateString()
    }
    const tomorrowDate = () =>{
        return new Date(new Date().setDate(new Date().getDate()+1)).toDateString()
     }
    
     const jsonData ='./data/Events.json';

        const changePage = (prevOrnext) => {
            if(prevOrnext === "next"){
                if (day <=2) {
                 setDay(day+1) 
                }
            }else{
                if (day >0) {
                    setDay(day-1) 
                   }
            }
        }

useEffect(() => {
    
    const displayEventsByDate = (allEvents) =>{
        const selectedDay = Number(day);

        if (selectedDay === 1) {
            let filtterdEvents = allEvents.filter(e => e.date === new Date().toDateString())
            setEventsByDate(filtterdEvents)
        }
        if (selectedDay === 0) {
            let filtterdEvents = allEvents.filter(e => e.date === yesterdayDate())
            setEventsByDate(filtterdEvents) 
        }

        if (selectedDay === 2) {
            let filtterdEvents = allEvents.filter(e => e.date === tomorrowDate())
            setEventsByDate(filtterdEvents)
        }
    }

    const readJsonData =  () =>{
       fetch(jsonData)
        .then( (response) => {
        //   console.log(response);
           return response.json();
        })
        .then(data => {
          // Work with JSON data here
            // setInitialEvents(data)
            displayEventsByDate(data)
        })
        .catch(err => {
          // Do something for an error here
          console.log("Error Reading data " + err);
        });
    }
    readJsonData()
    
    
}, [day, jsonData])

    
    return (
        <div className="Broadcast">
                <h1>לוח שידורים</h1>
            {/* How many days to display here ? */}
            <i className='fas fa-arrow-left' 
            id="next"
            onClick={(e)=>changePage(e.target.id)}
            >  
            </i>
            <i className='fas fa-arrow-right'
            id="prev"
            onClick={(e)=>changePage(e.target.id)}
            >
            </i>
              <DaysNav  
              day={day} 
              setDay={setDay}
              />

                <Table striped bordered hover>
                    <thead>{/* // move table to diffrebt comp */}
                        <tr>
                            <th>שעה</th>
                            <th>נושא</th>
                            <th>מגיש</th>
                            <th>גילאים</th>
                            <th>פעילות</th>
                            <th>מה צריך?</th>
                            <th>קישור</th>
                        </tr>
                    </thead>
                    <tbody>
                   {eventsByDate ? eventsByDate.map(e =>
                     (<tr key={e.id}>
                         <td>{e.startTime}</td>
                         <td>{e.subject}</td>
                         <td>{e.presentor}</td>
                         <td>{e.ages}</td>
                         <td>{e.activity}</td>
                         <td>{e.requierments}</td>
                         <td><a 
                         className={
                            (Number(day) === 1) && 
                            (Number(e.startTime.split(":")[0]) === new Date().getHours()) ? "activeLink"
                            : 'disabledLink'
                           }   
                         onClick={(event) =>(
                             (Number(day) === 1) && 
                             (Number(e.startTime.split(":")[0]) === new Date().getHours())
                         )
                          ? '': event.preventDefault()}
                          href={e.link}> הצטרף לשידור</a></td>
                     </tr>) 
                     ) 
                     : null
                     }
                    </tbody>
                </Table>
        </div>
    )
}

export default Broadcast
