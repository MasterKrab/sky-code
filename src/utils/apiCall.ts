import parseToObject from "./parseToObject";

const parseResponse = async (response: Response, route: string) =>
  route === "run"
    ? parseToObject(await response.text())
    : await response.json();

const apiCall = <ResultType>(
  route: "run" | "test" | "test-many",
  body: Object
): Promise<ResultType> =>
  fetch(`${import.meta.env.VITE_API_URL}/${route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (response: Response) => {
    if (!response.ok) throw new Error((await response.json()).message);

    const result = await parseResponse(response, route);

    return result;
  });

export default apiCall;
