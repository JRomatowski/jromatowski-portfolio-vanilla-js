
// C/P'd this from Isabel Cortes's Website

//   $('.ui-button').on('click', function(){
//     $('body').css('background-color', 'white')
//   })

//   $('#box2').on('click', function(){
//     $('#main-page').fadeOut(1000, function(){$('#projects-info').fadeIn();});
//   });
//   $('#cv-info, #x').on('click', function(){
//     $('#cv-info').fadeOut(1000, function(){$('#main-page').fadeIn();});
//   });

//   $('#box4').on('click', function(){
//     $('#main-page').fadeOut(1000, function(){$('#about-info').fadeIn();});
//   });
//   $('#box5').on('click', function(){
//     $('#main-page').fadeOut(1000, function(){$('#cv-info').fadeIn();})

// BUTTON VARIABLES

const key1 = document.querySelector('#key1')
const key2 = document.querySelector('#key2')
const key3 = document.querySelector('#key3')
const key4 = document.querySelector('#key4')
const key5 = document.querySelector('#key5')

const mainPage = document.querySelector('.main-page')
const portfolioPage = document.querySelector('.portfolio-page')
const resumePage = document.querySelector('.resume-page')
const iPage = document.querySelector('.i-page')
const usPage = document.querySelector('.us-page')

// BUTTON TESTS

// console.log(key1)
// console.log(key2)
// console.log(key3)
// console.log(key4)
// console.log(key5)

// console.log(mainPage)
// console.log(portfolioPage)
// console.log(resumePage)
// console.log(iPage)
// console.log(usPage)

// BUTTON EVENT LISTENERS

// Write Blank Out Function

key1.addEventListener('click', () => {
    console.log("key1 works")
    mainPage.style.display = "none";
    portfolioPage.style.display = "block";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "none";
})

key2.addEventListener('click', () => {
    console.log("key2 works")
    mainPage.style.display = "none";
    portfolioPage.style.display = "block";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "none";

})

key3.addEventListener('click', () => {
    console.log("key3 works")
    mainPage.style.display = "none";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "block";
    usPage.style.display = "none";

})

key4.addEventListener('click', () => {
    console.log("key4 works")
    mainPage.style.display = "none";
    portfolioPage.style.display = "none";
    resumePage.style.display = "none";
    iPage.style.display = "none";
    usPage.style.display = "block";

})

key5.addEventListener('click', () => {
    console.log("key5 works")
    // Open Cat Link or Google Search in a new tab

})