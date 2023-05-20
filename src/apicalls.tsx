import { ConcernShape } from "./interfaces";

interface TOSReturn {
  data: ConcernShape[];
};

const processTOS = async (tos: string, concerns: string[], setError: Function, user: number | null): Promise<TOSReturn> => {
  
  const details = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify( {
      areas_of_focus: concerns,
      tos: tos,
      user: user
    }),
  }
  //https://tldr-api.onrender.com/api/v1/queries
  //https://4196c33d-8951-4a3a-8216-bffd37431cc2.mock.pstmn.io/api/v1/processTOS
  
  const response = await fetch(
    "https://tldr-api.onrender.com/api/v1/queries",
    details
  );

  if (!response.ok) {
    const res = await response.json();
    throw new Error(res.statusText);
  }

  return response.json();
};

export default processTOS;
