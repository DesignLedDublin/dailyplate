# Daily Plate

Daily Plate is an interactive quiz website designed to teach people about calories and healthy eating.  It features a quiz testing user's knowledge of the calorie content in well known foods as well as a links page to learn more about healthy eating.  [here](https://designleddublin.github.io/dailyplate/)

![Mockup](/assets/images/readme_images/mockup.webp)

# Table of Contents

* [Design](#design)
  * [Colour](#colours)
  * [Fonts](#fonts)
  * [Images](#images)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [Functionality](#Functionality)

* [Features Left to Implement](#features-left-to-implement)

* [Screenshots](#screenshots)
  * [Home Page](#home-page)

* [Technologies](#technologies)

* [Testing](#features)
  * [Responsiveness](responsiveness)
  * [Validator Testing](#validator-testing)
    * [HTML](#html)
    * [CSS](#css)
    * [Lighthouse](#lighthouse)

* [Issues Found During Site Development](#issues-found-during-site-development)
  * [Getting the showScore function to work automatically when the score-page function was opened](#getting-the-showScore-function-to-work-automatically-when-the-score-page-function-was-opened)
  * [Getting my functions to register the correct answer when it was clicked](getting-my-functions-to-register-the-correct-answer-when-it-was-clicked)
  * [Getting the score to increment correctly](getting-the-score-to-increment-correctly)
  * [Putting the next page click action in a function rather than HTML](putting-the-next-page-click-action-in-a-function-rather-than-HTML) 
  * [Putting a 3 second delay before the button click goes to next page](putting-a-3-second-delay-before-the-button-click-goes-to-next-page)
  * [Background image not showing on deployed site](background-image-not-showing-on-deployed-site) 

  

* [Deployment](#deployment)

* [Credits](#credits)
  * [Code](#code)
  * [Images](#images)
  * [Content](#content)
&nbsp;  
&nbsp;

# Design

### Colours

* The main feature colour of #FA5F22 is used throughout the site on borders and fonts.
* The feature colour of #008000 is used as an accent colour as a hover colour etc.

### Fonts 
* The font used is Klee One.

### Images 
* The background image is purchased from istock.

### Wireframes

Home Page
![HomePage](/assets/images/readme_images/wireframe_1.webp)

Quiz Page
![HomePage](/assets/images/readme_images/wireframe_2.webp)

Score Page 
![HomePage](/assets/images/readme_images/wireframe_3.webp)

[Back to Table of Contents](#table-of-contents)

&nbsp;  

# Features 

This website consists of 10 pages. One is the home page, 7 are individual quiz question pages followed by a score page and a page linking to external sites related to the subject matter of the quiz. 

### Functionality 
  * As the user goes through the quiz, the following functionanlity has been implemented: 
    * The user cannot go to the next question until they have answered the current one. 
    * Once the user clicks to go to the next question, they are told whether their answer is correct or incorrect. 
    * The score is automatically incremented over each page. 
    * When the user goes back to the home page, the score goes back to zero. 
___


&nbsp;  
[Back to Table of Contents](#table-of-contents)
&nbsp;

# Features Left to Implement

* I plan to add another page which will have a calorie calculator designed to enable users to calorie cycle effectively through a week. 
* I also plan to link my site to an API that means users get different questions each time they visit the site. 

&nbsp;  
[Back to Table of Contents](#table-of-contents)
&nbsp;

# Project Screenshots

### Home Page:

* Quiz landing page
  * This explains what the quiz is for and how it works 
![HomePage](/assets/images/readme_images/website_home_page.webp)  

* Quiz pages
  * There are seven quiz pages the user must answer. 
![HomePage](/assets/images/readme_images/website_quiz_page.webp)

* Score page
  * After the seven question pages, the user is taken to the score page.  From here they can either go to the links page or go back and take the quiz again. 
![HomePage](/assets/images/readme_images/website_score_page.webp)

* Links page
  * This page shares some links to exernal websites if the user is interested in finding out more about healthy eating.  From here the user can navigate back to the home page of the quiz. 
  ![HomePage](/assets/images/readme_images/website_links_page.webp)
___


&nbsp;  
[Back to Table of Contents](#table-of-contents)
&nbsp;

# Technologies

* HTML
  - The structure of the Website was developed using HTML as the main language.
* CSS
  - The Website was styled using custom CSS in an external file.
* Visual Studio Code
  - The website was developed using Visual Studio Code IDE
* GitHub
  - Source code is hosted on GitHub and delpoyed using Git Pages. Github was also used to commit and push code during the development opf the Website
* www.birme.net
  - This was used on all images to both compress and convert them to .webp format./
* Sketch
  - wireframes were created using sketch.com


&nbsp;  
[Back to Table of Contents](#table-of-contents)
&nbsp;

# Testing

## Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in [WCAG 2.1 Reflow criteria for responsive design](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) on Chrome, Edge, Firefox and Safari browsers.

Steps to test:

1. Open browser and navigate to [Daily Plate](https://designleddublin.github.io/dailyplate/)
2. Open the developer tools (right click and inspect)
3. Set to responsive and decrease width to 320px
4. Set the zoom to 50%
5. Click and drag the responsive window to maximum width

Expected:

Website is responsive on all screen sizes and no images are pixelated or stretched.
No horizontal scroll is present.
No elements overlap.

Actual:

Website behaved as expected with the exception of ipad screen when one of the social icons in the footer went below the line of the others.  I was not able to fix this, please see unfixed bugs. 

Website was also opened on the following devices and no responsive issues were seen:

* Ipad 5th Generation
* Acer Travelmate Laptop
* Iphone - put in model
* Samsung S21 FE 

## Validator Testing 

### HTML
 I tested for issues with the html with [W3C validator](https://validator.w3.org)
 Initially the following issues were found:
 * There were multiple trailing slash on void elements found.
 * I had the button inside the a tag, I had to move the href inside the button element.
 * I had left some closing tags incorrect after changing formatting. 

 Once I made these amendments, there no errors. 

 ### CSS
I tested for issues with CSS using [W3C CSS validator](https://jigsaw.w3.org/css-validator/) and none were found. 


### JSHint
 I tested all pages of my website with [JSHint](https://jshint.com/).  It did not detect any errors. 

&nbsp;  
[Back to Table of Contents](#table-of-contents)
&nbsp;

# Issues found during site development 

### Getting the showScore function to work automatically when the score-page function was opened 
  * I was using the onload = "function" syntax in the body but it wasn't loading.  After spending a long time trying to find a solution and trying out window.onload after readign several articles on Stack Overflow, I found [this article](https://sebhastian.com/function-not-defined-javascript/?utm_content=cmp-true).
  * This made me realise that I was calling the function above where I had placed the script for my JS file.  It suggested I put onload function underneath that at the bottom of the body but instead I decided to move the script for the JS file up to the head and include a defer command.  Once I did this, it sorted out the issue. 

### Getting my functions to register the correct answer when it was clicked
  * I found that the functions I had written didn't result in the console logging that it was the correct answer.  
  * To try and figure out why the click and the correct answer weren't linking up together, I used console.log to reveal what the computer was reading for chosenAnswer and correctAnswer.  I realised through doing this that I was not linking the correctAnswer to the circles being clicked but instead the text.  Once I moved the correct-answer class into the circles column, it started registering the correct answer when it was clicked. 

### Getting the score to increment correctly 
  * The correct answer was being registered and chosen but the score was not incrementing over each page.  
  * I put [this question](https://stackoverflow.com/questions/77941188/variable-is-not-incrementing-with-the-function-i-have-written) on Stackoverflow and the answers made me realise that I needed to find a way to carry the data in the finalScore variable across the pages. 
  * I researched this subject, reading these articles:
    - [Article 1](https://code-boxx.com/pass-variables-between-pages-javascript/?utm_content=cmp-true)
    - [Article 2](https://www.javascripttutorial.net/web-apis/javascript-sessionstorage/)
    - [Article 3](https://blog.logrocket.com/localstorage-javascript-complete-guide/)
  * I decided to using the localStorage method and used these articles to help me implement this.  

### Putting the next page click action in a function rather than HTML.  
  * I could figure out how to create a function that took the user from one page to another but I was confused how to do this over multiple pages.  
  * [This article](https://www.geeksforgeeks.org/how-to-add-a-key-value-pair-to-map-in-javascript/) enabled me to understand how to map from one page to another.

  ### Putting a 3 second delay before the button click goes to next page.  
  * I researched this subject using these articles:
    - [Article 1](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
    - [Article 2](https://www.sitepoint.com/delay-sleep-pause-wait/#:~:text=The%20standard%20way%20of%20creating,after%20two%20seconds%20%E2%80%9CWorld!%E2%80%9D)
  * Through trial and error using these I managed to create a 3 second delay after the button was clicked to got to the next page and also to keep the text on screen telling the user if their answer is correct or incorrect. 

### Background image not showing on deployed site 
  * Whilst the background showed correctly on my VS Code Live Server preview pages, it wasn't showing on any pages when I deployed my site.  I found [this article](https://stackoverflow.com/questions/76105938/css-background-image-not-showing-up-in-my-deployed-site#:~:text=Try%20to%20change%20your%20background,then%20to%20your%20desired%20image.) which suggested I replace "/assets" with ".." in the CSS so that the image could be found.  This worked perfectly. 

&nbsp;  
[Back to Table of Contents](#table-of-contents)
&nbsp;

# Deployment
The project was deployed on GitHub Pages. I worked in VS Code and committed and pushed directly to Github to save all changes there as I worked. 

To deploy a project I had to:

* Log in to GitHub and click on repository to deploy ([DailyPlate](https://github.com/DesignLedDublin/dailyplate))
* select `Settings` and find GitHub Pages section at the very bottom of the page
* from source select `Deploy from a branch` and then `Main` branch.
* click `save` and page was deployed after auto-refresh.
>  My site is published at https://designleddublin.github.io/dailyplate/

To run locally:
* Log in to GitHub and click on repository to download ([DailyPlate](https://github.com/DesignLedDublin/dailyplate))
* select `Code` and click Download the ZIP file.
* after download you can extract the file and use it in your local environment 

Alternatively you can [Clone](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
or [Fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
this repository ([DailyPlate](https://github.com/DesignLedDublin/dailyplate))into your github account.

 
[Back to Table of Contents](#table-of-contents)
&nbsp;

# Credits 

To complete this project, I used Code Institute student template [gitpod full template](https://github.com/Code-Institute-Org/gitpod-full-template)

I used Boostrap code for some parts of my website, this is noted in the code. 
  
[Back to Table of Contents](#table-of-contents)
&nbsp; 

## Code 

* [Background Image](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_full_page)
    * I used this code for my background image. I then adapted it using media queries for different size screens. 
&nbsp;  

## Images
* The background image was bought from istock.  
* The mockup image at the top of the readme was a free download from unblast.com.

## Content
* Content was from research carried out on the internet and with real life products. 

[Back to Table of Contents](#table-of-contents)
