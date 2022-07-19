import Head from "next/head";
import React, { useState } from "react";
import FormInput from "../components/formComponents/FormInput";
import Navbar from "../components/Navbar";
import Button from "../components/formComponents/Button";

const login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([  ])

  const handleLogin = async event => {
    event.preventDefault()

    console.log(email)
}

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Navbar />
      <div className="mt-10 pt-20">
        <h1 className="mt-10 text-3xl font-bold text-center ease-in-out duration-500">
          LOGIN
        </h1>
        <form onSubmit={handleLogin}>
          {email}
        <div className="w-[80%] md:w-[40%] p=10 rounded-md mt-200 mx-auto">
          <FormInput
            type="email"
            value={email}
            name="email"
            onChange={event => setEmail(event.target.value)}
            required
            autoFocus
            placeholder="Enter email"
            autocomplete="off"
          />
          <FormInput
            type="password"
            value={password}
            name="password"
            onChange={event => setPassword(event.target.value)}
            required
            autoFocus
            placeholder="Password"
          />
          <Button>Login</Button>

        </div>
        </form>
      </div>
    </>
  );
};

export default login;
