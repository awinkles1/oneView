# Daily Planner

## Description
This application allows a user to save todo events to a workday calander. It color codes the hours and the events tied to it.

## User Story
* AS AN employee with a busy schedule
* I WANT to add important events to a daily planner
* SO THAT I can mangage my time effectively

## Acceptance Criteria
* GIVEN I am using a daily planner to create a schedule
* WHEN I open the planner
* THEN the current day is displayed at the top of the calendar
* WHEN I scroll down
* THEN I am presented with timeblocks for standard business hours
* WHEN I view the time blocks for that day
* THEN each timeblock is color coded to indicate whether it is in the past, present, or future
* WHEN I click into a timeblock
* THEN I can enter an event
* WHEN I click the save content button
* THEN the text is saved in local storage
* WHEN I refresh the page
* THEN the saved events persist

## Screenshots
![](Assets/images/screenShot1.png)

## Tech/Framework used
* HTML
* CSS
* JAVASCRIPT
* JQueary

## How to Use
* Click on the desired timeblock to enter text
* Enter text into the timeblock
* Press the save content button at the top of the page
* A white timeblock represents the present hour
* A beige timeblock represents a future hour
* A lightgrey timeblock represents a past hour

## Credits
Developer Andy Winkles assited with the implementation of the code for local storage and the hues function for the color bonding.
