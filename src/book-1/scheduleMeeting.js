const assert = require("assert");
console.log("Hello!");

function scheduleMeeting(startTime, durationMinutes) {
  const startWindow = 7 * 60 + 30;
  const endWindow = 17 * 60 + 45;
  const [startHour, startMinutes] = startTime.split(":").map(Number);

  const meetingStartMinutes = startHour * 60 + startMinutes;
  const meetingEndMinutes = meetingStartMinutes + durationMinutes;
  return meetingStartMinutes >= startWindow && meetingEndMinutes <= endWindow;
}

module.exports = {
  scheduleMeeting,
};

assert.equal(scheduleMeeting("7:00", 15), false);
assert.equal(scheduleMeeting("07:15", 30), false);
assert.equal(scheduleMeeting("7:30", 30), true);
assert.equal(scheduleMeeting("11:30", 60), true);
assert.equal(scheduleMeeting("17:00", 45), true);
assert.equal(scheduleMeeting("17:30", 30), false);
assert.equal(scheduleMeeting("18:00", 15), false);
