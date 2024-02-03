# Daily Plate

Colour Theory is an interactive quiz designed to teach people about calories.  It features a quiz testing user's knowledge of the calorie content in foods as well as a calorie calculator designed to enable users to calorie cycle effectively through a week.  [here](https://designleddublin.github.io/ColourTheory/index.html)

![Mockup](/assets/Readme%20Images/All-devices.webp)

# Table of Contents

* [Design](#design)
  * [Colour](#colours)
  * [Fonts](#fonts)
  * [Images](#images)
  * [General Design Points](#general-design-points)

* [Features](#features)
  * [Navigation Menu](#navigation-menu)

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
  

* [Deployment](#deployment)

* [Credits](#credits)
  * [Code](#code)
  * [Images](#images)
  * [Content](#content)
&nbsp;  
&nbsp;

# Design

### Colours

* The feature colour of #580b20 is used throughout the site to highlight key elements on a page and for icons. 
* The feature colour of #dc9806 is used when items in the menu bar or social icons are hovered over.
   ![HoverColour](/assets/Readme%20Images/Header-palettes-clicked.webp)

### Fonts 
* Fonts used are Arial Narrow Bold and Grandiflora One

### Images 
* All images are from my design studio work, DesignLed. 
* The logo was created by me for this project. 

### General design points
  * The footer border is replaced with a custom-designed rainbow line to link in with the colour theme of the website.
  ![Footer](/assets/Readme%20Images/Footer.webp)

[Back to Table of Contents](#table-of-contents)

&nbsp;  

# Features 

This website consists of 8 pages.  Six are accessible from the navigation menu.  One is a 404 error page and one is a submission confirmation page for the contact form. 

### Navigation Menu
  * On the left hand side is the site logo, this moves to the center on mobile devices.  
  * On the right hand side there are four links or burger menu on smaller screens:
    * Home
    * What is Colour Theory
    * Palettes dropdown menu pages
    * Contact page 
  * The user can decide to have the Palettes dropdown menu open or closed by clicking the Palettes menu item to both open and close it. 
   ![Dropdown](/assets/Readme%20Images/Header-dropdown-menu.webp)
___


&nbsp;  
[Back to Table of Contents](#table-of-contents)
&nbsp;

# Features Left to Implement

* As a future enhancement, the contact form will be updated with javascript to send an email to DesignLed when submit is clicked. 

&nbsp;  
[Back to Table of Contents](#table-of-contents)
&nbsp;

# Project Screenshots

### Home Page:

![HomePage](/assets/Readme%20Images/Home.webp)
* Landing page header
  * The landing page header - How to use Colour in Your Home - will immediately explain what the website is for.

* Landing page carousel
  * This will be a collection of DesignLed's projects that show a strong use of colour.
  * It will help to animate the page and inspire the user.

* Sub heading
  * This will serve to reiterate to the user what the website is for and how it will help them learn how to use colour in their home.

* Coming Soon Section
  * This section is to get the user excited about the colour personality quiz which we will soon be releasing.
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
* Font Awesome
  - Icons obtained from https://fontawesome.com/ were used as the Social media links in the footer section.
* www.birme.net
  - This was used on all images to both compress and convert them to .webp format./
* Favicon.io
  - favicon files were created at https://favicon.io/favicon-converter/
* Sketch
  - wireframes were created using sketch.com

&nbsp;  
[Back to Table of Contents](#table-of-contents)
&nbsp;

# Testing

## Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in [WCAG 2.1 Reflow criteria for responsive design](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) on Chrome, Edge, Firefox and Safari browsers.

Steps to test:

1. Open browser and navigate to [Colour Theory](https://designleddublin.github.io/ColourTheory/)
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
 [W3C validator](https://validator.w3.org)
 Initially the following issues were found:
 * There were multiple trailing slash on void elements found.
 * For all the img elements, I had to take out the px as this wasn't allowed in the width and height elements. 
 * The automatic redirect for the contact-form-submit.html was not in the head section of the website so this had to be moved. 

 Once I had corrected these issues, there were no further errors found when passing it through the W3C validator.
![HTML](/assets/Readme%20Images/HTML-checker.webp)

 ### CSS
 [W3C CSS validator](https://jigsaw.w3.org/css-validator/)
Initially, there the issues below with my CSS code:
![CSSErrors](/assets/Readme%20Images/CSS-validator-issues.webp)

Once I removed these CSS elements, no errors were found:
![CSSClear](/assets/Readme%20Images/CSS-validator-clear.webp)
&nbsp;  

### Lighthouse
 * I tested all pages of my website with Lighthouse, they were all above 90% in all three categories with the exception of the Home Page performance indicator which was coming in at 86% as the carousel images are larger. 
 ![Home Page Lighthouse](/assets/Readme%20Images/Lighthouse%20Report%20Home%20Page.webp)
 In order to bring this indicator above 90%, I had to reduce the size of the carousel images but this made them blurry.  So it was decided to keep them at the higher resolution as 86% is still perfectly acceptable for a website to run well. 

&nbsp;  
[Back to Table of Contents](#table-of-contents)
&nbsp;

# Issues found during site development 

### Getting the showScore function to work automatically when the score-page function was opened 
  * I was using the onload = "function" syntax in the body but it wasn't loading.  After spending a long time trying to find a solution and trying out window.onload after readign several articles on Stack Overflow, I found [this article](https://sebhastian.com/function-not-defined-javascript/?utm_content=cmp-true).
  * This made me realise that I was calling the function above where I had placed the script for my JS file.  It suggested I put onload function underneath that at the bottom of the body but instead I decided to move the script for the JS file up to the head and include a defer command.  Once I did this, it sorted out the issue. 

&nbsp;  
[Back to Table of Contents](#table-of-contents)
&nbsp;

# Deployment
The project was deployed on GitHub Pages. I worked in VS Code and committed and pushed directly to Github to save all changes there as I worked. 

To deploy a project I had to:

* Log in to GitHub and click on repository to deploy ([ColourTheory](https://github.com/DesignLedDublin/ColourTheory))
* select `Settings` and find GitHub Pages section at the very bottom of the page
* from source select `Deploy from a branch` and then `Main` branch.
* click `save` and page was deployed after auto-refresh.
>  My site is published at https://designleddublin.github.io/ColourTheory//

To run locally:
* Log in to GitHub and click on repository to download ([ColourTheory](https://github.com/DesignLedDublin/ColourTheory))
* select `Code` and click Download the ZIP file.
* after download you can extract the file and use it in your local environment 

Alternatively you can [Clone](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
or [Fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
this repository ([ColourTheory](https://github.com/DesignLedDublin/ColourTheory))into your github account.

 
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
* All images belong to me, any additional design elements were created by me for this project. 
&nbsp; 

## Content
* All content is original and generated by me.

[Back to Table of Contents](#table-of-contents)
