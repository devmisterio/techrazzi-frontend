'use client'

import { useEffect, useState } from 'react'
import axios from '@/lib/axios'

const UserEvents = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        axios.get('/api/user/events').then(response => {
            console.log(response.data)
            setEvents(response.data.data)
        })
    }, [])

    return (
        <>
            <h2 className="text-xl font-semibold mb-2">Katıldığın Etkinlikler</h2>
            {events.length === 0 ? (
                <p className="text-gray-600">Katıldığın bir etkinlik yok.</p>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {events.map(event => (
                        <div
                            key={event.id}
                            className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">
                                {event.name}
                            </h3>
                            <p className="text-gray-600">{event.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default UserEvents
