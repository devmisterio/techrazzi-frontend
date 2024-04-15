const EventParticipants = ({ participants }) => {
    return (
        <>
            <div className="flex items-center gap-2">
                <h1 className="tracking-wider">Katılımcılar</h1>
                <span className="bg-gray-200 px-2 rounded-md">
                    {participants.length}
                </span>
            </div>
            <div>
                {participants.map(participant => (
                    <div key={participant.id} className="flex gap-3 my-6">
                        <div>
                            <h6 className="text-sm mb-1 font-semibold">
                                {participant.name}
                            </h6>
                            <p className="text-sm text-gray-500">
                                Email: {participant.email}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default EventParticipants
