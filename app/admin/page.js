import AdminContent from "@/components/admin/AdminContent";
import LoginForm from "@/components/admin/LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Esta función debe estar fuera del componente
export async function handleLogin(formData) {
  "use server";

  const username = formData.get("username");
  const password = formData.get("password");

  const validUsername = process.env.USERNAME;
  const validPassword = process.env.PASS;

  if (username === validUsername && password === validPassword) {
    await cookies().set("admin-auth", "true", {
      maxAge: 60 * 60 * 24 * 30, // 30 días
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    redirect("/admin");
  }

  return { error: "Credenciales incorrectas" };
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("admin-auth");
  const isAuthenticated = authCookie?.value === "true";
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-sm mb-12 space-y-4">
          <LoginForm handleLogin={handleLogin} />
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen w-screen flex items-start justify-center">
      <AdminContent />
    </div>
  );
}
