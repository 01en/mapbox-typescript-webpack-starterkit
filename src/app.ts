export function main() {
  const map: HTMLElement | null = document.getElementById('map');
  if (map) {
    map.append("hoge");
  }

  return 'test'
}

main();