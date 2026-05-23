import { input } from './input.js';

export async function confirm(prompt: string): Promise<boolean> {
  const answer = await input(`${prompt} [y/N] `);
  return answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes';
}
