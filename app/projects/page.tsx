import projectsData from '@/data/projectsData'
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
  if (!Array.isArray(projectsData)) {
    console.error('projectsData is not an array!')
    return <div>Error: Invalid projects data.</div>
  }

  return (
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
              className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-px shadow transition-transform duration-300
              hover:scale-105 hover:shadow-lg dark:border-white/10 dark:bg-[#1c1e26]"
            >
              <div className="flex h-full flex-col justify-between p-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                  {/* Circle Icon */}
                  <div className="flex h-12 w-12 items-center justify-center" aria-hidden="true">
                    {project.icon && (
                      <Image
                        src={project.icon}
                        alt=""
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    )}
                  </div>

                  {/* Arrow Link */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-blue-400 shadow dark:border-[#a3b2ff]">
                    <Link
                      href={project.href || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-full w-full items-center justify-center text-blue-500 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-[#a3b2ff] dark:hover:text-[#8c8fff] dark:focus-visible:ring-[#a3b2ff]"
                      aria-label={`Open project: ${project.title}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 16.293a1 1 0 001.414 0l4-4a1 1 0 000-1.414l-4-4a1 1 0 10-1.414 1.414L14.586 11H5a1 1 0 100 2h9.586l-2.293 2.293a1 1 0 000 1.414z"
                          clipRule="evenodd"
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
                  {Array.isArray(project.technologyIcons) &&
                    project.technologyIcons.map((tech, techIndex) => {
                      const techName = typeof tech === 'string' ? tech : tech.name || 'Unknown'
                      const techIcon = typeof tech === 'object' && tech.icon ? tech.icon : null

                      return (
                        <div
                          key={techIndex}
                          className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-3 py-1 dark:border-gray-700 dark:bg-gray-800"
                        >
                          {/* Circle Wrapper for Icon */}
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                            {techIcon && (
                              <Image
                                src={techIcon}
                                alt={techName}
                                width={16}
                                height={16}
                                className="object-contain"
                              />
                            )}
                          </div>
                          <span className="text-sm text-gray-800 dark:text-gray-300">
                            {techName}
                          </span>
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
