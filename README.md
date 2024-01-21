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
  * [Footer](#footer)
  * [Favicon](#favicon)
  * [404](#404)
  * [Responsive Design](#responsive-design)
  * [Contact Form and Success Page](#contact-form-and-success-page)
  * [Link Hover Colour Change](#link-hover-colour-change)

* [Features Left to Implement](#features-left-to-implement)

* [Screenshots](#screenshots)
  * [Home Page](#home-page)
  * [What is Colour Theory Page](#what-is-colour-theory-page)
  * [Palettes Drop Down Menu](#palettes-drop-down-menu)
  * [Contact page](#contact-page)

* [Technologies](#technologies)

* [Testing](#features)
  * [Responsiveness](responsiveness)
  * [Validator Testing](#validator-testing)
    * [HTML](#html)
    * [CSS](#css)
    * [Lighthouse](#lighthouse)

* [Issues Found During Site Development](#issues-found-during-site-development)
  * [Creating the dropdown menu in navbar menu](#creating-the-dropdown-menu-in-navbar-menu)
  

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

### Footer
  * To the right are social media icons.  The social links go to DesignLed's social media pages.  Icons are accessible to the visually impaired who may be using a screen reader with the use of aria labels.  
  * To the left is the copyright to DesignLed for the website, this also links to the DesignLed website in case users would like to see the studio's website.
  * This will allow the user to follow DesignLed if they would like to after visiting the Colour Theory page. 
___
### Favicon
  * A site wide favicon has been implemented with the Colour Theory logo.
  * This will provide an image in the the tabs header to allow the user to easily identify the website if they have multiple tabs open.
___
### 404 Page
  * A 404 page has been implemented and will display if a user navigates to a broken link.
  * The 404 page will allow the user to easily navigate back to the home page of the website with a button to take them directly to it. 
  ![404](/assets/Readme%20Images/404.webp)
___ 
### Responsive design
  * The website has been tested on all devices and is responsive on everything.
___
### Contact form and success page
  * The website has a contact form with the contact details as required inputs.  The user is then taken to a success page once the form is submitted.  This page automatically redirects back to the home page after 10 seconds. 
___
### Link hover colour change
  * The navbar menu and all footer elements change to the branding yellow colour on hover to show they are clickable. 

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

### What is Colour Theory Page:

![ColourTheory](/assets/Readme%20Images/Colour-Theory.webp)
* This page is designed to give users background information about colour theory and what different colours mean.
* The images and corresponding text are responsive and will allow the user to view content from any device.

___

### Palettes drop down menu:

![ColourTheory](/assets/Readme%20Images/Palettes.webp)
- The format of these three pages is the same. It gives visitors some general information about this type of colour palette. Shows a room decorated with this colour palette with a sample palette pulled from this room and then gives a 'How To' section that gives visitors pointers on how to implement a palette like this in their own home. The three palettes explored are:
  - Neutral
  - Monochromatic
  - Maximalist
___

### Contact Page:
![Contact](/assets/Readme%20Images/Contact-page.webp)
* This page gives a contact form that enables people to contact DesignLed directly.
* The contact detail sections are required so that a user cannot submit the form with no information. 
* It also gives contact details for DesignLed if people would prefer to use these.

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

### Creating the dropdown menu in navbar menu 
  * When I used code from Boostrap, it gave me a button instead of a dropdown menu item that looked the same as the rest of the menu.  [This article](https://www.w3schools.com/bootstrap4/bootstrap_dropdowns.asp#:~:text=Basic%20Dropdown&text=To%20open%20the%20dropdown%20menu,actually%20build%20the%20dropdown%20menu.) enabled me to get this element to look right, but the menu wouldn't drop down.
  * I tried changing to v5 of Bootstrap as I read that you need this to make the dropdown toggle but this made everything go out of aligment.  I eventually found [this article](https://stackoverflow.com/questions/22955916/bootstrap-collapse-not-collapsin) which made me realise that if I took the -bs- out of the data-bs-toggle and went back to v4 of Bootstrap the drop down menu works and the alignment works. 

### Adding required action to the form inputs on the Contact page
  * The form template I was using did not have this function.  When I added the required instruction, it did not work.  
  * [This page](https://stackoverflow.com/questions/60058280/required-attribute-not-working-with-form-tag) made me realise the form was missing the submit specification.
  * This still didn't work and I realise looking at the code that the <form></form> section was closed before the submit section.  I moved this underneath the submit section and added 'formaction' instead of 'href' after reading [this article](https://www.w3schools.com/tags/att_button_formaction.asp) and it worked. 

### Endless horizontal scroll in How To section on Palettes page
  * [This article](https://medium.com/afosto/bootstrap-v4-explained-the-grid-and-how-to-use-it-82a4de58604e) told me the container fluid class doesn’t have a max width.
  * So I used advice from [this article](https://mdbootstrap.com/docs/standard/extended/max-width/#:~:text=In%20order%20to%20make%20an,w%2D100%20class%20to%20it.&text=You%20can%20also%20use%20max,100%25%3B%20utilities%20as%20needed) to set a max width and the problem was solved. 

### Spacing for large screens on What is Colour Theory Page
  * When this page was viewing on a very large page (over 2800px wide) the content in the section below the title that gives information about different colours would spread out to either side and leave a big gap in the middle.  The bigger the screen, the bigger the gap would get. 
  ![Issue image](/assets/Readme%20Images/Spacing%20issue%20-%20large%20screen%20-%20colour%20theory%20page.webp)
  * I tried adding col-xl-4 into the class which removed the gap and put the two sections together but the issue was that they were all bunched to the left. 
  ![Initial Solution](/assets/Readme%20Images/Spacing%20issue%20-%20large%20screen%20-%20colour%20theory%20page%20-%20initial%20solution.webp)
  * I found information about offsetting columns on [this page](https://getbootstrap.com/docs/4.0/layout/grid/) in Bootstrap and so played around with this.  Adding in offset-xl-2 to code meant the content stayed together in the centre of the page on larger screens. 

### Issues with footer on different screen sizes. 
  * I had two issues with the footer that I had to fix.  The first was that on ipad screens, the 4 social icons wouldn't sit in a line.
  ![Ipad issue](/assets/Readme%20Images/Footer%20spacing%20-%20ipad.webp)
  * I fixed this by simply giving this section a little more space on the page.  The div for these icons initially had col-md-2, by changing it to col-md-3, the icons stayed in the same line on all screens. 
  * The second issue I had with the footer was that on mobile devices, the DesignLed copyright element sat to the left and there was not enough spacing between the elements. 
  ![Mobile issue](/assets/Readme%20Images/Footer%20spacing%20-%20mobile.webp)
  * By looking at the code using Inspect, I was able to identify svg section of this code that was determining the spacing.  I used media query to increase the width and height of this on mobile view which resolved the issue.

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
