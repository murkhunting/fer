"use client";

export default function LoginForm({ handleLogin }) {
  return (
    <form
      action={handleLogin}
      className="bg-white/10 shadow-md backdrop-blur-lg text-white px-12 py-18 space-y-4"
    >
      <input
        name="username"
        type="text"
        placeholder="Usuario"
        required
        className="w-full py-4 px-8 bg-white/10 shadow backdrop-blur"
      />
      <input
        name="password"
        type="password"
        required
        placeholder="Contraseña"
        className="w-full py-4 px-8 bg-white/10 shadow backdrop-blur"
      />
      <button
        type="submit"
        className="w-full bg-white/10 shadow backdrop-blur text-white mt-4 p-4 hover:bg-zinc-800"
      >
        Acceder
      </button>
    </form>
  );
}
