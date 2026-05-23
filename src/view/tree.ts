interface Node {
  name: string;
  children?: Node[];
}

export function tree(root: Node, prefix = ''): string {
  let result = prefix + root.name + '\n';

  if (root.children) {
    const last = root.children.length - 1;
    root.children.forEach((child, i) => {
      const isLast = i === last;
      result += tree(child, prefix + (isLast ? '└── ' : '├── '));
    });
  }

  return result;
}
