# OnlineTrainerTools

This is the repository for a GitHub Copilot Hackathon using ASP.NET Razor Pages and JavaScript.

## What are we building
We are building a website for online trainings with tools for the trainer. We implement 2 tools.
1. A Break Timer where you can select time ranges (e.g. 5 and 10 minutes) and have a timer counting down.
2. A Participant Selector, that is a text box where you put in the names of participants and click on select. Upon click one participant gets selected, displayed in bold (h1) and removed from the box.

## Prepare the Sample
Create a new ASP.NET Web Project with Razor Pages.

## Scenario 1: Create the break timer component
Create a Razor Page for the break timer. 
Requirements:
 - Should have buttons for default values (e.g. 5 min, 10min, 15 min).
 - Should have a button "Start Timer".
 - Button starts the count down
 - The component should have a text box where you can enter some other (non default) time (e.g. 12 min).

Task 1: Use GitHub Copilot Chat to create the page and the neccessary JavaScript. Make sure that the JavaScript is in a single file (so it can be unit tested later). If you are stuck, ask GitHub Copilot to help you. Also ask Copilot how to do certain tasks.

Task 2: When you have implemented the Page ask Copilot for JavaScript unit testing. Ask how to implement it (Hint: Jest Framework) and ask it to implement some unit tests for the JavaScript Components.

Task 3: Make the tests executable.

## Scenario 2:
Create a Razor Page for the Participant Selector
Requirements:
 - Should have a multiline textarea where you can paste in the names.
 - Should have a button "Select Participant". Upon click a Participant gets selected, displayed in bold and removed from the textarea.

Task 1: Use GitHub Copilot Chat to implement this component.

Task 2: Make the JavaScript Code testable

Task 3: Let Copilot help you to implement the routing


# SPOILER ALERT: Here are some sample prompts
## Scenario 1: Component
I am writing a website for online trainers where they have some useful tools at hand.
I am going to implement that website in ASP.NET with Razor Pages in C#.

The first component is a break timer component that can be displayed during a break, so that everyone in the room can see when the training will continue.

These are the requirements for this component:
 - Should have buttons for default values (e.g. 5 min, 10min, 15 min).
 - Should have a button "Start Timer".
 - Button starts the count down
 - The component should have a text box where you can enter some other (non default) time (e.g. 12 min).
 
Let's think step by step what needs to be done to implement this and suggest a possible implementation

## Scenario 1: JavaScript testing
I want to make the JavaScript unit testable. What do I need to do to introduce Unit Testing with JavaScript in this solution?

## Scenario 1: Test implementation
Please implement some unit tests for my methods.


## Scenario 2: Component
I am writing a website for online trainers where they have some useful tools at hand.
I am going to implement that website in ASP.NET with Razor Pages in C#.

The next component is a participant selector component. 

Requirements:
 - Should have a multiline textarea where you can paste in the names.
 - Should have a button "Select Participant". Upon click a Participant gets selected, displayed in bold and removed from the textarea.

 Can you implement this page for me?

## Scenario 2: JS Testing:
See Scenario 1

## Scenario 2: Routing
Where do I need to implement the links to the newly created pages? Can you suggest the links to the BreakTimer and the ParticipantSelector page for me?
