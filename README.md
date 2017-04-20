# Assignment 03
Nyantee Asherman
Javascript
4/20/17

**Real Time Application**

**Due Date: Week 13 - Midnight of 4/19/2017**


## Assignment Specification


In my folder I have two attempts at making a real-time application using sockets.io

## JS_ASSIGN3 
For the first assignment I followed Daniel Shiffman’s youtube tutorial on socket.io to create a two-player drawing game with p5js. That helped me get the hand of how to navigate sockets.io.

## JS_ASSIGN3.2

In this assignment I tried to take what I learned from the chat apps and above exercise to make something a bit more creative. I tried to create a two-player scrabble board. I ran into a series of issues.

- First, I realized that I would have to project each player randomized pieces onto the board so that each could see them moved around the board. Though I was able to emit and broadcast the image array positions of each board to locate the images in my folder, I was not able to use the received data to actually mirror those images on the screen.

- Second, I tried to get the positions of each piece and though I was able to get, emit, and broadcast the last positions of each scrabble piece or letter, I was not able to use that information correctly. 

-Third, I could not get my server to broadcast both the scrabble piece positions AND the image array IDs. I could only do one at a time. 


## Inspiration
Daniel Shiffman Code Train: 
https://www.youtube.com/results?search_query=DANIEL+SHIFFMAN+SOCKET.IO

Scrabble Board Game 

