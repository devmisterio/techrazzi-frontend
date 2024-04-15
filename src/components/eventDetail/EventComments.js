'use client'

import { useState } from 'react'
import Tab from '@/components/form/Tab'
import EventParticipants from '@/components/eventDetail/EventParticipants'
import axios from '@/lib/axios'
import { useAuth } from '@/hooks/auth'
import Link from 'next/link'

const EventComments = ({ initialComments, participants, eventId }) => {
    const { user, isLoading } = useAuth({ middleware: 'guest' })

    const [activeTab, setActiveTab] = useState('comments')
    const [comments, setComments] = useState(initialComments)
    const [content, setContent] = useState('')
    const [errors, setErrors] = useState({})

    const submitComment = async event => {
        event.preventDefault()
        setErrors({})

        if (!user) {
            return
        }

        try {
            const response = await axios.post('/api/comment', {
                content: content,
                event_id: eventId,
            })

            setComments([...comments, response.data.data])
            setContent('')
        } catch (error) {
            if (error.response) {
                setErrors(error.response.data.errors)
            } else {
                console.error('An unexpected error occurred:', error)
            }
        }
    }

    return (
        <section className="lg:py-24 py-14">
            <div className="container">
                <div className="flex flex-wrap gap-1">
                    <Tab
                        isActive={activeTab === 'comments'}
                        onClick={() => setActiveTab('comments')}>
                        Yorumlar
                    </Tab>
                    <Tab
                        isActive={activeTab === 'participants'}
                        onClick={() => setActiveTab('participants')}>
                        Katılımcılar
                    </Tab>
                </div>

                <div className="border-t mb-5" />
                {activeTab === 'comments' && (
                    <>
                        <div className="flex items-center gap-2">
                            <h1 className="tracking-wider">Yorumlar</h1>
                            <span className="bg-gray-200 px-2 rounded-md">
                                {comments.length}
                            </span>
                        </div>
                        <div>
                            {comments.map(comment => (
                                <div key={comment.id}>
                                    <div className="flex gap-3 my-6">
                                        <div>
                                            <h6 className="text-sm mb-1 font-semibold">
                                                {comment.user.name}
                                            </h6>
                                            <p className="text-sm text-gray-500">
                                                {comment.created_at}
                                            </p>
                                            <p className="text-sm/relaxed tracking-wider text-gray-600 mt-2">
                                                {comment.content}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="border-b" />
                                </div>
                            ))}
                        </div>
                    </>
                )}
                {activeTab === 'participants' && (
                    <EventParticipants participants={participants} />
                )}

                <div className="mt-14">
                    <div className="border bg-white rounded p-6">
                        <h1>Yorum Yapın</h1>
                        {user && !isLoading ? (
                            <form onSubmit={submitComment}>
                                <div className="flex flex-col gap-5 mt-5">
                                    <div>
                                        <textarea
                                            className="rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full text-sm"
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={content}
                                            onChange={e =>
                                                setContent(e.target.value)
                                            }
                                            placeholder="Mesajınızı Buraya Giriniz..."
                                        />
                                    </div>
                                    {errors.content && (
                                        <p className="text-red-500 text-xs mt-2">
                                            {errors.content[0]}
                                        </p>
                                    )}
                                    <button
                                        type="submit"
                                        className="bg-black/70 text-white rounded-md text-sm font-semibold flex-none shadow shadow-black hover:shadow-lg hover:shadow-black/30 focus:shadow-none focus:outline focus:outline-black/50 px-5 py-3">
                                        Kaydet
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <p>
                                Yorum yapmak için{' '}
                                <Link
                                    href="/login"
                                    className="text-blue-600 hover:underline">
                                    giriş
                                </Link>{' '}
                                yapınız.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventComments
