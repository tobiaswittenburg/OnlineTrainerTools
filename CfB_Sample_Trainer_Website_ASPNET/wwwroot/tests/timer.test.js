// timer.test.js

const timer = require('./../js/timer');

// Mock the HTML elements
document.body.innerHTML = `
    <input id="customDuration" type="number" min="1" max="120" />
    <p id="timer"></p>
`;

// Mock the alert function
window.alert = jest.fn();

test('setTimer sets the correct time', () => {
    timer.setTimer(5);
    expect(document.getElementById('timer').textContent).toBe('5:00');
});

test('startTimer starts the countdown', () => {
    jest.useFakeTimers();
    timer.setTimer(1);
    timer.startTimer();
    jest.advanceTimersByTime(60000);
    expect(window.alert).toHaveBeenCalledWith("Time's up!");
});
