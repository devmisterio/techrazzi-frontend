const EventSchedule = ({ talks }) => {
    return (
        <section className="bg-gray-200 xl:py-24 py-16">
            <div className="container">
                <div className="text-center">
                    <h1 className="text-3xl font-medium mt-3 mb-4">
                        Etkinlik Programı
                    </h1>
                </div>
                <div className="pt-16">
                    <div className="grid xl:grid-cols-2 grid-cols-1 gap-7">
                        {talks.map(talk => (
                            <div key={talk.id}>
                                <div className="bg-white flex items-center rounded gap-5 p-5">
                                    <img
                                        src="https://via.placeholder.com/640x480.png/0033ee?text=people+sunt"
                                        className="w-16"
                                    />
                                    <div>
                                        <h1 className="mb-3">{talk.title}</h1>
                                        <div>
                                            <h1 className="text-sm mb-1">
                                                {talk.speakers.length > 0
                                                    ? `${talk.speakers[0].name} ${talk.speakers[0].surname}`
                                                    : 'Speaker information not available'}
                                            </h1>
                                            <p className="text-gray-500 text-xs">
                                                {talk.speakers.length > 0
                                                    ? `${talk.speakers[0].title} - ${talk.speakers[0].company}`
                                                    : ''}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSchedule
