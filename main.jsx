import React from "react";
import ReactDOM from "react-dom/client";
import App, { InstalarApp } from "./App.jsx";
import "./index.css";

class Protecao extends React.Component {
  constructor(p) { super(p); this.state = { erro: null }; }
  static getDerivedStateFromError(erro) { return { erro }; }
  componentDidCatch(erro, info) { try { window.__erro3s && window.__erro3s("ecra: " + (erro && erro.message), (erro && erro.stack || "") + "\n" + (info && info.componentStack || "")); } catch (e) {} }
  render() {
    if (!this.state.erro) return this.props.children;
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24, background: "#1B3355", color: "#F7EEDD", fontFamily: "-apple-system, sans-serif", textAlign: "center" }}>
        <p style={{ fontSize: 18, margin: 0 }}>Ocorreu um problema ao abrir a Escola 3S.</p>
        <button onClick={() => { location.href = "/"; }} style={{ marginTop: 18, padding: "12px 22px", borderRadius: 999, border: 0, background: "#C6A253", color: "#1B3355", fontWeight: 600, fontSize: 15 }}>Tentar outra vez</button>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Protecao>
      <App />
      {!/[?&]inscricao=/.test(window.location.search) && <InstalarApp />}
    </Protecao>
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => { navigator.serviceWorker.register("/sw.js").catch(() => {}); });
}
