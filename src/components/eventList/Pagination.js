const Pagination = ({ pagination, onPageChange }) => {
    if (!pagination || !pagination.links) return null

    return (
        <div className="flex justify-center items-center gap-2 mt-7">
            {pagination.links.map((link, index) => {
                const page = link.url
                    ? new URL(link.url).searchParams.get('page')
                    : null

                const isActive = pagination.current_page === parseInt(page, 10)

                return page ? (
                    <button
                        key={index}
                        onClick={() => onPageChange(page)}
                        className={`border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3 ${
                            isActive ? 'bg-blue-500 text-white' : ''
                        }`}>
                        {link.label}
                    </button>
                ) : (
                    <span
                        key={index}
                        className={`px-3 ${isActive ? 'text-blue-500' : ''}`}>
                        {link.label}
                    </span>
                )
            })}
        </div>
    )
}

export default Pagination
