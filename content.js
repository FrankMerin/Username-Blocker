let inputs = document.querySelectorAll(
  'input[name="user"], input[name="username"], input[name="email"], input[name="userID"], \
  input[id="user"], input[id="username"], input[id="email"], input[ud="userID"], \
  input[name=userLoginId]'
);

for (const node of inputs) {
  node.setAttribute("type", "password");
  showButton(node);
}

function showButton(node) {
  const rect = node.getBoundingClientRect();
  let buttonOverlay = document.createElement("button");
  buttonOverlay.style.transform = `translate(${rect.x + 0.7 * rect.width}px, ${rect.y + 0.3 * rect.height}px)`;
  buttonOverlay.id = "buttonOverlay";
  buttonOverlay.textContent = "Show";
  document.body.appendChild(buttonOverlay);
  buttonOverlay.addEventListener("click", () => showButtonClicked(buttonOverlay, node));
}

function showButtonClicked(buttonOverlay, node) {
  if (node.type === "password") {
    node.setAttribute("type", "text");
    buttonOverlay.textContent = "Hide";
  } else {
    buttonOverlay.textContent = "Show";
    node.setAttribute("type", "password");
  }
}

function contentToBlock() {}

// turn on and off button

// Show button to view for every changed element

// user can input a name they want hidden, and the replacement they want,
// searches pages and replaces

// window resize listener
