import React from "react";
import "./form.css";

function Form() {
  return (
    <main className="formBody">
      <div className="form">
        <h2>notify me of new updates</h2>
        <div>
          <input type="email" name="email" placeholder="Enter Email" />
        </div>
        <div>
          <button>Notify Me</button>
        </div>
      </div>
    </main>
  );
}

export default Form;
