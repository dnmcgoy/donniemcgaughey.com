export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact</h2>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">Feel free to reach out to me for any opportunities or collaborations.</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <a href="mailto:john.doe@example.com" className="text-blue-600 hover:underline">john.doe@example.com</a>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/johndoe</a>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/johndoe</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

