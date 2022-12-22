# Tic Tac Toe

Breifne Bakery is a site for potential customers of the fictional company Breifne Bakery. It allows the visitor to gleam an idea into what Breifne Bakery is, what they provide, and if there is any opportunity for employment. 
It will be useful to the visitor as while the name alone might not fully signify what the company is focused on, after visiting the site they will have a very clear understanding that this is a pizza manufacturing business.

![Responsive Mockup](assets/images/breifne-bakery-resposive-mockup.png)

## Features 

In this section, you should go over the different parts of your project, and describe each in a sentence or so. You will need to explain what value each of the features provides for the user, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

### Existing Features

- __Navigation Bar__

  - Featured on all four pages, the full responsive navigation bar includes links to the Logo, Home page, Product page, Opportunities page and Contact page, and is identical in each page to allow for easy navigation except for the current active page. This is to clearly signify which page the user is currently on.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 

![Navigation Bar](assets/images/navigation-bar.png)

- __The landing page image__

  - The landing includes a photograph with text overlay to allow the user to see exactly what the company is about
  - This section introduces the user to Breifne Bakery with an example pizza in an oven to grab their attention and immediately signify what the company is about

![Landing Page](assets/images/landing-page-img.png)

- __Why Us Section__

  - The Why Us section lists strengths and attributes of Breifne Bakery in a concise and easy to understand manner, including images that immediately draw attention to the point stated.
  - This user will see what the company's focuses are, and immediately let them know what the company values.

![Why Us](assets/images/why-us-img.png)

- __The Footer__ 

  - The footer section includes relevant copyright information, and a link to the company's LinkedIn for additional means of contact.
  - The footer is valuable to the user as it lets them know this is a corporate entity.

![Footer](assets/images/footer-img.png)

- __Products__

  - The products page will provide the user with supporting images to see what the manufactured products look like, along with a brief description. 
  - This section is valuable to the user as they will be able to easily identify the types of products that are produced by the company, and what it specialises in.

![Products](assets/images/products-img.png)

- __The Opportunities Page__

  - This page will allow the user to see what kind of job vacancies are available in the company.
  - This is useful the the user as they may see if there are any specific shortages in the workforce, and may even spark the idea for them to apply for employment at the company

![Opportunities](assets/images/opportunities-img.png)

- __The Contact Page__

  - This page will allow the user to see what available methods there are to contact the company.
  - It also lists the company's address, as well as an embedded Google map to further ease in locating of the company.

![Contact](assets/images/contact-img.png)

### Features Left to Implement

- An additional History page would be useful to allow the user to get a much deeper background on the company, including whether or not the company has strayed from its original path.
- This would provide valuable insight into the leadership of the company and may promote employment / B2B enterprise.

## Testing 

Testing has been done to ensure that the navigation bar will always point to the correct address, leaving no chance of an error 404. Furthermore, the form in contact.html will only proceed once the Name, Surname, Email, Subject, and Message field have been 
filled in.

The project has been tested to work on desktop, laptop, both tablet orientations, and both mobile orientations. The website will 
adjust the content depending on the screen real estate available.

An interesting challenge which seemed harder than it should have was making the footer behave in the way I wanted it to. I was unable to get the footer at the bottom of a scrollable page, while at the very bottom of a page that did not use the entire viewport height simultaneously. As I had not encountered flex boxes up until this point, this led me to search online for a solution. The solution was provided to me on stackoverflow, and then further allowed me to see the use of flex boxes. I then further incorporated flex boxes into my code in other areas, especially when dealing with resposive programming.

In future projects I will definitely rely less on the "vh" size unit, as while it did what I needed it to on the desktop side of things, it made the responsive design element much more difficult. My reasoning for using "vh" initially was that since most monitors have the same aspect ratio, this should get my project to look the same across the 3 main current resolutions (1920x1080, 2160x1440, and 3840x2160 which I am currently on). Unfortunately for myself, I did not account for the mobile ability to rotate the display, nor for the fact that when using zoom on the desktop, the elements themselves will not zoom out if based on the viewport height as opposed to a set number, or % of one.


### Validator Testing 

- HTML
  - No errors were returned when passing files through the official [W3C validator](https://validator.w3.org/nu/)
  - ![Index](assets/images/index-html-validation.png)
  - ![Product](assets/images/products-html-validation.png)
  - ![Opportunities](assets/images/opportunities-html-validation.png)
  - ![Contact](assets/images/contact-html-validation.png)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)
  - ![Style](assets/images/style-css-validation.png)

### Lighthouse Testing

- Desktop
  - All desktop testing scored above 90% in all categories through the lighthouse pagespeedinsights page (https://pagespeed.web.dev/)
  - ![Index](assets/images/index-lighthouse-desktop.png)
  - ![Product](assets/images/products-lighthouse-desktop.png)
  - ![Opportunities](assets/images/opportunities-lighthouse-desktop.png) 
  - ![Contact](assets/images/contact-lighthouse-desktop.png)

- Mobile
  - All mobile testing scored above 90% except for the performance category via lighthouse
  - ![Index](assets/images/index-lighthouse-mobile.png)
  - ![Product](assets/images/products-lighthouse-mobile.png)
  - ![Opportunities](assets/images/opportunities-lighthouse-mobile.png)
  - ![Contact](assets/images/contact-lighthouse-mobile.png)

### Unfixed Bugs

- A minor unfixed bug is when viewing the index page on a landscape mobile device, the final image is slightly shorter than the rest. This may be due to the use of the "vh" sizing unit which caused diffiiculty when implementing responsive design. All of the other cases where such an issue ocurred were resolved, however despite my testing I could not get the image to respond to any of my "height" selectors and values in the correct manner.

- The deployed page on Github Pages does not display the LinkedIn symbol, therefore hiding the link in the footer. This was not an issue while in gitpod, and despite attempting to move the script which imports the fontawesome image around and ensuring it is the right one, the issue did not get resolved

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - Select the Pages tab within the left column
  - From the source section drop-down menu, select the default "Deploy from a branch" option
  - In the branch section, select the "main" branch from the provided drop-down menu
  - Press the save section next to the previous drop down to publish the site
  - Wait a few moments for the website to build, which will be signified by a link appearing at the top after a refresh once sufficient time has passed

The live link can be found here - https://gdim01.github.io/project-one/ 


## Credits 

### Content 

- The code for the footer was found on stackoverflow (https://stackoverflow.com/questions/44258085/css-how-to-attach-footer-to-the-bottom-of-the-page)
- Many reminders / new attributes not in the Code Institute course (e.g. flex boxes) were found on (https://www.w3schools.com/)
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- Form dump used was from Code Institute's form dump address used during the "Love Running" project (https://formdump.codeinstitute.net/)
- Original JPEGs converted to WEBPs using (https://cloudconvert.com/jpg-to-webp)
- LinkedIn icon provided by (https://fontawesome.com/icons/linkedin?s=&f=brands)

### Media

- All of the photos used on the website are from: (https://pixabay.com/photos/)


readme-template/README.md at master · Code-Institute-Solutions/readme-template