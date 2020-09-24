let inputs = document.querySelectorAll(
  'input[name="user"], input[name="username"], input[name="email"], input[name="userID"]'
);

for (const input of inputs) {
  input.setAttribute("type", "password");
  showButton(input);
}

function showButton(node) {
  const rect = node.getBoundingClientRect();
  let buttonOverlay = document.createElement("button");
  buttonOverlay.style.transform = `translate(${rect.x}px, ${rect.y}px)`;
  buttonOverlay.id = "buttonOverlay";
  buttonOverlay.textContent = "Show";
  document.body.appendChild(buttonOverlay);
}

function buttonClicked() {}

function contentToBlock() {}

// turn on and off button

// Show button to view for every changed element

// user can input a name they want hidden, and the replacement they want,
// searches pages and replaces
