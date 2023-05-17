import { ConcernsShape } from "./interfaces";

interface TOSReturn {
  data: {
    concerns: ConcernsShape
  };
}

const processTOS = async (tos: string, concerns: string[], setError: Function): Promise<TOSReturn> => {
  const response = await fetch(
    "https://4196c33d-8951-4a3a-8216-bffd37431cc2.mock.pstmn.io/api/v1/processTOS",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          tos: tos,
          concerns: concerns,
        },
      }),
    }
  );

  if (!response.ok) {
    const res = await response.json();
    throw new Error(res.statusText);
  }

  return response.json();
};

export default processTOS;
