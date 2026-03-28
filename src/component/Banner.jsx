import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative min-h-auto lg:min-h-162.5 flex items-center overflow-hidden py-10 lg:py-0">
      <div className=" max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 w-full">
        {/* Left Content */}
        <div className="space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium px-5 py-2 rounded-full w-fit">
            ✨ Frontier AI Models
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-red-600">
            One Subscription.
            <br />
            <span className="bg-linear-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              All the AIs You Need
            </span>
          </h1>

          <p className="text-base lg:text-lg text-zinc-700 max-w-lg mx-auto lg:mx-0">
            Experience the full spectrum of frontier intelligence — all the most
            advanced AI models, unified under a single, powerful subscription.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <button className="bg-red-600 hover:bg-red-500 transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-red-500/30 flex items-center gap-3 group text-white">
              Get Unlimited Access
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:flex lg:items-center lg:gap-8 text-sm text-zinc-600 pt-6">
            <div>✓ 50+ Frontier Models</div>
            <div>✓ No Usage Limits</div>
            <div>✓ Cancel Anytime</div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="relative w-full max-w-md lg:max-w-none">
            <img
              className="relative h-auto max-h-80 lg:max-h-130 w-full object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
