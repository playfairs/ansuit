export const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
};

export function color(text: string, code: string): string {
  return `${code}${text}${colors.reset}`;
}

export function red(text: string): string {
  return color(text, colors.red);
}

export function green(text: string): string {
  return color(text, colors.green);
}

export function yellow(text: string): string {
  return color(text, colors.yellow);
}

export function blue(text: string): string {
  return color(text, colors.blue);
}
