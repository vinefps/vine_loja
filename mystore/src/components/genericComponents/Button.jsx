export function Button({ title }) {
    return (
        <button className="bg-blue-400 mt-4 w-1/3 bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            {title}
        </button>
    )
}