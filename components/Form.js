import React from 'react';

const Form = ({ email, password, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="email">Email</label>
    <input
      onChange={handleChange}
      value={email}
      id="email"
      name="email"
    />
    <label htmlFor="password">Password</label>
    <input
      name="password"
      onChange={handleChange}
      value={password}
      type="password"
      id="password"
    />
    {password.length > 8 ? 'TU CONTRASEÑA ES MUY LARGA' : null}
    <input disabled={!password || !email} type="submit" />
  </form>
);

export default Form;
