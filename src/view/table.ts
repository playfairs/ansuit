export function table(rows: string[][]): string {
  if (rows.length === 0) return '';

  const colWidths = rows[0]!.map((_, colIndex) => {
    return Math.max(...rows.map((row) => row[colIndex]?.length ?? 0));
  });

  return rows
    .map((row) => {
      return row
        .map((cell, i) => cell.padEnd(colWidths[i]!))
        .join(' | ');
    })
    .join('\n');
}
