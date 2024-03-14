/* 
  decided to use any here because that's essentially what body can be

*/
export default function parseBody(body: string | null | Record<string, unknown>): any {
  if (!body) return {};
  if (typeof body === "string") return JSON.parse(body);
  return body;
}
