
const processTOS = async (tos:string, concerns:string[], setError:Function):Promise<void> =>  {
  try {
    const response = await fetch("https://2b7e0d8f-078d-48c9-8682-f1652a24a00b.mock.pstmn.io/api/v1/processTOS", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({data: {
        tos: tos,
        concerns: concerns
      }})
    })
    
    if(!response.ok) {
      const res = await response.json()
      throw new Error(res.statusText);
    }
    return response.json();

  } catch (error:any) {
    setError(error.message);
  }
}

export default processTOS;
