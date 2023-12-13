"use client";
import React, { useState } from "react";
import { User } from "./types";
import { signup } from "./api";

export default function Signup() {
  const [user, setUser] = useState<User>({
    user: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      user: {
        ...user.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup user", user);
    try {
      const response = await signup(user);
      console.log("Signup successful", response);
      // 成功した場合の処理をここに記述
    } catch (error) {
      console.error("Signup error", error);
      // エラーハンドリングをここに記述
    }
  };

  return (
    <main>
      <h1>This page is sign up!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.user.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          value={user.user.password_confirmation}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
}
