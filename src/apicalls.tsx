const processTOS = async (tos:string, concerns:string[]):Promise<void> =>  {
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
  const jsonData = await response.json();
  console.log('hotdog', jsonData);
}

export default processTOS;
