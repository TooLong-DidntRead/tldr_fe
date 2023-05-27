import { ConcernShape } from "./interfaces";

interface TOSReturn {
  data: ConcernShape[];
};

const processTOS = async (tos: string, concerns: string[], user: number | null): Promise<TOSReturn> => {
  
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
  };

  const response = await fetch(
    "https://ec2-3-18-245-190.us-east-2.compute.amazonaws.com/api/v1/queries",
    details
  );

  if (!response.ok) {
    const res = await response.json();
    throw new Error(res.statusText);
  };

  return response.json();
};


export const processTOSPDF = async (file: File, concerns: string[], user: number | null): Promise<TOSReturn> => {
  var data = new FormData()
  data.append('file', file)
  concerns.forEach(concern => data.append('areas_of_focus', concern));
  user && data.append('user', user.toString())

  const details = {
    method: "POST",
    headers: {},
    body: data
  };
  
  const response = await fetch(
    "https://ec2-3-18-245-190.us-east-2.compute.amazonaws.com/api/v1/queries",
    details
  );

  if (!response.ok) {
    const res = await response.json();
    throw new Error(res.statusText);
  };

  return response.json();
};


export default processTOS;
