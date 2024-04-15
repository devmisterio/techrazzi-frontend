'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { usePathname } from 'next/navigation'

const LoginLinks = () => {
    const { user, isLoading, logout } = useAuth({ middleware: 'guest' })
    const pathname = usePathname()

    if (isLoading) {
        return null
    }

    return (
        <div className="flex items-center">
            {user ? (
                pathname === '/dashboard' ? (
                    <button
                        className="bg-primary text-white px-4 py-2 rounded inline-flex items-center text-sm"
                        onClick={logout}>
                        Çıkış Yap
                    </button>
                ) : (
                    <div className="hidden lg:flex items-center ms-3 mr-3">
                        <Link
                            href="/dashboard"
                            className="bg-primary text-white px-4 py-2 rounded inline-flex items-center text-sm">
                            Profil
                        </Link>
                    </div>
                )
            ) : (
                <>
                    <div className="hidden lg:flex items-center ms-3 mr-3">
                        <Link
                            href="/login"
                            className="bg-primary text-white px-4 py-2 rounded inline-flex items-center text-sm">
                        Giriş Yap
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center ms-3">
                        <Link
                            href="/register"
                            className="bg-primary text-white px-4 py-2 rounded inline-flex items-center text-sm">
                            Kayıt Ol
                        </Link>
                    </div>
                </>
            )}
        </div>
    )
}

export default LoginLinks
