import React from 'react';

const TicketSegment = ({
    startCity,
    endCity,
    startTime,
    endTime,
    duration,
    stopsCount,
    stops,
}) => {
    const stopsLabel = stopsCount === 0 ? 'Без пересадок' : `${stopsCount} пересадки`;
    return (
        <div className="routes">
            <p className="routes-column">
                <span className="routes-column-title">
                    {startCity} – {endCity}
                </span>
                <span className="routes-column-info">
                    {startTime} – {endTime}
                </span>
            </p>
            <p className="routes-column">
                <span className="routes-column-title">В пути</span>
                <span className="routes-column-info">{duration}</span>
            </p>
            <p className="routes-column">
                <span className="routes-column-title">{stopsLabel}</span>
                <span className="routes-column-info">{stops}</span>
            </p>
        </div>
    );
};

export default TicketSegment;
