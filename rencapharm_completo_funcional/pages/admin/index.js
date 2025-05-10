import { useState } from "react";

export default function Admin() {
  const [auth, setAuth] = useState(false);
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (pass === "RENCAPHARMJERSON") setAuth(true);
  };

  if (!auth)
    return (
      <div className="p-4">
        <h1>Admin Login</h1>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Contraseña"
          className="border p-2"
        />
        <button onClick={handleLogin} className="ml-2 px-4 py-2 bg-green-700 text-white">Entrar</button>
      </div>
    );

  return (
    <div className="p-4">
      <h1>Panel Admin</h1>
      <p>Desde aquí puedes gestionar productos.</p>
    </div>
  );
}