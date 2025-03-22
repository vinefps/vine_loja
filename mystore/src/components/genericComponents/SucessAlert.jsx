// SucessAlert.jsx
export function SucessAlert({ title }) {
  return (
    <div className="space-y-2 p-2">
      <div
        role="alert"
        className="bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 dark:border-green-700 text-green-700 dark:text-green-300 p-4 rounded-lg flex items-center animate-fadeIn shadow-sm"
      >
        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 flex-shrink-0 mr-3 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 13l4 4L19 7"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
        <p className="text-sm font-medium">{title}</p>
      </div>
    </div>
  );
}
