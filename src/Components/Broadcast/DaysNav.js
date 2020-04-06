import React from 'react'
import { Nav } from 'react-bootstrap';
import './DaysNav.css'

function DaysNav({ day, setDay }) {

    const changeDay = (e) => {
        let newDay = Number(e);
        setDay(newDay)
    }
   
    return (
        <Nav className="justify-content-center DaysNav">
            <Nav.Item>
                <Nav.Link
                    onSelect={changeDay}
                    className={ day === 2 ? 'selectedDay' : '' }
                    eventKey={2}>מחר</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    onSelect={changeDay}
                    className={ day === 1 ? 'selectedDay' : '' }
                    eventKey={1}>היום</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    onSelect={changeDay}
                    className={ day === 0 ? 'selectedDay' : '' }
                    eventKey={0}>אתמול</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            </Nav.Item>
        </Nav>
    )
}

export default DaysNav
