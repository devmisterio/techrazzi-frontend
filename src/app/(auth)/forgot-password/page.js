'use client'

import Button from '@/components/form/Button'
import Input from '@/components/form/Input'
import InputError from '@/components/form/InputError'
import Label from '@/components/form/Label'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'

const Page = () => {
    const { forgotPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <>
            <div className="mb-4 text-sm text-gray-600">
                Şifrenizi mi unuttunuz? Hiç sorun değil. Sadece e-postanızı bize bildirin e-posta adresinize bir şifre sıfırlama bağlantısı göndereceğiz. Yeni bir tane seçmenize izin verecek.
            </div>

            {/* Session Status */}
            <AuthSessionStatus className="mb-4" status={status} />

            <form onSubmit={submitForm}>
                {/* Email Address */}
                <div>
                    <Label htmlFor="email">E-Posta Adresi</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        className="block mt-1 w-full"
                        onChange={event => setEmail(event.target.value)}
                        required
                        autoFocus
                    />

                    <InputError messages={errors.email} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button>E-posta Şifresi Sıfırlama Bağlantısı</Button>
                </div>
            </form>
        </>
    )
}

export default Page
