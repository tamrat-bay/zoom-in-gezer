import React, { useState, useEffect,useCallback } from 'react';
import { Table, Container } from 'react-bootstrap';
import DaysNav from './DaysNav';
import './Broadcast.css'
import initialEvents from '../../Events.json' // I wrote the json hardcode - its on the src dir

function Broadcast() {
    const [events, setEvents] = useState([])
    const [day, setDay] = useState(1) // 0 = yesterday 1 = today 2 = tommorow

    const yesterdayDate = () =>{
      return new Date(new Date().setDate(new Date().getDate()-1)).toDateString()
    }
    const tomorrowDate = () =>{
        return new Date(new Date().setDate(new Date().getDate()+1)).toDateString()
     }
    

    const displayEventsByDate = useCallback(() =>{
        console.log(initialEvents);
        
        if (Number(day) === 1) {
            let filtterdEvents = initialEvents.filter(e => e.date === new Date().toDateString())
            console.log(day,filtterdEvents);
            setEvents(filtterdEvents)
        }
        if (Number(day) === 0) {
            let filtterdEvents = initialEvents.filter(e => e.date === yesterdayDate())
            console.log(day,filtterdEvents);
            setEvents(filtterdEvents) 
        }

        if (Number(day) === 2) {
            let filtterdEvents = initialEvents.filter(e => e.date === tomorrowDate())
            console.log(day,filtterdEvents);
            setEvents(filtterdEvents)
        }
    },[day])

useEffect(() => {
    displayEventsByDate()
}, [day,displayEventsByDate])

    
    return (
        <div>
            <Container>
                <h1>לוח שידורים</h1>
            How many days to display here ?
              <DaysNav  
              day={day} 
              setDay={setDay}
              displayEventsByDate={displayEventsByDate}
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
                   {events ? events.map(e =>
                     (<tr key={e.id}>
                         <td>{e.startTime} | {e.date}</td>
                         <td>{e.subject}</td>
                         <td>{e.presentor}</td>
                         <td>{e.ages}</td>
                         <td>{e.activity}</td>
                         <td>{e.requierments}</td>
                         <td><a href={e.link}> הצטרף לצפייה</a></td>
                     </tr>) 
                     ) 
                     : null
                     }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default Broadcast
