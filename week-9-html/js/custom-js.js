// the first thing that we are going to do is make sure all our HTML has been rendered
document.addEventListener('DOMContentLoaded', (loaded) =>{
    // test to see if our JS is connected
    // LAB 3 - Welcome Message
    console.log('Welcome to JavaScript!');
    // how to declare a variable in JS
    // let can be overridden
    // don't need to define variable type
    let a = 200; //int 
    let b = 180;
    let c = a + b;
    // const variable cannot be changed once the value has been assigned
    const value1 = 500;
    const value2 = 600;
    let total = value1 + value2;
    // how to output our HTML
    document.getElementById("ex1").innerHTML = "<h4>JavaScript Variables</h4>" + 
        "<p>Let: The value of C is " + c + "</p>" + "<p>Const: The total is : " + "</p>";
    // style HTML with JS to make HTML visible
    // do NOT do this on assignments/projects. don't do inline css
    document.getElementById("ex1").style.color = "#f8f8f8";
    document.getElementById("ex1").style.padding = "0% 10%";
    // create global header - not the easiest way to do this
    document.getElementById("lesson-global-header").innerHTML =
        "<div id='logo-container'>" +
            "<a href='index.html'>" +
            "<img id='logo' src='./img/logo.png' alt='header logo'>" +
            "</a>" +
        "</div>" +
        "<nav><menu>" +
            "<li><a href='#'>Item 1</a></li>" +
            "<li><a href='#'>Item 2</a></li>" +
            "<li><a href='#'>Item 3</a></li>" +
        "</menu></nav>";
    document.getElementById("lesson-global-header").style.cssText = "display: flex; height: 125px; background-color: #f8f8f8; align-items: center;";
    document.getElementById("logo-container").style.cssText = "flex-grow: 1; height: 110px; width: auto;";
    document.getElementById("logo").style.cssText = "width: auto; height: 100%;";
    // LAB 3 - add content to main & style with CSS
    document.getElementById("lab-main").innerHTML =
        "<div>" + 
            "<p>JavaScript Lab 3 !!! ....</p>" + 
        "</div>";
    document.getElementById("lab-main").style.cssText = "display: flex; height: 100px; font-size: 80px;";
});