# Hacker News Search App
Created by [Justin Lawhorne](https://github.com/uavsystems434)

![](/public/app_record.gif)
# Function :iphone:
Let's the user search Hacker News articles by using the [HN Search API](https://hn.algolia.com/api). Results are then returned to the user that are relevant to the search query.

# Installation :arrow_down:
1.	Clone the repo [here](https://github.com/uavsystems434/Hacker-News-Search.git) :link:
2.	Open  the files in your code editor of choice and navigate  to the Terminal window.
3.	Navigate to the file's directory by using ```cd hacker-news-search```.
3.	Once you have entered the directory, run the following commands:
4.	```npm install``` to install the dependencies. 
5.	```npm start``` to open the project in the browser.
5.	This will create a local host connection in the [browser](http://locahost:3000).
6.	The Hacker News Search App should now be visible!:tada:

# Description :memo:
* I used [create-react-app](https://github.com/facebook/create-react-app) to setup necessary files.
* Utilized [redux-thunk](https://github.com/reduxjs/redux-thunk) middleware to make asynchronous calls by allowing the action creator to return functions instead of an action. 
* Referenced [axios](https://github.com/axios/axios) to make AJAX calls to the HN Search API based on the user's search terms and displays the results accordingly.
* The technologies used for this project are HTML, CSS, [React](https://reactjs.org/docs/getting-started.html), and [Redux](https://redux.js.org/).

This compact application lets you search  Hacker News by querying the Hacker News Algolia API. It then displays relevant results based on the search term(s). You can click on any article posted on Hacker News. The input received is stored in the Redux store, a powerful state management tool that is compatible with React. Once a new search query has been submitted, the displayed results are only relevant to the current search query. I have added minimal component CSS styling for accessibility to most devices.
