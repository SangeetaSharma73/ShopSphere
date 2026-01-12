import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>

      {user ? (
        <>
          <span>Hello, {user.name}</span>
          <Link to="/orders">Orders</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </header>
  );
};

export default Header;
