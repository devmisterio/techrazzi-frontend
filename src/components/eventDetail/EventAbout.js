const EventAbout = ({ abstract }) => {
    return (
        <section className="bg-gray-200 lg:py-24 py-16">
            <div className="container">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="border-t-2 border-gray-300 w-1/5 mb-7" />
                        <h1 className="text-3xl">Etkinlik Hakkında</h1>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="text-sm/relaxed tracking-wider text-gray-600">
                            {abstract}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventAbout
