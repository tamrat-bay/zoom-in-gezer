import React from 'react'
import { Nav } from 'react-bootstrap';

function DaysNav({ day, setDay, displayEventsByDate }) {

    const changeDay = (e) => {
        let newDay = Number(e);
        setDay(newDay)
    }
   
    return (
        <Nav className="justify-content-center" style={{ backgroundColor: 'gray' }}>
            <Nav.Item>
                <Nav.Link
                    onSelect={changeDay}
                    onClick={displayEventsByDate}
                    style={{ backgroundColor: day === 2 ? 'white' : '' }}
                    eventKey={2}>מחר</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    onSelect={changeDay}
                    style={{ backgroundColor: day === 1 ? 'white' : '' }}
                    onClick={displayEventsByDate}
                    eventKey={1}>היום</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    onSelect={changeDay}
                    style={{ backgroundColor: day === 0 ? 'white' : '' }}
                    onClick={displayEventsByDate}
                    eventKey={0}>אתמול</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            </Nav.Item>
        </Nav>
    )
}

export default DaysNav
