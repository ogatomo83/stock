import { User } from "./types";

export const signup = async (user: User) => {
  try {
    const response = await fetch(`http://stock.com/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Signup failed");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
