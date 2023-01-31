const assert = require("assert");
console.log("Hello from prototypes!");

function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max;
}

var reel = {
  symbols: ["X", "Y", "Z", "W", "$", "*", "<", "@"],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return [
      this.getSymbol(this.position - 1),
      this.getSymbol(this.position),
      this.getSymbol(this.position + 1),
    ];
  },
  getSymbol(index) {
    return this.symbols[(this.symbols.length + index) % this.symbols.length];
  },
};

var slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    const results = [[], [], []];
    this.reels.forEach((reel) => {
      const reelDisplay = reel.display();
      for (let i = 0; i < 3; i++) {
        results[i].push(reelDisplay[i]);
      }
    });
    console.log("---START---");
    let resultString = results
      .map((res) => {
        return res.join("|");
      })
      .join("\n");
    console.log(resultString);
    console.log("---END---");
  },
};

slotMachine.spin();
slotMachine.display();

slotMachine.spin();
slotMachine.display();
