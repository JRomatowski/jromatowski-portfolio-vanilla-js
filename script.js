

// BUTTON VARIABLES

const key1 = document.querySelector('#key1')
const key2 = document.querySelector('#key2')
const key3 = document.querySelector('#key3')
const key4 = document.querySelector('#key4')
const key5 = document.querySelector('#key5')

const phone1 = document.querySelector('#phone-portfolio')
const phone2 = document.querySelector('#phone-resume')
const phone3 = document.querySelector('#phone-info')
const phone4 = document.querySelector('#phone-us')
const phone5 = document.querySelector('#phone-cat')

const homeKey = document.querySelector('#title')
const bottomHomeKeyOne = document.querySelector('#return-home1')
const bottomHomeKeyTwo = document.querySelector('#return-home2')
const bottomHomeKeyThree = document.querySelector('#return-home3')
const bottomHomeKeyFour = document.querySelector('#return-home4')

const mainPage = document.querySelector('.main-page')
const portfolioPage = document.querySelector('.portfolio-page')
const resumePage = document.querySelector('.resume-page')
const iPage = document.querySelector('.i-page')
const usPage = document.querySelector('.us-page')

const portfolioTelemannCd2 = document.querySelector('#telemann-cd2-container')

const resumeTeachingArticle= document.querySelector('#resume-teaching-article')
const resumePerformingArticle = document.querySelector('#resume-performance-article')
const resumeAdminArticle = document.querySelector('#resume-admin-experience')
const resumeEducationArticle = document.querySelector('#resume-education-article')

//  LEFTOVER IDEA - AFRAID TO DELETE YET
const explainPortfolio = document.querySelector('#explain-portfolio')
const explainResume = document.querySelector('#explain-resume')
const explainI = document.querySelector('#explain-i')
const explainUs = document.querySelector('#explain-us')
const explainCat = document.querySelector('#explain-cat')

// CONSOLE.LOGS

// console.log(contactForm);
// console.log(key1)
// console.log(key2)
// console.log(key3)
// console.log(key4)
// console.log(key5)
// console.log(homeKey)
// console.log(bottomHomeKeyOne)
// console.log(mainPage)
// console.log(portfolioPage)
// console.log(resumePage)
// console.log(iPage)
// console.log(usPage)
// console.log(explainPortfolio)
// console.log(explainResume)
// console.log(explainI)
// console.log(explainUs)
// console.log(resumeTeachingArticle)

// CONTACT FORM

const btn = document.getElementById('btn');
const form = document.getElementById('contact-form');

btn.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    form.reset();
});

// CLICK EVENT LISTENERS

bottomHomeKeyOne.addEventListener('click', () => {
    // console.log("homeKey works")
    mainPage.style.display = "block";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "none";
})

bottomHomeKeyTwo.addEventListener('click', () => {
    // console.log("homeKey works")
    mainPage.style.display = "block";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "none";
})

bottomHomeKeyThree.addEventListener('click', () => {
    // console.log("homeKey works")
    mainPage.style.display = "block";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "none";
})

bottomHomeKeyFour.addEventListener('click', () => {
    // console.log("homeKey works")
    mainPage.style.display = "block";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "none";
})

homeKey.addEventListener('click', () => {
    // console.log("homeKey works")
    mainPage.style.display = "block";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "none";
})

key1.addEventListener('click', () => {
    // console.log("key1 works")
    mainPage.style.display = "none";
    portfolioPage.style.display = "block";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "none";
})

key2.addEventListener('click', () => {
    // console.log("key2 works")
    mainPage.style.display = "none";
    portfolioPage.style.display = "none";
    resumePage.style.display = "block";
    iPage.style.display = "none";
    usPage.style.display = "none";
})

key3.addEventListener('click', () => {
    // console.log("key3 works")
    mainPage.style.display = "none";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "block";
    usPage.style.display = "none";
})

key4.addEventListener('click', () => {
    // console.log("key4 works")
    mainPage.style.display = "none";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "block";
})

key5.addEventListener('click', () => {
    // console.log("key5 works")
    // Opens link to google search for "cat"
    window.open('https://www.google.com/search?q=cat&sxsrf=ALiCzsZrnpDQODBiu-y5uAONjny3YMItmA:1656038727296&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiymsyAicX4AhUrDEQIHQq8A2oQ_AUoAXoECAIQAw&biw=965&bih=802&dpr=2', '_blank');
})

phone1.addEventListener('click', () => {
    // console.log("key1 works")
    mainPage.style.display = "none";
    portfolioPage.style.display = "block";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "none";
})

