export default function LoginForm({ handleLogin }) {
  return (
    <form
      action={handleLogin}
      className="bg-white/50  shadow-lg backdrop-blur-md text-zinc-800 p-12 space-y-4"
    >
      <div>
        <label className="block text-sm font-medium mb-1">USUARIO:</label>
        <input
          name="username"
          type="text"
          required
          className="w-full px-3 py-3 border"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">CONSTRASEÑA:</label>
        <input
          name="password"
          type="password"
          required
          className="w-full px-3 py-3 border"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-zinc-800 text-white mt-4 py-3 px-4 hover:bg-zinc-700"
      >
        Acceder
      </button>
    </form>
  );
}
