# jromatowski-portfolio
<!-- 
A README.md file that includes the following sections:
 An embedded screenshot of the app
 List of the Technologies used
 Installation instructions
 Your User stories – who are your users, what do they want and why?
 Your Wireframes – sketches of major views / interfaces in your application
 Descriptions of any Unsolved problems or major hurdles you had to overcome -->

 ## Screenshot of App

# ![](/screenshot-of-app.png)

## Technologies Used

I used HTML, CSS, and JavaScript to create this website.

## Link to Website

https://jromatowski-portfolio.netlify.app/

## User Stories

- As a non-technical HR manager, I want to quickly see the skills and experience of a candidate, so that I can evaluate whether the candidate meets the requirements for an open position at my company.

- As a mid-level engineer, I want view a junior developer's project and read their code, so that I can evaluate their coding skills.

- As a friend of the person who built this portfolio, I want to see what my friend has built so that I have an understanding of what they do as a developer and I can encourage them.

## Wireframes 

# ![](/wireframe1.jpeg)
# ![](/wireframe2.jpeg)
# ![](/wireframe3.jpeg)

## Hurdles I Overcame

- I struggled with getting circles around the menu navigation items. 

- I struggled figuring out how to get those circles to change color when I mouseovered them.

- I unintentionally designed for the desktop version first, and then had to redo some things to make it work for phones.  This was annoying.  

- I really struggled getting my photos and text blocks to format correctly for mobile.  I ended up  going through the dev tools list of devices and then picking a general resolution where the content looked the best on mobile, then hard capped height/width to that, rather than using %'s.  In this case I'm using Height: 300px and Width: 400px.

## Descriptions of Unsolved Problems 

- My Contact Form doesn't work.  I followed two tutorials online unsuccessfully.  I need to make sure that stored inputs are getting saved as an object and then stored into an array.  Currently when you hit "submit" the form just resets.

- I hardcoded everything in JS.  Need to spend time writing functions for all the code I repeated.

- I could not get media queries to work.  My first impression is that this has to do with how I'm labeling elements.  I will probably have to rebuild the whole thing from scratch to make sure I'm using semantic labels correctly.

- I ran into a lot of issues with parent/children mediaQueries, which led to me giving almost everyone element in HTML an "id", which led to a lot of repeating in the JS. I need to figure this out.  After some light googling my first thought is to try using "childNodes", store into an array, and then call the necessary array index.

## Future Ideas
- Really like the idea of a Night/Day mode button. 

- My preference would be to have the "Cat" button bring up a cat gallery on the page, keeping people on the page rather than linking away from it.  Not sure how this will affect the overall aesthetic.  Might scrap it after seeing it.

- Not sure how I feel about the flat white background.  Some sort of outline, background image, or background color might create more depth.  I was looking at other websites online and notice most have either multiple colors of similar shades to give depth or have a lot of division lines to structure the page.

- Will probably squish portoflio and resume page into one.  Not sure if necessary.






