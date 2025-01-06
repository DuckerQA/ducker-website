import Image from 'next/image'

export default function PerceivablePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">LVL 1: Perceivable – Can You See and Hear It? 🦆</h1>
        <p className="mt-4 text-lg text-gray-600">
          The <strong>Perceivable</strong> principle ensures that everyone, regardless of their
          ability to see or hear perfectly, can access and understand your content. If users can’t
          hear, see, or read your content properly, you need to help them!
        </p>
      </header>

      <main>
        {/* Section 1: Problems with hearing */}
        <section className="mb-16">
          <div className="mb-8 flex items-center">
            <Image
              src="/static/images/articles-media/duckerOk.png"
              alt="Duck with an ear trumpet"
              width={192}
              height={192}
              className="mr-8"
            />
            <h2 className="text-3xl font-bold">1. Problems with hearing – "I can't hear" 🎧</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Example 1 */}
            <div className="rounded-lg bg-blue-100 p-6 shadow-md">
              <h3 className="text-2xl font-semibold">Example 1: Missing captions in video</h3>
              <p className="mt-2 text-gray-700">
                🗨️ <em>"I can't hear your video, I need captions!"</em>
              </p>
              <p className="mt-4 font-medium text-blue-600">
                👉 Solution: Always provide captions for videos.
              </p>
            </div>

            {/* Example 2 */}
            <div className="rounded-lg bg-green-100 p-6 shadow-md">
              <h3 className="text-2xl font-semibold">
                Example 2: Audio-only content without alternatives
              </h3>
              <p className="mt-2 text-gray-700">
                🗨️ <em>"There's nothing here for me to read. What’s this about?"</em>
              </p>
              <p className="mt-4 font-medium text-blue-600">
                👉 Solution: Add transcriptions for podcasts and audio content.
              </p>
            </div>

            {/* Example 3 */}
            <div className="rounded-lg bg-yellow-100 p-6 shadow-md">
              <h3 className="text-2xl font-semibold">
                Example 3: Alerts and notifications without visual cues
              </h3>
              <p className="mt-2 text-gray-700">
                🗨️ <em>"Did something happen? I didn’t hear anything!"</em>
              </p>
              <p className="mt-4 font-medium text-blue-600">
                👉 Solution: Use visual indicators for audio alerts.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Problems with vision */}
        <section className="mb-16">
          <div className="mb-8 flex items-center">
            <Image
              src="/static/images/articles-media/duckerOk.png"
              alt="Duck with thick glasses"
              width={192}
              height={192}
              className="mr-8"
            />
            <h2 className="text-3xl font-bold">2. Problems with vision – "I can't see well" 👓</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Example 1 */}
            <div className="rounded-lg bg-blue-100 p-6 shadow-md">
              <h3 className="text-2xl font-semibold">Example 1: Poor contrast</h3>
              <p className="mt-2 text-gray-700">
                🗨️ <em>"Poor contrast? Well... I can barely see anything."</em>
              </p>
              <p className="mt-4 font-medium text-blue-600">
                👉 Solution: Ensure sufficient contrast between text and background.
              </p>
            </div>

            {/* Example 2 */}
            <div className="rounded-lg bg-green-100 p-6 shadow-md">
              <h3 className="text-2xl font-semibold">Example 2: Missing alt text</h3>
              <p className="mt-2 text-gray-700">
                🗨️ <em>"Can you describe the image for me?"</em>
              </p>
              <p className="mt-4 font-medium text-blue-600">
                👉 Solution: Always add alt text to images.
              </p>
            </div>

            {/* Example 3 */}
            <div className="rounded-lg bg-yellow-100 p-6 shadow-md">
              <h3 className="text-2xl font-semibold">Example 3: Small text requiring zoom</h3>
              <p className="mt-2 text-gray-700">
                🗨️ <em>"Can you zoom it in so I can see it better?"</em>
              </p>
              <p className="mt-4 font-medium text-blue-600">
                👉 Solution: Ensure your page works well when zoomed in.
              </p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section>
          <h2 className="mb-6 text-3xl font-bold">Summary 🏁</h2>
          <p className="text-gray-700">
            To make your content perceivable, always think about users who:
          </p>
          <ul className="mt-4 list-inside list-disc text-gray-700">
            <li>
              <strong>Can’t hear well</strong> → Add captions, transcriptions, and visual alerts.
            </li>
            <li>
              <strong>Can’t see well</strong> → Ensure contrast, alt text, and proper zoom support.
            </li>
          </ul>
          <p className="mt-6 text-gray-700">
            Want to learn more about how to implement perceivable content? Check out these sections
            in <strong>LVL 2: Accessibility Basics</strong>:
          </p>
        </section>
      </main>
    </div>
  )
}
