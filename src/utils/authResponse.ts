export function handleResponse(
  data: any,
  status: number,
  headers: any = undefined,
) {
  const options = {
    status,
    headers: undefined,
  };

  if (headers) {
    options.headers = headers;
  }

  return new Response(JSON.stringify(data), options);
}
