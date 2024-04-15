import '@/app/ui/global.scss'

export const metadata = {
    title: 'TechRazzi',
}
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased text-gray-700 bg-gray-50">
                {children}
            </body>
        </html>
    )
}

export default RootLayout
