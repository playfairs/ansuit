import { exec as nodeExec } from 'node:child_process';

export async function exec(cmd: string): Promise<string> {
  return new Promise((resolve, reject) => {
    nodeExec(cmd, (error, stdout, _stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}
