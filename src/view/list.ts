export function list(items: string[]): string {
  return items.map((item, i) => `${i + 1}. ${item}`).join('\n');
}

export function bullet(items: string[]): string {
  return items.map((item) => `• ${item}`).join('\n');
}

export function dash(items: string[]): string {
  return items.map((item) => `- ${item}`).join('\n');
}
