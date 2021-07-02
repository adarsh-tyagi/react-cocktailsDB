import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>oops! this is dead end.</h1>
        <Link to="/" className="btn btn-primary">
          <FaHome /> home
        </Link>
      </div>
    </section>
  );
}
