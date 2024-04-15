const EventSpeakers = ({ talks }) => {
    return (
        <section className=" lg:py-24 py-16">
            <div className="container">
                <div className="text-center">
                    <h1 className="text-3xl font-medium mt-3 mb-4">
                        Konuşmacılar
                    </h1>
                    <p className="text-gray-500">
                        Etkinlikte Yer Alan Konuşmacılar
                    </p>
                </div>
                <div className="mt-14">
                    <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
                        {talks.map(
                            talk =>
                                talk.speakers.length > 0 &&
                                talk.speakers.map(speaker => (
                                    <div
                                        key={speaker.id}
                                        className="flex gap-4 items-center">
                                        <img
                                            src={speaker.image_url}
                                            alt="avatar"
                                            className="h-16 w-16 rounded-md"
                                        />
                                        <div>
                                            <h6 className="font-medium">
                                                {speaker.name} {speaker.surname}
                                            </h6>
                                            <p className="text-gray-500">
                                                {speaker.title}
                                            </p>
                                        </div>
                                    </div>
                                )),
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSpeakers
