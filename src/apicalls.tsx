import { ConcernShape } from "./interfaces";

interface TOSReturn {
  data: ConcernShape[];
};

const processTOS = async (tos: string, concerns: string[], setError: Function, user: number | null): Promise<TOSReturn> => {
  const jsonify = JSON.stringify( {
      areas_of_focus: concerns,
      tos: tos,
      user: user
    })
  console.log(jsonify)
  const response = await fetch(
    "https://tldr-api.onrender.com/api/v1/queries",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonify,
    }
  );

  console.log(response)

  if (!response.ok) {
    const res = await response.json();
    console.log(res)
    throw new Error(res.statusText);
  }

  return response.json();
};

export default processTOS;
