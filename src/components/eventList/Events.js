'use client'

import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import EventCard from '@/components/eventList/EventCard'
import Pagination from '@/components/eventList/Pagination'

const Events = () => {
    const [events, setEvents] = useState([])
    const [pagination, setPagination] = useState({})

    const fetchEvents = (page = 1) => {
        axios
            .get(`/api/events?page=${page}`)
            .then(response => {
                setEvents(response.data.data)
                setPagination(response.data.meta)
            })
            .catch(error => console.error('Error fetching events:', error))
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    return (
        <>
            <h2 className="md:text-3xl text-xl font-semibold my-1">
                Güncel Etkinlikler
            </h2>
            <div className="grid grid-cols-1 gap-6 pt-10">
                {events.length > 0 ? (
                    events.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))
                ) : (
                    <p className="text-center">Henüz etkinlik bulunmamaktadır.</p>
                )}
            </div>
            <Pagination pagination={pagination} onPageChange={fetchEvents} />
        </>
    )
}

export default Events
