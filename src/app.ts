export function main() {
  const map: HTMLElement | null = document.getElementById('map');
  if (map) {
    map.append("hogehogehogehogehoge");
  }

  return 'test'
}

main();