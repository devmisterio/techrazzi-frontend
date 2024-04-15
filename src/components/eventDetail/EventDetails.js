'use client'

import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'

const EventDetails = ({ eventId, venue, date, time, participants }) => {
    const { user } = useAuth()
    const router = useRouter();

    const [isParticipating, setIsParticipating] = useState(false);

    const toggleParticipation = async () => {
        if (!user) {
            router.push('/login') // Redirect to login if user is not logged in
            return
        }

        try {
            await axios.post(`/api/events/${eventId}/toggle-participation`)
            setIsParticipating(!isParticipating)
        } catch (error) {
            console.error('Error toggling participation:', error)
        }
    };
    useEffect(() => {
        const participantIds = participants.map(participant => participant.id)
        setIsParticipating(participantIds.includes(user?.id));
    }, [user, participants])

    return (
        <section className="bg-gray-100">
            <div className="container">
                <div className="grid md:grid-cols-5 grid-cols-3 gap-6 items-center py-8 mt-2">
                    <div>
                        <span className="font-semibold">Yer</span>
                        <h4>{venue ? venue : 'Online'}</h4>
                    </div>

                    <div>
                        <span>Tarih</span>
                        <h4>{date}</h4>
                    </div>

                    <div>
                        <span>Saat</span>
                        <h4>{time}</h4>
                    </div>

                    <div>
                        <div className="flex items-center justify-center sm:justify-end md:gap-5">
                            {isParticipating ? (
                                <button
                                    onClick={toggleParticipation}
                                    className="inline-flex items-center justify-center rounded font-semibold bg-gray-400 text-white px-3 py-2">
                                    Katılımı İptal Et
                                </button>
                            ) : (
                                <button
                                    onClick={toggleParticipation}
                                    className="inline-flex items-center justify-center rounded font-semibold border border-primary text-primary transition-all hover:shadow-lg hover:bg-primary hover:text-white hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-3 py-2">
                                    Katıl
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventDetails
