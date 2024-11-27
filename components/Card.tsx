import Link from './Link'

const Card = ({ title, description, href, technologyIcons }) => (
  <div className="w-full sm:w-1/2 p-4">
    <div className="h-full flex flex-col overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent transition duration-500 hover:scale-105 hover:border-primary-500 hover:bg-gray-300 dark:border-gray-700 dark:hover:border-primary-500 dark:hover:bg-gray-800">
      <div className="p-6 flex flex-col flex-grow">
        {/* Icons Section */}
        <div className="flex items-center justify-between mb-4">
          {/* Folder Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-10 w-10 text-primary-color-500 dark:text-primary-color-dark-500"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          {/* External Link */}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1C960 276.4 759.7 76.2 511.6 76.3z"></path>
              </svg>
            </a>
          )}
        </div>
        {/* Content Section */}
        <div className="flex-grow">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>
          <p className="prose text-gray-500 dark:text-gray-400">{description}</p>
        </div>
        {/* Technology Icons */}
        {technologyIcons && (
          <div className="mt-4 flex space-x-3">
            {technologyIcons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="Technology Icon"
                className="h-8 w-8"
                title="Technology"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
)

export default Card
