# startup

## Specification Deliverable

### Elevator Pitch

Have you ever wanted to meet new people in a low-stress environment? Are you a pickleball finatic? If you answered yes to these questions, picklr is the application for you! Picklr allows you to add your pickleball specs and meet people that are similar. You can also join a queue that finds a pickleball group to play with at a specific time!

### Design
<img width="818" alt="Screenshot 2024-01-17 at 2 27 58 PM" src="https://github.com/allyyblack/startup/assets/144302508/fab698d5-af5a-4b84-adb5-949016f9ca12">

### Key features
- Secure login over HTTPS
- Ability to message different users
- Display of users
- Ability to edit personal profile
- Ability to rank players out of 5
- Ability to join a pickleball group at a specific time

### Technologies

I am going to use the required technologies in the following ways.
- HTML: I will used 2 HTML pages, one for login and one to view other users.
- CSS: I will use this to make the application look good on all screens with a good choice of color.
- JavaScript: Provides login, provides messaging action, provides ranking.Interactivity (e.g. What happens when a user presses a button)
- Web service: Allows login, retrieving ranking, submitting ranking, and chatWithFriend
- Authentication: User will be prompted to login using a username and password. The user's name will be displayed in the top right corner.
- Database data: This will be the ranking of each user after they have recieved 5 ratings from other users, stores users and ranks.
- WebSocket data: This will be used with the chat function of the application between users.
- React:  Application ported to use the React web framework.

## HTML Deliverable

For this deliverable I built out the structure of my application using HTML.

- HTML pages: Four HTML page that represent the ability to login, connect to other users, chat with other users, and an about page
- Links: All of the pages link to the other pages.
- Text: The image on the about page has a textual description.
- Images: I have images on the connect page that will be collected from the users. I also have an image on the about page. 
- DB/Login: Input box and submit button for login. The connect page has a list of users that have already submitted their information. 
- WebSocket: The reply button on the chat page will link with a chat service.

## CSS Deliverable

For this deliverable I properly styled the application into its final appearance.

- Header, footer, and main content body
- Navigation elements: I dropped the underlines for the menu and make the buttons look more appealing.
- Responsive to window resizing: My app looks great on all window sizes and devices
- Application elements: Used good contrast and whitespace
- Application text content: Consistent fonts
- Application images: The images are now in good locations and the image on the about page uses flex to look good in all window sizes. 

## JavaScript Deliverable

For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

- Login : When you press the login button it takes you to the connect page. 
- Database: Displays the users and their pictures that they uploaded from a link. Currently the list of pickleball users is collected from local storage, but this will be database storage later. 
- Websocket: I used the setInterval function to periodically display a message. This will be replaced with WebSocket messages later.
- Application Logic: The connect page uploads the image that the user implemented on the login page.

## DB/Login deliverable

For this deliverable a user is logged in and can see other available users to connect with that are stored in the database

 MongoDB Atlas database created - done!
 Stores data in MongoDB - done!
 User registration - Creates a new account in the database.
 existing user - Stores a profile picture link in the database for the given user.
 Use MongoDB to store credentials - Stores both user and their profile.
 Restricts functionality - You cannot view other users until you are logged in 

 ## WebSocket deliverable

For this deliverable I used webSocket to update the user info on the frontend in realtime.

 Backend listens for WebSocket connection 
 Frontend makes WebSocket connection 
 Data sent over WebSocket connection 
 WebSocket data displayed - All user info shows
