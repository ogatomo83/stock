export const getNews = async () => {
  try {
    const response = await fetch(`http://stock.com/api/v1/news`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
