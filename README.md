[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# PixlMonster-Client

A game in which you can create and interact with pet monsters.

Intended to be used in conjunction with PixlMonster-api

# Deployed URL

Front-End Deploy: https://buffalo0707.github.io/PixlMonstr-Client/
Back-End Repo:  https://github.com/buffalo0707/PixlMonster-api


# Description and Rules

- Authentication
  * All users must login in order to access the site content
  * Required credentials:
    * Email address (username)
    * Password
  * New users can create a new account for free
  * Existing users can change their passwords or logout from the system at any time.

- PixlMonstr Game

* Monster Summary View
  * Users start with no monsters in their collection
  * Upon logging in for the first time, users are brought to the summary view
    * If they have no monsters in his/her collection later, the view shows with a brief summary of the game and how to play.
    * If the user does have monsters in his/her collection, they will appear here.
    * Clicking/tapping a monster image will open the Monster Detail view.
    * Clicking/tapping the Create Monster button will open the Create Monster modal
  * If a user has monsters in their collection, the image of the monster will represent its current status
    * Smiling - monster is in good shape
    * Frowining - monster requires attention
    * Eyes replaced by X's - monster has died. Bummer.

* Monster Detail View
  * This is where users can interact with their monsters.
  * Hunger indicator in upper left corner shows how hungry the monster is.      * Hunger is measured on a range of 0 to 5, 5 being completely full
    * If a monster's hunger reaches 0, the monster dies.
    * The meter's color represents the monster's hunger
      * Green - Hunger = 4 or 5
      * Yellow - Hunger = 3
      * Red - Hunger = 1 or 2
      * All Gray - Hunger = 0 (Monster dies)
    * Monsters can be fed by clicking the drumstick button below the monster image.
      * Feeding the monster makes it very happy, causing it to spin - even if it is full.
      * Clicking/tapping the icon will increase hunger value by one and the meter will update accordingly
      * An HTML PATCH request is sent to the API each time the monster is fed in order to update the current state of the monster. The request is sent only if the hunger value before update is < 5 to avoid unneeded API calls.
  * If a monster has pooped, it will be represented with an icon below the monster
    * Pooping is represented by the monster's cleanliness value and is measured the same as hunger
    * If a monster's cleanliness reaches 0, the monster dies.
    * The size of the icon represents how much the monster has pooped (or, conversely, how low the cleanliness value is)
    * Clicking/tapping the icon will increase cleanliness by one and decrese the size of the icon accordingly.
    * An HTML PATCH request is sent to the API each time the icon is tapped in order to update the current state of the monster
   * Monsters can be deleted by clicking the Say Goodbye button.
    * This permantently deletes the monster from the server via an HTML DELETE request
    * This action cannot be undone
    * Currently, there is no warning or confirmation asking to proceed. Click this button and its game over for that monster.

* Create Monster
  * Users create new monsters by clicking the New Monster button on the Monster Summary view
  * New monsters can be given a name, type, and home.
    * Type and Home are used to determine what images to display for the monster but do not change any other monster characteristics (yet)

* Other Rules
  * Monster Hunger and Cleanliness are updated when a user logs in and retrieves their collection of monsters.
  * The amount by which the values are decreased is determined by comparing the current date/time to the last date/time when the monster was updated.
    * After calculating the current hunger and cleanliness, if the values have changed, an HTTP PATCH request is sent to the API in order to update the current state of the monster
    * If either value is 0, the server will update the monster status to 'dead'.

# User Stories
  * [x] Authentication Epic
    * [x] As a new user, I want to be able to sign up to use the site so that I can login
    * [x] As a registered user, I want to be able to login to site so that I can interact with Monsters
    * [x] As a user, I want to be able to change my password so that I can keep my account secure
    * [x] As a user, I want to be able to sign out so that I am no longer signed in
    * [x] As a user, I want the sign out and change password buttons to be hidden until I have logged in so that I am not confused
    * [x] As a user, I want the sign-in and sign-up buttons to be hidden after I login successfully so that I am not confused
    * [x] As a user, I want to see an error message fire if I was unable to sign-in so Iknow to try again
    * [x] As a user, I want to see an error message fire if I was unable to sign-up so Iknow to try again
    * [x] As a user, I want to see a message indicating that my sign-up request was successful so I know that I can now sign-up
    * [x] As a user, I want to see an error message fire if I was unable to change my password so I know to try again
    * [x] As a user, I want to see a message indicating that my password change was successful so I know what happened
* [x] Create Monster Epic
    * [x] As a user, I want to be able to create a new monster so that I can play with it
    * [x] As a user, I want to be able to name my new monster so that it can have an identity
    * [x] As a user, I want my new monster to be saved on the server so that it doesn’t disappear when I logout
    * [x] As a user, I want to be able to pick the home for my monster
    * [x] As a user, I would like to be able to select from different monster types when creating a new monster
    * [x] As a user, I only want to be able to have three monsters at a time.
* [x] View Monster Epic
    * [x] As a user, I want to see a list of all of my living monsters
    * [x] As a user, I want to see a summary of the status of all living monsters so that I know which ones need attention
    * [x] As a user, I want to be able to select a monster so that I can interact with it
    * [x] As a user, I want to see my monster’s mood so that I know how happy it is
    * [x] As a user, I want to see my monster’s hunger so that I know if it needs to be fed
    * [x] As a user, I want to see if my monster has pooped so that I know that I need to clean it up
    * [x] As a user, I want to see if my monster has died so that I know it is time to put it to rest and start a new monster
* [x] Update Monster Epic
    * [x] As a user, I want to be able to feed my monster so that it is no longer hungry
    * [x] As a user, I want to be able to cleanup my monster’s poops so that it doesn’t need to live in filth and squalor
    * [x] As a user, I want my monster to die if it isn’t kept healthy, fed, and happy.
    * [x] As a user, I want to be able to put a dead monster to rest (delete)
* [ ] Nice To Have
    * [ ] As a user, I would like to be able to customize the appearance when creating a new monster

# Wireframes
![Wireframe 1](http://i.imgur.com/YQJ8iaZ.jpg "Wirefreame 1")
![Wireframe 2](http://i.imgur.com/Q5NW9HV.jpg "Wireframe 2")

# Things I Learned

- Communicating with an API isn't as scary as it seemed in TicTacToe.
- Using objects, constructors, and prototypes can help keep code cleaner and more semantic.
- Handlebars is the best.

# Challenges

- Due to some family events outside of class, I was unable to dedicate the time needed outside of class to make the site look exactly the way I wanted. I was hoping to animate the monster images but just didn't have time.
- A lot of my game logic is based on time. I struggled greatly to get JS to work well with the datetime information returned from the server.
- I struggled when determining what logic should be placed in the client vs what should be placed on the server. If I were to revisit this project, I think I would move some logic to the server to prevent users from cheating.
- Getting the CSS right for placing images over images (such as on the monster detail view) was a real challenge. I ended up hacking it together and I think it looks ok in the end.


## Dependencies

Install with `npm install`.

-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)

At the beginning of each cohort, update the versions in
[`package.json`](package.json) by replace all versions with a glob (`*`) and
running `npm update --save && npm update --save-dev`. You may wish to test these
changes by deleting the `node_modules` directory and running `npm install`.
Fix any conflicts.



## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
