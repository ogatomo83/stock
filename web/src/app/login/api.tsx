import { User } from "./types";

export const login = async (user: User) => {
  try {
    const response = await fetch(`http://stock.com/api/v1/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log("response", response);

    if (!response.ok) {
      throw new Error("Login failed");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
