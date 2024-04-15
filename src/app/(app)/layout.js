'use client'

import '@/app/ui/global.scss'

import { useAuth } from '@/hooks/auth'
import Loading from '@/app/(app)/Loading'
import Dashboard from '@/app/(app)/dashboard/page'

const AppLayout = () => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="antialiased text-gray-700 bg-slate-100 h-screen w-screen">
            <Dashboard user={user} />
        </div>
    )
}

export default AppLayout
