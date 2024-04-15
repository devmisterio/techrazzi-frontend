import Image from 'next/image'
import Link from 'next/link'

const EventCard = ({ event }) => {
    return (
        <div
            key={event.id}
            className="p-6 rounded-md shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 duration-400">
            <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2 col-span-3">
                    <Image
                        src={event.list_image}
                        className="w-full h-full rounded-md"
                        alt={event.name}
                        width="280"
                        height="160"
                    />
                </div>

                <div className="col-span-3">
                    <div className="flex flex-col gap-14 justify-between xl:h-full">
                        <div>
                            <div className="flex items-center">
                                <span className="lg:flex items-center ms-3 mr-3 bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2">
                                    📅 {event.start_date}
                                </span>

                                <span className="lg:flex items-center ms-3 mr-3 bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2">
                                    📌{' '}
                                    {event.is_online
                                        ? 'Online'
                                        : event.venue?.city ||
                                          'Location Unavailable'}
                                </span>
                                {event.is_participant_limit_reached ? (
                                    <span className="lg:flex items-center ms-3 mr-3 bg-gray-600 text-white font-medium rounded-md text-xs py-1 px-2">
                                        Katılım Limiti Dolmuştur
                                    </span>
                                ) : (
                                    ''
                                )}
                            </div>
                            <h1 className="text-xl my-3 transition-all hover:text-primary">
                                <a href={`/event/${event.id}`}>{event.name}</a>
                            </h1>
                            <p className="text-sm/relaxed tracking-wider text-gray-500">
                                {event.description}
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                    <div className="grow flex items-center gap-3">
                                        <Link
                                            href={`/event/${event.id}`}
                                            className="inline-flex items-center justify-center rounded font-semibold border border-primary text-primary transition-all hover:shadow-lg hover:bg-primary hover:text-white hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-3 py-2">
                                            Detay Gör
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard
