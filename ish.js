const container = document.getElementById("container");
const newGridBtn = document.getElementById("new-grid-btn");

function createGrid(size) {
    container.innerHTML = "";
    container.style.setProperty("--grid-size", size);
  
    const squareSize = 960 / size - 2; // Adjusted size for each square
  
    for (let i = 0; i < size * size; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      container.appendChild(square);
    }
  }
  
  
  
  
  
  

function hoverEffect(e) {
  e.target.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

newGridBtn.addEventListener("click", function() {
  const size = parseInt(prompt("Enter the number of squares per side (up to 100):"), 10);

  if (isNaN(size) || size <= 0 || size > 100) {
    alert("Invalid input! Please enter a number between 1 and 100.");
    return;
  }

  createGrid(size);
});

container.addEventListener("mouseover", hoverEffect);

// Generate initial grid
createGrid(16);
