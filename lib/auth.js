import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

const APP_CREDENTIALS = {
  username: process.env.USERNAME || "admin",
  passwordHash:
    process.env.PASSWORD_HASH ||
    "$2a$10$XlQyJ0WjUuVjG7LZz5bW3eJf6YdP9rC2vB1nA3sD4gH5kL6mN7oP8q",
};

export async function tryLogin(username, password) {
  const validUser = username === APP_CREDENTIALS.username;
  const validPass = await bcrypt.compare(
    password,
    APP_CREDENTIALS.passwordHash
  );

  if (validUser && validPass) {
    const cookieStore = cookies();
    cookieStore.set("app-auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30 * 12,
      path: "/admin",
    });
    return true;
  }
  return false;
}

export async function checkAuth() {
  const cookieStore = cookies();
  return cookieStore.get("app-auth")?.value === "true";
}
