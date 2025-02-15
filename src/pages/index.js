export default function Home() {
  return (
    <main style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center", backgroundColor: "#f3f4f6" }}>
      <button
        onClick={() => alert("Hello, World!")}
        style={{ padding: "12px 24px", fontSize: "18px", fontWeight: "bold", backgroundColor: "#3b82f6", color: "white", borderRadius: "8px", border: "none", cursor: "pointer" }}
      >
        Click Me!
      </button>
    </main>
  );
}
