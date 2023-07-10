let interactionsCount = 0;

function hoverEffect(e) {
  const square = e.target;
  square.style.backgroundColor = getRandomColor();
  
  const currentColor = square.style.backgroundColor;
  const rgb = currentColor.match(/\d+/g);
  const [r, g, b] = rgb.map(Number);
  
  const darkenFactor = 0.1 * interactionsCount;
  const newColor = `rgb(${Math.floor(r * (1 - darkenFactor))}, ${Math.floor(g * (1 - darkenFactor))}, ${Math.floor(b * (1 - darkenFactor))})`;
  square.style.backgroundColor = newColor;
  
  interactionsCount++;
}
