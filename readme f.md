
# FactoryGym

Welcome to FactoryGym. 
This site gives some information about the gym and diferents types of classes that can be practise, also gives you a brief gallery view of the interior of the gym.
It also gives the ability to make contact with the Gym easily through social media or directly via the contact form.

# Responsive Views


(https://github.com/EmanuelCaires/Factorygym/blob/main/assets/gallery/responsive%20views.png)


# Ux

## User Goals
* Visually appealing, including images.
* Easily navigated around.
* Quality and valuable content.
* Easily found contact details.
* Form to directly contact the Gym.

## User Stories
* As a user, I want the website to give me information about the Gym.
* As a user, I want to be able to easily contact the Gym.
* As a user, I want to be able to make contact with the Gym via several different methods, i.e. social media.
* As a user, I want to be able to easily navigate through the website.
* As a user, I want to know what type of classes the gym offers, any section whith free wheights and other equipment.

## Site owners Goals
* Promote the Gym.
* Increase the number of members.
* Increase rankings on search engines.

## Requirements
* Easy to navigate on various screen sizes.
* Clear information what the Gym has to offers.
* Keep the user interested with small bits of information to make them want to engage with the Gym.
* Simple methods of contacting the Gym.
* Apelative so users do not leave.

## Expectations
* I expect to know if a form has been submitted properly and if items are not filled in, to be prompted.
* I expect all links to social media sites to be opened in a new tab.
* I expect all navigation links to work correctly.
* I expect screen size not to affect the quality of the website.
* I expect all information to be correct and accurate.

## Wireframes
I have used [Balsamic](https://balsamiq.com/wireframes/ "Balsamic") to develop my wireframes for my website. I initially created the mobile version and then the wireframes and then scalled it up for both tablet and desktop. Because a requirement is to give little but quality information to the user to make them want to engage with the club, a one-page website is used. This gets the user through the content and quickly to the contact form and details via scrolling or directly via the navigation bar.

The wireframes are below:


### Desktop Wireframe
### Tablet Wireframe
### Phone Wireframe


   # Color 


## Fonts
In order to move away from the basic fonts available, I have used 
[Google Fonts](https://fonts.google.com/ "Google Fonts") to find a text that best suits the feel of the website. For the main text I have chosen [Montserrat](https://fonts.google.com/specimen/Montserrat?query=mon "Montserrat font") as I feel it is has a sharp, simple and easy to read look. To make the headers and the navigation bar stand out form the text, I decided to use [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab?query=rob "Roboto Slab font"). This font is complimentary to Montserrat but gives clear definition between text and headers.

#

I will explain the uses of the varius colours below, starting from top to bottom.

Colors Used: 

 * #292929 - This colour will be used as a Footer and  Background Color,submite buttom and text Color.

 * #616161 - This colour will be used on the contact form for added styling

 * #FFFFFF - This colour will be used as a background colour, Navbar and Footer as a text colour.


 


    




## Structure
I will be building my website with a mobile first mindset using the iPhone 5/SE (320px) as the smallest screen size for styling to look good on. The screen size breakpoints that I will be using are from [Bootstrap breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/ "Bootstrap").

| Screen Size | Breakpoint |
| ----------- | ---------- |
| x-small     | <576px     |
| small       | => 576px   |
| medium      | => 768px   |
| large       | => 992px   |
| x-large     | => 1200px  |

# Deployment

Following writing the code then commiting and pushing to GitHub, this project was deployed using GitHub by the following steps.

+ Navigate to the repository on github and click 'Settings'.
+ Then select 'Pages' on the side navigation.
+ Select the 'None' dropdown, and then click 'master'.
+ Click on the 'Save' button.
+ Now the website is now live on https://emanuelcaires.github.io/Factorygym/
+ If any changes are required, they can be done, commited and pushed to GitHub and the changes will be updated.






# Testing

I feel that the site has hit the goals required by all parties. The site responds nicely to all different screen sizes, the images look clean and sharp on all device sizes with very little, large blank spaces. It allows the user to navigate around easily and aslo make contact via the contact form or social media simply. It The content is simple and to the point and the site is not overcrowded as to put the user off.
\
&nbsp;

I have encountered several issues during testing. 
 + I initially decided to create the site with a minimum width of 992px as my largest styling, however the site just did not look right so added an x-large screen size.

 + In my wireframes, I had designed to only have a 'Join Us' button on the larger screen sizes. While I was developing the site, this did not make sence. There was such a long scroll with it being a one-page site, I felt I needed to speed up the movement for someone who was instantly interested so included it on all screen sizes.

 + On actual smaller devices, instead of on Chrome Developer, the main navigation menu did not show the 'Contact' link. I simply changed the styling of the links and the changed the ul to flex-start and all is now clearly visable.

 + I was having issues with the navigation bar scrolling about 15px when I scrolled down on smaller devices whilst working on Chrome Developer. I lost a lot of time trying to figure out the issue, but when I tried the site on an acual device, the navigation bar stayed fixed as the code dictated. This was a bug in Chrome Developer and not with my site.

 + The main navigation on smaller devices was initially set to 90vh, however on testing on a physical device, the user could see the site scrolling at the bottom if they were to slide up or down. This looked very poor and clumsy on the eye, so I adjusted it to 100vh to cover it up.

 + I found that I was repeating alot of code in my style.css file in order to center items. I created a class to do this and then applied it whee needed.

 + All my buttons were styled completly differently. I added an animation to all buttons so there is a continuity between them all.

 + When I was validating HTML code, I had one error showing. This was in the contact form where I had a method of '#'. I was under the understanding that POST method should have been used, but when I did, it caused an error instead of going to my contact.html page. After a while I tried using GET and it worked solving my validation problem. The results of my validation for HTML and CSS are below.

    - HTML (index.html) validator [results](wireframes/html-validate.JPG "W3C HTML")
    - HTML (contact.html) validator [results](wireframes/html-contact-validate.JPG "W3C HTML")
    - CSS validator [results](wireframes/css-validate.JPG "W3C CSS")

 + On testing on a physical mobile device, I thought that the google search bar looked odd, being white and my header a dark colour. For user experiance and to make it look cleaner and more fluid, I changed the colour to match using the following code.

 ```
 <meta name="theme-color" content="#121A18">
 ```

 + When going through my UX section, to ensure that all my goals were met for the project, I noticed that I had missed one, 'As a user, I want to know that the club is well established'. I adjusted the text in the welcome section to suit.
\
&nbsp;

# Unfixed Bugs

My learning has limited my use of the hamburger for smaller devices. It works nicely to open the menu up, but a tap of the hamburger again should close the menu down again. It does not do this, and the link has to be selected to enable the user to exit out of it. From my research it seems that all the streamline methods are using JavaScript and I am yet to learn this.





# Tech Stacks

## Languages
* [HTML](https://en.wikipedia.org/wiki/HTML "HTML")
* [CSS](https://en.wikipedia.org/wiki/CSS "CSS")

## Libraries & Framework
* [Google Fonts](https://fonts.google.com/ "Google Fonts")
* [Font Awesome library](https://fontawesome.com/ "Font Awesome")
## Tools
* [Gitpod](https://www.gitpod.io/ "Gitpod")
* [Balsamic](https://balsamiq.com/wireframes/ "Balsamic")
* [W3C HTML Validation Service](https://validator.w3.org/ "W3C HTML")
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ "W3C CSS")
* [Bootstrap](https://getbootstrap.com "Bootstrap")
* [Font Awesome library](https://fontawesome.com/ "Font Awesome")
* [Google Fonts](https://fonts.google.com/ "Google Fonts")
# Features

+ Add a menbership Page where will be able TO gym subcription and classes booked.
+ Add a booking in system classes.
+ Add a Marchandize page whit clothes sports suplements.



# Credits

For code insperation, help and advice,
* [Simen Daehlin](https://github.com/Eventyret "Simen Daehlin")

For content and style insperation,
* [3D Triathlon Club](https://www.3dtri.ie/ "3D Triathlon Club")
* [Limerick Triathlon Club](https://limericktriathlon.com/ "Limerick Triathlon Club")
* [Portmarnock Triathlon Club](https://www.portmarnocktriathlonclub.com/ "Portmarnock Triathlon Club")