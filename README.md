WIP

# E-Commerce Store
This is an e-commerce store website that allows to purchase products available in the database.

<a href="https://dsz-e-commerce-store.netlify.app" target="_blank">https://dsz-e-commerce-store.netlify.app</a>

Products can be filtered by a category and have available stock that user can purchase at any time. 
For testing purposes, stock can be refilled using a button.

# Status
Project has been finished and tested in order to find any small problems that may have gone under the radar.

# GIFs highlighting some functionalities (click for zoom)
<img src="https://github.com/szymanskidawid/e-commerce-store/assets/17786383/731ad2f2-5d72-44fb-bb69-0b3c79909dcf" alt="project_GIF_1" width="250">
<img src="https://github.com/szymanskidawid/e-commerce-store/assets/17786383/54b99080-9197-402d-8bc5-5d2200bd6e4e" alt="project_GIF_2" width="250">
<img src="https://github.com/szymanskidawid/e-commerce-store/assets/17786383/a7754ccf-4a25-48ee-a3d2-359f63871cd4" alt="project_GIF_3" width="250">

# Reflection

E-Commerce-Store project has been created in order to use my React knowledge in practice. 

It was a plan from the very start to also have a database that will contain all products available for purchase.

Main challenge for this project was to keep the code clean and readable. There are a lot of states and props used throughout the project that are passed around the application. At the very start I did not use any state management tool which created a lot of mess in the project. Implementing ContextAPI has helped a lot to reduce amount of code and made it much more readable.\
Another challenge that I have faced was proper implementation of RESTful API and making front-end update diplayed data from back-end without reloading the page. I have not done these steps before which required a lot of research plus trial and error in order to find solutions for all problems.

For this project, I have created my front-end using React.js together with libraries MaterialUI, React Render and ContextAPI.\
When it comes to backend, I have also based it on JavaScript by using Node.js to run my code and Express.js to simplify the process and create RESTful API.\
At last, for database I have used MongoDB which was implemented using Mongoose library.
