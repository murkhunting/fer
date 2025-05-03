export default function LoginForm({ handleLogin }) {
  return (
    <form
      action={handleLogin}
      className=" shadow-lg glass text-white px-12 py-18 space-y-4"
    >
      <div>
        <input
          name="username"
          type="text"
          placeholder="Usuario"
          required
          className="w-full py-4 px-8 glass rounded-4xl"
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          required
          placeholder="Contraseña"
          className="w-full py-4 px-8 glass rounded-4xl"
        />
      </div>
      <button
        type="submit"
        className="w-full glass text-white mt-4 p-4 cursor-pointer hover:bg-white hover:text-zinc-600"
      >
        Acceder
      </button>
    </form>
  );
}
