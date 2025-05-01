import { checkAuth, tryLogin } from "@/lib/auth";
import AdminContent from "@/components/admin/AdminContent";
import LoginForm from "@/components/admin/LoginForm";

export default async function AdminPage({ searchParams }) {
  const isAuthenticated = await checkAuth(); // Añadido await aquí
  const loginError = searchParams.error;

  async function handleLogin(formData) {
    "use server";
    const username = formData.get("username");
    const password = formData.get("password");

    if (await tryLogin(username, password)) {
      return { refresh: true };
    }
    return { redirect: "/admin?error=1" };
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cover bg-[url('https://images.pexels.com/photos/14011476/pexels-photo-14011476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] p-4">
        <div></div>
        <div className="w-full max-w-sm mb-12 space-y-4">
          {loginError && (
            <div className="p-3 bg-red-100 text-red-700 rounded text-center">
              Credenciales incorrectas
            </div>
          )}
          <LoginForm handleLogin={handleLogin} />
        </div>
      </div>
    );
  }

  return <AdminContent />;
}
