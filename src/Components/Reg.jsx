import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./reg.css";
import Login from "./Context/Login";

const Reg = () => {
  const { setLogin, setPassword, setName, name, login, password } = useContext(Login);
  const handleSubmit = (e) => {
    e.preventDefault()
      localStorage.setItem("name", name);
      localStorage.setItem("login", login);
      localStorage.setItem("password", password);
    //   setLogin("");
    //   setName("");
    //   setPassword("");
      console.log(setLogin);
    };
  return (
    <div>
      <>
        <div className="topSection">
          <Link className="home" to="/router">
            Home{" "}
          </Link>
          <p className="Collections"> / Login </p>
        </div>
        <div className="login">
          <div className="logo">
            <svg
              width="40"
              height="40"
              viewBox="0 0 240 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
            >
              <rect
                width="240"
                height="240"
                rx="44"
                fill="url(#paint0_linear_2_2)"
              ></rect>
              <path
                d="M134.415 78.2608L175.976 144.738C183.055 156.061 174.915 170.75 161.561 170.75H78.4386C65.0852 170.75 56.945 156.061 64.024 144.738L105.585 78.2608C112.244 67.6102 127.756 67.6102 134.415 78.2608Z"
                stroke="white"
                stroke-width="14"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_2_2"
                  x1="0"
                  y1="120"
                  x2="240"
                  y2="120"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#8E2DE2"></stop>
                  <stop offset="1" stop-color="#4A00E0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="inps">
            <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Name" value={name} onClick={(e) => setName(e.target.value)}/>
            <input type="email" placeholder="Email" value={login} onChange={(e) => setLogin(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onClick={(e) => setPassword(e.target.value)}/>
          <button class="btn" type="submit">
            Sign Up
          </button>
            </form>
          </div>
          <div className="signup">
            <p>Don't have an account?</p>
            <Link>Sign Up</Link>
          </div>
        </div>
      </>
    </div>
  );
};

export default Reg;
