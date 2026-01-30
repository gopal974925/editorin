"use client";

export default function Login() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <form className="col-md-4 border p-4 rounded">
        <h3 className="mb-3">Login</h3>

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

        <button className="btn btn-dark w-100">
          Login
        </button>
      </form>
    </div>
  );
}
