export default function LoginPage() {

  return (

    <main className="relative min-h-screen overflow-hidden bg-[#F7F7F7] text-[#222222] flex items-center justify-center px-6 py-24">

      {/* Soft Background Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF385C]/10 blur-[120px] rounded-full"></div>

      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-pink-200 blur-[120px] rounded-full"></div>

      {/* Login Card */}

      <div className="relative z-10 w-full max-w-md bg-white border border-gray-200 rounded-3xl p-10 shadow-[0_8px_28px_rgba(0,0,0,0.12)]">

        {/* Heading */}

        <h1 className="text-5xl tracking-tight font-bold text-center text-[#222222]">

          Welcome Back

        </h1>

        <p className="mt-4 text-[#717171] text-center text-lg">

          Login to continue exploring colleges

        </p>

        {/* Form */}

        <form className="mt-10 space-y-6">

          {/* Email */}

          <div>

            <label className="block text-[#717171] mb-3 text-sm font-medium">

              Email

            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#FF385C] transition"
            />

          </div>

          {/* Password */}

          <div>

            <label className="block text-[#717171] mb-3 text-sm font-medium">

              Password

            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#FF385C] transition"
            />

          </div>

          {/* Button */}

          <button
            type="submit"
            className="w-full bg-[#FF385C] hover:bg-[#E31C5F] hover:scale-[1.01] py-4 rounded-2xl text-lg font-semibold text-white transition"
          >

            Login

          </button>

        </form>

        {/* Footer */}

        <p className="mt-8 text-center text-[#717171]">

          Don’t have an account?

          <a
            href="/signup"
            className="text-[#FF385C] ml-2 font-semibold"
          >

            Sign Up

          </a>

        </p>

      </div>

    </main>

  );

}