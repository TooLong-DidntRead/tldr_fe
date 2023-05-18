import { ConcernShape } from "./interfaces";

interface TOSReturn {
  data: ConcernShape[];
};

const processTOS = async (tos: string, concerns: string[], setError: Function, user: number | null): Promise<TOSReturn> => {
  const response = await fetch(
    "https://2b7e0d8f-078d-48c9-8682-f1652a24a00b.mock.pstmn.io/api/queries",
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
