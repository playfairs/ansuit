import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  version: z.string(),
});

export function validate(data: unknown): z.infer<typeof schema> {
  return schema.parse(data);
}
