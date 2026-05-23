import { input } from './input.js';

export async function select(prompt: string, options: string[]): Promise<string> {
  console.log(prompt);
  options.forEach((opt, i) => console.log(`  ${i + 1}. ${opt}`));
  const answer = await input('Select: ');
  const index = parseInt(answer || '0', 10) - 1;
  return options[index] ?? options[0] ?? '';
}
