import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const APP_CREDENTIALS = {
  username: process.env.ADMIN_USERNAME || "admin",
  passwordHash:
    process.env.ADMIN_PASSWORD_HASH ||
    "$2a$10$XlQyJ0WjUuVjG7LZz5bW3eJf6YdP9rC2vB1nA3sD4gH5kL6mN7oP8q",
};

function secureCompare(a, b) {
  try {
    const aBuf = Buffer.from(a?.toString() || "");
    const bBuf = Buffer.from(b?.toString() || "");
    return aBuf.length === bBuf.length && crypto.timingSafeEqual(aBuf, bBuf);
  } catch {
    return false;
  }
}

export async function tryLogin(username, password) {
  console.log("Intento de login con:", { username });

  try {
    if (!password || !APP_CREDENTIALS.passwordHash) {
      console.error("Falta password o hash");
      return false;
    }

    const validPass = await bcrypt.compare(
      password,
      APP_CREDENTIALS.passwordHash
    );
    const validUser = secureCompare(username, APP_CREDENTIALS.username);

    console.log("Resultados:", { validUser, validPass });

    if (validUser && validPass) {
      const cookieStore = await cookies(); // Ahora con await
      cookieStore.set("app-auth", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
        path: "/admin",
      });
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error en tryLogin:", error);
    return false;
  }
}

export async function checkAuth() {
  try {
    const cookieStore = await cookies(); // Ahora con await
    const authCookie = cookieStore.get("app-auth");
    const isAuth = authCookie?.value === "true";
    console.log("CheckAuth result:", isAuth);
    return isAuth;
  } catch (error) {
    console.error("Error en checkAuth:", error);
    return false;
  }
}
