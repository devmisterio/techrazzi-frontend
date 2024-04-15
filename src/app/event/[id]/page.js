import NavBar from '@/components/app/NavBar'
import axios from '@/lib/axios'
import EventHeader from '@/components/eventDetail/EventHeader'
import EventBannerImage from '@/components/eventDetail/EventBannerImage'
import EventDetails from '@/components/eventDetail/EventDetails'
import EventAbout from '@/components/eventDetail/EventAbout'
import EventSpeakers from '@/components/eventDetail/EventSpeakers'
import EventSchedule from '@/components/eventDetail/EventSchedule'
import EventComments from '@/components/eventDetail/EventComments'

export const metadata = {
    title: 'TechRazzi - Etkinlik Detay',
}

const EventDetail = async ({ params }) => {
    const response = await axios.get(`/api/events/${params.id}`)
    const event = response.data.data

    console.log(event)
    return (
        <>
            <NavBar />
            <EventHeader name={event.name} description={event.description} />
            <EventBannerImage image={event.banner_image} altText={event.name} />
            <EventDetails
                eventId={event.id}
                venue={event?.venue?.name}
                date={event.start_date}
                time={event.start_time}
                participants={event.participants}
            />
            <EventAbout abstract={event.abstract} />
            <EventSpeakers talks={event.talks} />
            <EventSchedule talks={event.talks} />
            <EventComments
                initialComments={event.comments}
                participants={event.participants}
                eventId={event.id}
            />
        </>
    )
}

export default EventDetail
