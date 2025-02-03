export default function CTASection() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 mb-10">
      <div className="relative overflow-hidden bg-[#3B82F6] rounded-3xl p-16">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#4F8BF7] rounded-full opacity-50 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4F8BF7] rounded-full opacity-50 -translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-white text-4xl font-bold max-w-xl mb-8">
            Ready to transform your learning institution?
          </h2>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#3B82F6] font-semibold rounded-lg hover:bg-blue-700 hover:text-white transition-colors"
          >
            Let's Partner
          </a>
        </div>
      </div>
    </div>
  );
}
