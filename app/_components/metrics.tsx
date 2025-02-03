export default function MetricsSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      <div className="bg-blue-600 rounded-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-24 sm:w-40 h-24 sm:h-40 bg-blue-500 rounded-full opacity-30 translate-x-10 translate-y-10" />
        <div className="absolute bottom-0 left-1/4 w-16 sm:w-32 h-16 sm:h-32 bg-blue-500 rounded-full opacity-30 translate-y-10" />

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-center text-white">
          <div>
            <div className="text-3xl sm:text-4xl font-bold mb-1">1</div>
            <div className="text-sm sm:text-base opacity-90">Year</div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-bold mb-1">500+</div>
            <div className="text-sm sm:text-base opacity-90">
              Challenges Completed
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-bold mb-1">10K+</div>
            <div className="text-sm sm:text-base opacity-90">Users</div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-bold mb-1">6+</div>
            <div className="text-sm sm:text-base opacity-90">Countries</div>
          </div>
        </div>
      </div>
    </div>
  );
}
