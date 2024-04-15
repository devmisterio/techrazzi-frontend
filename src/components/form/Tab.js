const Tab = ({ isActive, onClick, children }) => (
    <button
        className={`p-4 rounded-lg font-bold ${
            isActive ? 'bg-indigo-200' : 'hover:bg-gray-300 hover:bg-opacity-40'
        } text-gray-700 flex-grow w-80`}
        onClick={onClick}>
        {children}
    </button>
)

export default Tab
