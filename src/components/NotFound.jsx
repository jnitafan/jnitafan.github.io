import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect back to the app’s homepage ("/")
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>404 – Page Not Found</h1>
      <p>Redirecting to homepage…</p>
    </div>
  );
};

export default NotFound;
