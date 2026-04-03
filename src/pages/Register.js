import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log("CLICK WORKING"); // ✅ check click

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      console.log("SUCCESS:", res);
      alert("Registered Successfully");
      navigate("/");
    } catch (err) {
      console.log("ERROR:", err);
      alert("Error registering");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Create Account</h2>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          style={styles.input}
        />

        <button
          onClick={handleSubmit}
          style={styles.button}
        >
          Register
        </button>

        <p onClick={() => navigate("/")} style={styles.link}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f5f5f5"
  },
  box: {
    padding: "30px",
    background: "#fff",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  },
  link: {
    color: "blue",
    cursor: "pointer",
    marginTop: "10px"
  }
};

export default Register;