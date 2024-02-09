"use client";
import React, { useState, useEffect } from "react";
import { getNews } from "./api";
import styles from "./page.module.scss";

// ニュースの型定義をインポートします。適宜パスを調整してください。
import { News } from "./types";

export default function NewsList() {
  const [newsList, setNewsList] = useState<News[]>([]); // ニュースの状態を保持するためのState
  const [isLoading, setIsLoading] = useState<boolean>(true); // ローディング状態を管理するためのState

  useEffect(() => {
    // ニュースデータを非同期で取得する
    const fetchNews = async () => {
      try {
        setIsLoading(true); // ローディング開始
        const newsData = await getNews(); // ニュースデータを取得
        setNewsList(newsData); // 取得したニュースデータをstateにセット
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setIsLoading(false); // ローディング終了
      }
    };

    fetchNews(); // ニュースデータの取得を実行
  }, []); // 空の依存配列を渡して、コンポーネントのマウント時にのみ実行

  return (
    <main className={styles.main}>
      {isLoading ? (
        <p>Loading...</p> // ローディング表示
      ) : (
        <ul>
          {newsList.map((newsItem) => (
            <li key={newsItem.id}>
              <p>{newsItem.url}</p>
              <div dangerouslySetInnerHTML={{ __html: newsItem.text }}></div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
