export async function fetch(url: string, options?: RequestInit): Promise<Response> {
  return await globalThis.fetch(url, options);
}
