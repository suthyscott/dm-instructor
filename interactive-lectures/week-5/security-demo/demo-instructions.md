Open the demo file that you downloaded from Frodo
 - Walk through what’s happening in the index.js file in the starter folder. 
 - When you add a message and a pin you should see the message along with any other messages that used that secret pin. 

Create a server folder within the start folder. 
 - Create an index file in the server folder.
 - Install express and cors
 - Set up a basic server using express and cors, port 4004 to match the request on the front end. 

Create a post endpoint at /api/message. 
 - Create a messageController file with a createMessage function.
 - Pass in the createMessage function as a handler function for the post endpoint. 
 - Create a chats array. Each chat object will have a pin property along with a messages array. We are going to hash the pin so that it can’t be view as plaintext. 

In createMessage in the messageController;
 - Destructure the pin and the message from req.body. 
 - We need to check if the pin has been used already. Write a for loop that will iterate through the chats array. We will do this without encryption first, then add the hash later. 
 - For now, check if the pin from req.body matches any of the pins in the chats array;
    - if it does, add the message to that array and send back the entire chat object. 
    - If there’s no match, create a new chatObj outside of the loop with the pin and a messages array with the message from req.body, and push it into the chats array. Then send back the chatObj
 - Demonstrate how the pins and messages work with that endpoint. Show how you can see the pin coming in the response through the network tab. We don’t want that pin available on the front end, nor do we want it stored as plaintext in the “database”. Instead, we want to store a hash of the pin. 

Install bcryptjs
 - Require bcryptjs into the messageController and save it to a bcrypt variable. 


Implementing hash encryption:
 - In our chatObj, we don’t want to store the pin as plain text. Instead, we will store a hash.
 - How secure is my password site. Hash generates random strings of characters that are much more secure than a typical password. 
 - We are going to generate salt, which is some random characters that will be added to the hash of your pin. Declare a salt variable with 
 ``` 
 bcrypt.genSaltSync([character limit]).
 ```
 - Generate the hash by using 
 ``` 
 bcrypt.hashSync(pin, salt)
 ```
 - Replace the pin property in chatObj with the pinHash.
 - Demonstrate that the pin has now been stored as a hash and show how secure it is with the how secure website. 

Now we need to change our loop to account for the hashed pins:
 - Create and “existing” variable that is equal to 
 ```
 bcrypt.compareSync(pin, chat[i].pinHash)
 ```
 - If existing is true, there was a match and we can push the message into the chat.messages array. 
 - We don’t even want to send the hash back to the front end, so rather than send back chats[i] let’s create a new object and delete the pinHas before sending it back. Do the same outside of the for loop.