phone2.addEventListener('click', () => {
    // console.log("key2 works")
    mainPage.style.display = "none";
    portfolioPage.style.display = "none";
    resumePage.style.display = "block";
    iPage.style.display = "none";
    usPage.style.display = "none";
})

phone3.addEventListener('click', () => {
    // console.log("key3 works")
    mainPage.style.display = "none";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "block";
    usPage.style.display = "none";
})

phone4.addEventListener('click', () => {
    // console.log("key4 works")
    mainPage.style.display = "none";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "block";
})

phone5.addEventListener('click', () => {
    // console.log("key5 works")
    // Opens link to google search for "cat"
    window.open('https://www.google.com/search?q=cat&sxsrf=ALiCzsZrnpDQODBiu-y5uAONjny3YMItmA:1656038727296&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiymsyAicX4AhUrDEQIHQq8A2oQ_AUoAXoECAIQAw&biw=965&bih=802&dpr=2', '_blank');
})

portfolioTelemannCd2.addEventListener('click', () => {
    // console.log("cdbutton works")
    // Opens link to spotify playlist of CD
    window.open('https://open.spotify.com/album/6o8D7qRTpFKOWL1yADlhtY?si=csmR6wloQHG4TsbJmNrHsQ');
})

// MOUSEOVER EVENT LISTENERS

key1.addEventListener("mouseover", function( event ) {
    event.target.style.borderColor = "#8000ff";
})

key1.addEventListener('mouseleave', function(event) {
    event.target.style.borderColor = '';
    explainPortfolio.style.display = "none";
} )

key2.addEventListener("mouseover", function( event ) {
    event.target.style.borderColor = "#8000ff";
})

key2.addEventListener('mouseleave', function(event) {
    event.target.style.borderColor = '';
    explainResume.style.display = "none";
} )

key3.addEventListener("mouseover", function( event ) {
    event.target.style.borderColor = "#8000ff";
})

key3.addEventListener('mouseleave', function(event) {
    event.target.style.borderColor = '';
    explainI.style.display = "none";
} )

key4.addEventListener("mouseover", function( event ) {
    event.target.style.borderColor = "#8000ff";
})

key4.addEventListener('mouseleave', function(event) {
    event.target.style.borderColor = '';
    explainUs.style.display = "none";
} )

key5.addEventListener("mouseover", function( event ) {
    event.target.style.borderColor = "#8000ff";
})

key5.addEventListener('mouseleave', function(event) {
    event.target.style.borderColor = '';
    explainCat.style.display = "none";
})

resumeTeachingArticle.addEventListener("mouseover", function( event ) {
    event.target.style.borderColor = "#8000ff";
})

resumeTeachingArticle.addEventListener('mouseleave', function(event) {
    event.target.style.borderColor = '';
    explainCat.style.display = "none";
} )

resumePerformingArticle.addEventListener("mouseover", function( event ) {
    event.target.style.borderColor = "#8000ff";
})

resumePerformingArticle.addEventListener('mouseleave', function(event) {
    event.target.style.borderColor = '';
    explainCat.style.display = "none";
} )

resumeAdminArticle.addEventListener("mouseover", function( event ) {
    event.target.style.borderColor = "#8000ff";
})

resumeAdminArticle.addEventListener('mouseleave', function(event) {
    event.target.style.borderColor = '';
    explainCat.style.display = "none";
} )

resumeEducationArticle.addEventListener("mouseover", function( event ) {
    event.target.style.borderColor = "#8000ff";
})

resumeEducationArticle.addEventListener('mouseleave', function(event) {
    event.target.style.borderColor = '';
    explainCat.style.display = "none";
} )

// EXAMPLE OF TIMEOUT CODE
// key1.addEventListener("mouseover", function( event ) {
//     event.target.style.borderColor = "#8000ff";
    // explainPortfolio.style.display = "block";
//     setTimeout(function() {
//       event.target.style.borderColor = "";
//       explainPortfolio.style.display = "none";
//     }, 300);
//   }, false);


// C/P'd this from Isabel Cortes's Website

//   $('.ui-button').on('click', function(){
//     $('body').css('background-color', 'white')
//   })

//   $('#box2').on('click', function(){
//     $('#main-page').fadeOut(300, function(){$('#projects-info').fadeIn();});
//   });
//   $('#cv-info, #x').on('click', function(){
//     $('#cv-info').fadeOut(300, function(){$('#main-page').fadeIn();});
//   });

//   $('#box4').on('click', function(){
//     $('#main-page').fadeOut(300, function(){$('#about-info').fadeIn();});
//   });
//   $('#box5').on('click', function(){
//     $('#main-page').fadeOut(300, function(){$('#cv-info').fadeIn();})