// app/not-found.tsx

export default function NotFound() {
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404 - Page Not Found</h1>
      <p style={{ fontSize: "1.25rem", color: "#666" }}>
        Sorry, the page you're looking for doesn’t exist.
      </p>
    </div>
  );
}
