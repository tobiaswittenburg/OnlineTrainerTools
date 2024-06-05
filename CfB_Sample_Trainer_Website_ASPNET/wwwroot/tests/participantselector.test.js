// Import the JavaScript file to be tested
const participantSelector = require('./../js/participantselector');

// Test the selectParticipient function
describe('selectParticipient', () => {
    // Test case 1: Ensure the selected participant is displayed correctly
    test('should display the selected participant', () => {
        // Create a new JSDOM instance
        document.body.innerHTML = `
      <html>
        <body>
          <input id="participients" value="John,Doe,Jane" />
          <div id="selectedParticipient"></div>
        </body>
      </html>
    `;

       // Call the selectParticipient function
        participantSelector.selectParticipient();

        // Check if the selected participant is displayed correctly
        expect(global.document.getElementById('selectedParticipient').textContent).toMatch(/John|Doe|Jane/);
    });

    // Test case 2: Ensure the updated list of participants is displayed correctly
    test('should update the list of participants', () => {
        // Create a new JSDOM instance
        document.body.innerHTML = `
      <html>
        <body>
          <input id="participients" value="John,Doe,Jane" />
          <div id="selectedParticipient"></div>
        </body>
      </html>
    `;

        // Call the selectParticipient function
        participantSelector.selectParticipient();

        // Check if the updated list of participants is displayed correctly
        expect(global.document.getElementById('participients').value).toMatch(/Doe\nJane|John\nJane|John\nDoe/);
    });
});
