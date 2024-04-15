import NavBar from '@/components/app/NavBar'
import HeroBanner from '@/components/app/HeroBanner'
import Events from '@/components/eventList/Events'

export const metadata = {
    title: 'TechRazzi - Home',
}

const Home = () => {
    return (
        <>
            <NavBar />
            <HeroBanner />
            <section className="py-20">
                <div className="container">
                    <div>
                        <Events />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
