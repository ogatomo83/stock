"use client";
import React, { useState } from "react";
import { User } from "./types";
import { signup } from "./api";

import styles from "./page.module.scss";

export default function Signup() {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
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
    <main className={styles.siginup}>
      <h1>新規登録</h1>
      <div>
        <label htmlFor="name">お名前</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="名前を入力してください"
          value={user.name}
          onChange={handleChange}
        />
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
        <label htmlFor="password_confirmation">パスワード（確認用）</label>
        <input
          id="password_confirmation"
          type="password"
          name="password_confirmation"
          placeholder="パスワードを再入力してください"
          value={user.password_confirmation}
          onChange={handleChange}
        />
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
    </main>
  );
}
