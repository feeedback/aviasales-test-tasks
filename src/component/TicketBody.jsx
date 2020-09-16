import React, { Component } from 'react';

import Ticket from '../component/Ticket';
const dayjs = require('dayjs');
dayjs.extend(require('dayjs/plugin/duration'));

const urls = {
    getSearchId: () => 'https://front-test.beta.aviasales.ru/search',
    getTickets: (id) => `https://front-test.beta.aviasales.ru/tickets/${id}`,
};

const getFlighStartFormatted = (startDate) => {
    return dayjs(startDate).format('HH:mm');
};
const getFlighEndFormatted = (startDate, duration) => {
    return dayjs(startDate)
        .add(duration, 'minutes')
        .format('HH:mm');
};
const getFlighDurationFormatted = (minutes) => {
    const duration = dayjs.duration(minutes, 'minutes');
    const [h, m] = [duration.get('hours'), duration.get('minutes')];
    return `${h}ч ${m}м`;
};
const getPriceFormatted = (price) => {
    const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
    });
    return formatter.format(price);
};

const catchExAbortEr = (error) => {
    if (error.name !== 'AbortError') {
        console.error(error);
    }
};
class TicketBody extends Component {
    getSearchId = async (urls, signal) => {
        try {
            const response = await fetch(urls.getSearchId(), { signal });
            const body = await response.json();
            return body.searchId;
        } catch (error) {
            throw error;
        }
    };

    getTickets = async (urls, searchId, signal) => {
        try {
            const response = await fetch(urls.getTickets(searchId), { signal });
            const body = await response.json();
            return body;
        } catch (error) {
            throw error;
        }
    };

    getAllTickets = async (urls, signal) => {
        const searchId = await this.getSearchId(urls, signal);
        const tickets = [];
        let isAllTicketsReceived = false;

        while (isAllTicketsReceived) {
            const response = await this.getTickets(urls, searchId, signal);
            tickets.push(response.tickets);
            isAllTicketsReceived = response.stop;
        }
        return tickets;
    };

    abortController = new AbortController();

    constructor(props) {
        super(props);
        this.state = { tickets: [] };
    }

    componentDidMount() {
        this.getAllTickets(urls, this.abortController.signal)
            .then((tickets) => this.setState({ tickets }))
            .catch(catchExAbortEr);
    }
    render() {
        return (
            <Ticket
                price
                company
                urlImage
                startCity
                endCity
                startTime
                endTime
                duration
                stopsCount
                stops
            />
        );
    }
}
const ticket = {
    // Цена в рублях
    price: 'number',
    // Код авиакомпании (iata)
    carrier: 'string',
    // Массив перелётов.
    // В тестовом задании это всегда поиск "туда-обратно"
    // значит состоит из двух элементов
    segments: [
        {
            // Код города (iata)
            origin: 'string',
            // Код города (iata)
            destination: 'string',
            // Дата и время вылета туда
            date: 'string',
            // Массив кодов (iata) городов с пересадками
            stops: ['string'],
            // Общее время перелёта в минутах
            duration: 'number',
        },
        {
            // Код города (iata)
            origin: 'string',
            // Код города (iata)
            destination: 'string',
            // Дата и время вылета обратно
            date: 'string',
            // Массив кодов (iata) городов с пересадками
            stops: ['string'],
            // Общее время перелёта в минутах
            duration: 'number',
        },
    ],
};
export default TicketBody;
