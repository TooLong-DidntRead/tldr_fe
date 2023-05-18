import { ConcernShape } from "./interfaces";

interface TOSReturn {
  data: ConcernShape[];
};

const processTOS = async (tos: string, concerns: string[], setError: Function, user: number | null): Promise<TOSReturn> => {
  const response = await fetch(
    "https://tldr-api.onrender.com/api/v1/queries",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          user: user,
          tos: tos,
          concerns: concerns,
        },
      }),
    }
  );

  console.log(response)

  if (!response.ok) {
    const res = await response.json();
    throw new Error(res.statusText);
  }

  return response.json();
};

export default processTOS;
