"use client";
import React, { useState } from "react";
import { User } from "./types";
import { login } from "./api";

import styles from "./page.module.scss";

export default function Signup() {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log("Login user", user);
    try {
      const response = await login(user);
      if (response.user.token) {
        sessionStorage.setItem("token", response.user.token);
      }
      console.log("Login successful", response);
      // 成功した場合の処理をここに記述
    } catch (error) {
      console.error("Login error", error);
      // エラーハンドリングをここに記述
    }
  };

  return (
    <main className={styles.siginup}>
      <h1>ログイン</h1>
      <div>
        <label htmlFor="email">メールアドレス</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="メールアドレスを入力してください"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="password">パスワード</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="パスワードを入力してください"
          value={user.password}
          onChange={handleChange}
        />
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
    </main>
  );
}
