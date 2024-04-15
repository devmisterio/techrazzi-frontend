'use client'

import { useEffect, useState } from 'react'
import axios from '@/lib/axios'

const UserComments = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        axios.get('/api/user/comments').then(response => {
            setComments(response.data.data)
        })
    }, [])
    return (
        <>
            <h2 className="text-xl font-semibold mb-2">Yaptığın Yorumlar</h2>
            {comments.length === 0 ? (
                <p className="text-gray-600">Hiç yorum yapmadın.</p>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {comments.map(comment => (
                        <div
                            key={comment.id}
                            className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-md font-semibold">
                                {comment.content}
                            </h3>
                            <p className="text-gray-600">{comment.created_at}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default UserComments
