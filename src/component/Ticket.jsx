import React from 'react';
import { Card, Image } from 'react-bootstrap';
import TicketSegment from '../component/TicketSegment';
const Ticket = ({
    price,
    company,
    urlImage,
    startCity,
    endCity,
    startTime,
    endTime,
    duration,
    stopsCount,
    stops,
}) => {
    return (
        <Card className="card">
            <Card.Body>
                <div className="card-header-my">
                    <p className="card-title-my">{price}</p>
                    <Image
                        alt={`${company} logo`}
                        src={urlImage}
                        className="company-logo"
                    />
                </div>
                <div className="routes-box">
                    <TicketSegment
                        startCity
                        endCity
                        startTime
                        endTime
                        duration
                        stopsCount
                        stops
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

export default Ticket;
