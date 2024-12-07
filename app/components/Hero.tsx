import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <Image
          src="/placeholder.svg?height=150&width=150"
          alt="John Doe"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">John Doe</h1>
        <h2 className="text-2xl text-gray-600 mb-6">Senior Software Engineer</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Passionate and experienced software engineer with 10+ years of expertise in building scalable web applications and leading development teams. Specialized in JavaScript, React, and Node.js.
        </p>
      </div>
    </section>
  )
}

