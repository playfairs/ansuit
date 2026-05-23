export function upper(str: string): string {
  return str.toUpperCase();
}

export function lower(str: string): string {
  return str.toLowerCase();
}

export function title(str: string): string {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
