"use client";

export default function Signup() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <form className="col-md-4 border p-4 rounded">
        <h3 className="mb-3">Signup</h3>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Name"
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />

        <select className="form-select mb-3">
          <option value="client">Client</option>
          <option value="editor">Editor</option>
        </select>

        <button className="btn btn-dark w-100">
          Signup
        </button>
      </form>
    </div>
  );
}
