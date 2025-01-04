export default function AccessibilityPageMain() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Accessibility Learning Path</h1>
        <p className="mt-4 text-lg text-gray-600">
          Master accessibility testing with these essential topics tailored for QA professionals.
          Progress through levels and become an Accessibility Champion!
        </p>
      </header>

      <main>
        {/* Section 1: Introduction to Accessibility */}
        <section className="mb-12">
          <h2 className="mb-6 text-center text-3xl font-bold">
            LVL 1: Introduction to Accessibility
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-blue-100 p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Perceivable</h3>
              <p className="mt-2 text-gray-700">
                Ensure that content is visible and readable for everyone. Examples include colors,
                contrast, and alt text.
              </p>
              <a
                href="/accessibility/perceivable"
                className="mt-4 inline-block font-medium text-blue-600 hover:underline"
              >
                Learn more &rarr;
              </a>
            </div>
            <div className="rounded-lg bg-green-100 p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Operable</h3>
              <p className="mt-2 text-gray-700">
                Key principles for keyboard navigation and interaction accessibility.
              </p>
              <a
                href="/accessibility/operable"
                className="mt-4 inline-block font-medium text-green-600 hover:underline"
              >
                Learn more &rarr;
              </a>
            </div>
            <div className="rounded-lg bg-yellow-100 p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Understandable</h3>
              <p className="mt-2 text-gray-700">
                Simplify content, avoid jargon, and ensure clear structure.
              </p>
              <a
                href="/accessibility/understandable"
                className="mt-4 inline-block font-medium text-yellow-600 hover:underline"
              >
                Learn more &rarr;
              </a>
            </div>
            <div className="rounded-lg bg-purple-100 p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Robust</h3>
              <p className="mt-2 text-gray-700">
                Create content that works seamlessly with assistive technologies like screen
                readers.
              </p>
              <a
                href="/accessibility/robust"
                className="mt-4 inline-block font-medium text-purple-600 hover:underline"
              >
                Learn more &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Section 2: Accessibility Basics */}
        <section className="mb-12">
          <h2 className="mb-6 text-center text-3xl font-bold">LVL 2: Accessibility Basics</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-blue-100 p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Understand ARIA Roles</h3>
              <p className="mt-2 text-gray-700">
                Learn what ARIA roles are, when to use them, and how to test their implementation.
              </p>
              <a
                href="/accessibility/aria-roles"
                className="mt-4 inline-block font-medium text-blue-600 hover:underline"
              >
                Learn more &rarr;
              </a>
            </div>
            <div className="rounded-lg bg-green-100 p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Keyboard Navigation / Focus Management</h3>
              <p className="mt-2 text-gray-700">
                Test focus management, <code>tabindex</code>, and keyboard interactions.
              </p>
              <a
                href="/accessibility/keyboard-navigation"
                className="mt-4 inline-block font-medium text-green-600 hover:underline"
              >
                Learn more &rarr;
              </a>
            </div>
            <div className="rounded-lg bg-yellow-100 p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Screen Readers</h3>
              <p className="mt-2 text-gray-700">
                Introduction to NVDA, VoiceOver, and other screen readers. Learn how to test on
                different systems.
              </p>
              <a
                href="/accessibility/screen-readers"
                className="mt-4 inline-block font-medium text-yellow-600 hover:underline"
              >
                Learn more &rarr;
              </a>
            </div>
            <div className="rounded-lg bg-purple-100 p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Color Contrast and Design</h3>
              <p className="mt-2 text-gray-700">
                Learn WCAG color contrast requirements and how to validate them.
              </p>
              <a
                href="/accessibility/color-contrast"
                className="mt-4 inline-block font-medium text-purple-600 hover:underline"
              >
                Learn more &rarr;
              </a>
            </div>
            <div className="rounded-lg bg-pink-100 p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Accessible Forms</h3>
              <p className="mt-2 text-gray-700">
                Proper labels, hints, and validation for accessible forms.
              </p>
              <a
                href="/accessibility/forms"
                className="mt-4 inline-block font-medium text-pink-600 hover:underline"
              >
                Learn more &rarr;
              </a>
            </div>
            <div className="rounded-lg bg-teal-100 p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Dynamic Content and ARIA Live Regions</h3>
              <p className="mt-2 text-gray-700">
                Test dynamic content like alerts and notifications using ARIA live regions.
              </p>
              <a
                href="/accessibility/dynamic-content"
                className="mt-4 inline-block font-medium text-teal-600 hover:underline"
              >
                Learn more &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Pozostałe sekcje */}

        {/* Section 3: Advanced Accessibility */}
        <section className="mb-12">
          <h2 className="mb-6 text-center text-3xl font-bold">LVL 3: Advanced Accessibility</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-blue-100 p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Accessible Single Page Applications (SPA)</h3>
              <p className="mt-2 text-gray-700">
                Test dynamic page loading and manage focus in SPA.
              </p>
            </div>
            <div className="rounded-lg bg-green-100 p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Video and Audio Accessibility</h3>
              <p className="mt-2 text-gray-700">
                Add captions, audio descriptions, and test multimedia players.
              </p>
            </div>
            <div className="rounded-lg bg-yellow-100 p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Handling Complex Widgets</h3>
              <p className="mt-2 text-gray-700">
                Create and test custom components like dropdowns, carousels, and tables.
              </p>
            </div>
            <div className="rounded-lg bg-purple-100 p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Mobile Accessibility</h3>
              <p className="mt-2 text-gray-700">
                Test responsiveness and interactions on various devices, including gestures for
                mobile users.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Automation Testing for Accessibility */}
        <section>
          <h2 className="mb-6 text-center text-3xl font-bold">
            LVL 4: Automation Testing for Accessibility
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-blue-100 p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Automated Accessibility Tools</h3>
              <p className="mt-2 text-gray-700">
                Leverage tools like Axe, Lighthouse, and Wave for automated testing.
              </p>
            </div>
            <div className="rounded-lg bg-green-100 p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">CI/CD Integration</h3>
              <p className="mt-2 text-gray-700">
                Integrate accessibility testing into your continuous integration pipeline.
              </p>
            </div>
            <div className="rounded-lg bg-yellow-100 p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Accessibility Reports and Metrics</h3>
              <p className="mt-2 text-gray-700">
                Automate detailed accessibility reports and track progress.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
