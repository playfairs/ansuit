export interface RequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

export async function req(url: string, options: RequestOptions = {}): Promise<Response> {
  return await fetch(url, options);
}
