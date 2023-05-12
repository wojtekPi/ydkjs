import assert from "assert";

console.log("Hello from app-2!");

function toggle(...v) {
  const values = v;
  let counter = -1;

  return () => {
    counter += 1;
    return v[counter % values.length];
  };
}

var hello = toggle("hello");

var onOff = toggle("on", "off");
var speed = toggle("slow", "medium", "fast");

assert(hello() === "hello");
assert(hello() === "hello");

assert(onOff() === "on");
assert(onOff() === "off");
assert(onOff() === "on");

assert(speed() === "slow");
assert(speed() === "medium");
assert(speed() === "fast");
assert(speed() === "slow");

