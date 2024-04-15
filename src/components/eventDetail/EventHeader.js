const EventHeader = ({ name, description }) => {
    return (
        <section className="pt-36 pb-16 relative">
            <div className="container">
                <div className="text-center">
                    <h1 className="font-semibold mb-5 text-3xl sm:text-4xl lg:text-5xl">
                        {name}
                    </h1>
                    <p className="sm:text-lg text-gray-500">{description}</p>
                </div>
            </div>
        </section>
    )
}

export default EventHeader
