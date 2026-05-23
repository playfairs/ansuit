import { pipeline } from 'node:stream/promises';

export async function pipe(...streams: Array<NodeJS.ReadableStream | NodeJS.WritableStream>): Promise<void> {
  for (let i = 0; i < streams.length - 1; i++) {
    await pipeline(streams[i] as NodeJS.ReadableStream, streams[i + 1] as NodeJS.WritableStream);
  }
}
