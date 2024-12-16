import projectsData from '@/data/projectsData'
import Link from 'next/link'

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Explore the projects showcasing various technologies and solutions.
          </p>
        </div>

        <div className="container py-12">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-px shadow dark:border-white/10 dark:bg-[#1c1e26]"
              >
                <div className="flex h-full flex-col justify-between p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                      {/* Replace with project-specific icon if available */}
                      <img
                        src={project.icon || 'https://via.placeholder.com/48'}
                        alt={project.title}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-blue-400 shadow">
                      <Link
                        href={project.href || '#'}
                        className="flex h-full w-full items-center justify-center text-blue-500 hover:text-blue-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologyIcons?.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-3 py-1 dark:border-gray-700 dark:bg-gray-800"
                      >
                        <img
                          src={tech.icon || 'https://via.placeholder.com/16'}
                          alt={tech.name}
                          className="h-4 w-4"
                        />
                        <span className="text-sm text-gray-800 dark:text-gray-300">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
