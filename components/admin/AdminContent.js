"use client"; // Necesario para interactividad

import { useState } from "react";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

export default function AdminContent() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold">Gestión de Proyectos</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <button
          onClick={() => setShowForm(true)}
          className="mb-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Nuevo Proyecto
        </button>

        {showForm && (
          <ProjectForm
            onClose={() => setShowForm(false)}
            onSuccess={() => {
              setShowForm(false);
              // Aquí podrías recargar la lista de proyectos
            }}
          />
        )}
        {/* <ProjectList /> */}
      </main>
    </div>
  );
}
