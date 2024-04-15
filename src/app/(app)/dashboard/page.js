import NavBar from '@/components/app/NavBar'
import UserEvents from '@/components/dashboard/UserEvents'
import UserComments from '@/components/dashboard/UserComments'

const Dashboard = ({ user }) => {
    return (
        <>
            <NavBar />
            <div className="bg-slate-100  mt-[77px]  py-3 px-3">
                <section className="relative overflow-hidden">
                    <div className="container">
                        <div className="flex">
                            <div className="w-full">
                                <h3 className="text-xl text-gray-800 mt-2">
                                    Merhaba, {user?.name}!
                                </h3>
                                <p className="mt-1 font-medium mb-4">
                                    Techrazzi Event Dashboard
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-3">
                    <div className="container">
                        <div className="grid grid-cols-1 gap-6 pt-10">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <UserEvents />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-3">
                    <div className="container">
                        <div className="grid grid-cols-1 gap-6 pt-10">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <UserComments />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Dashboard
