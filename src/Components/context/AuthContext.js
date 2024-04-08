import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [user, setUser] = useState([]);

  async function getLoggedIn() {
    try {
      const response = await fetch("/auth/loggedIn", {
        method: "GET",
        credentials: "include", // This ensures that cookies are sent with the request
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setLoggedIn(data.auth);
      setUser(data.user);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error
    }
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, user, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
