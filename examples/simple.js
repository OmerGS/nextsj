const readline = require('readline');

let pages = {};
let pageOrder = [];
let buildStep = 0;

const quotes = [
  "NextSJ: because someone had to make a trash framework.",
  "Compiling your dreams… into undefined variables.",
  "Warning: may cause existential developer crisis.",
  "Sometimes it works… sometimes it's spaghetti.",
  "NextSJ: the framework your stackoverflow fears.",
  "We put the 'oops' in 'function'.",
  "Debugging is optional. Chaos is mandatory."
];

function fakeLog(msg) {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(`[NextSJ] ${msg} — "${quote}"`);
}

function startServer(port) {
  fakeLog(`Initializing server on port ${port}…`);
  fakeLog(`Loading half-broken middlewares…`);
  fakeLog(`Connecting to database… hope it exists.`);
  setTimeout(() => fakeLog(`Server is probably ready at http://localhost:${port}`), 500);
}

function createPage(name, callback) {
  pages[name] = callback || (() => console.log(`Page ${name} displayed… maybe.`));
  pageOrder.push(name);
  fakeLog(`Creating page "${name}"… compiler praying.`);
  fakeLog(`Compiling "${name}" with 73% efficiency, 27% chaos.`);
}

function simulateBuild() {
  buildStep++;
  if (buildStep % 2 === 0) {
    fakeLog("Compiling modules… almost lost all hope.");
    console.log("Warning: unused variable 'life'");
  } else {
    fakeLog("Build failed. Just kidding… or not.");
    console.log("Error: something went terribly right");
  }
}

function renderMenu(selected) {
  console.clear();
  fakeLog("Booting NextSJ… developer tears detected.");
  simulateBuild();
  console.log("\nUse ↑ ↓ to navigate and Enter to select\n");
  pageOrder.forEach((p, i) => {
    console.log(i === selected ? `> ${p}` : `  ${p}`);
  });
  console.log("  Quit");
}

function launchInteractive() {
  let selected = 0;
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.emitKeypressEvents(process.stdin, rl);
  if (process.stdin.isTTY) process.stdin.setRawMode(true);

  renderMenu(selected);

  process.stdin.on('keypress', (str, key) => {
    if (key.name === 'up') {
      selected = (selected - 1 + pageOrder.length + 1) % (pageOrder.length + 1);
      renderMenu(selected);
    } else if (key.name === 'down') {
      selected = (selected + 1) % (pageOrder.length + 1);
      renderMenu(selected);
    } else if (key.name === 'return') {
      if (selected === pageOrder.length) {
        fakeLog("Exiting NextSJ… may your console survive.");
        process.exit();
      } else {
        console.clear();
        fakeLog(`Navigating to /${pageOrder[selected]}…`);
        pages[pageOrder[selected]]();
        console.log("\nPress any key to return to menu… or question reality.");
      }
    } else if (key.ctrl && key.name === 'c') {
      process.exit();
    }
  });
}

startServer(3000);

createPage('home', () => {
  console.log("HOME: nothing works, but at least it looks like it does.");
});
createPage('about', () => {
  console.log("ABOUT: random text, mostly confusing.");
});
createPage('dashboard', () => {
  console.log("DASHBOARD: metrics are fake, confidence is high.");
});
createPage('fun', () => {
  console.log("FUN: press keys, break things, enjoy chaos.");
});
createPage('trash', () => {
  console.log("TRASH: showing how messy JS can get in a single page.");
  console.log("ReferenceError: common sense is not defined");
  console.log("TypeError: reality is not a function");
});

launchInteractive();