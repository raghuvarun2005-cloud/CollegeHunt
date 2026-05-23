export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white flex items-center justify-center px-6">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      {/* Login Card */}

      <div className="relative z-10 w-full max-w-md bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

        {/* Heading */}

        <h1 className="text-4xl font-bold text-center">

          Welcome Back

        </h1>

        <p className="mt-4 text-gray-400 text-center">

          Login to continue exploring colleges

        </p>

        {/* Form */}

        <form className="mt-10 space-y-6">

          {/* Email */}

          <div>

            <label className="block text-gray-300 mb-3">

              Email

            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#030712] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 transition"
            />

          </div>

          {/* Password */}

          <div>

            <label className="block text-gray-300 mb-3">

              Password

            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-[#030712] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 transition"
            />

          </div>

          {/* Button */}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl text-lg font-semibold transition"
          >

            Login

          </button>

        </form>

        {/* Footer */}

        <p className="mt-8 text-center text-gray-400">

          Don’t have an account?
          <a
  href="/signup"
  className="text-blue-400 ml-2"
>
  Sign Up
</a>

        </p>

      </div>

    </main>
  );
}