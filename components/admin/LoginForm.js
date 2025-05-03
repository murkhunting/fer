export default function LoginForm({ handleLogin }) {
  return (
    <form
      action={handleLogin}
      className="bg-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] text-white px-12 py-18 space-y-4"
    >
      <div>
        <input
          name="username"
          type="text"
          placeholder="Usuario"
          required
          className="w-full py-4 px-8 bg-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] rounded-4xl"
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          required
          placeholder="Contraseña"
          className="w-full py-4 px-8 bg-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] rounded-4xl"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[20px] text-white mt-4 p-4 cursor-pointer hover:bg-white hover:text-zinc-600"
      >
        Acceder
      </button>
    </form>
  );
}
