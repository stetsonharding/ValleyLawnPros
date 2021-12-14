import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#fff",
        width: "100%",
        height: "170px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <div>
        <p>Valley Lawn Pros &copy; 2021</p>
        <p
          style={{
            textAlign: "center",
            fontSize: ".9rem",
            padding: "0",
          }}
        >
          <a
            style={{ textDecoration: "none" }}
            href="https://www.termsfeed.com/live/d75e2caa-0641-47b7-9773-ec9dda66d0e2"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
