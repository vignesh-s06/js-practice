/* 1.Trigger event when users click the button
   2.Write the function to generate a color
   3.Apply the function to the body tag*/

   let myButton = document.getElementById('color-generator');
   //console.log(document);
   //console.log(document.getElementById);
   //console.log(myButton);

   myButton.addEventListener('click',function(){
        let randomColor = getRandomColor(),
            bodyTag = document.getElementById('body-tag'),
            h1Tag = document.getElementById('color');
        bodyTag.style.backgroundColor = randomColor;
        h1Tag.innerHTML = randomColor;
   });

   //2.write the function to generate a color


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor(){
    
    //rgb(0-255 0-255 0-255)

    let red, green, blue ;
    red = getRandomInt(0, 255);
    blue = getRandomInt(0, 255);
    green = getRandomInt(0, 255);

    console.log(red, green, blue);

    style = 'rgb('+ red + ' ' + green + ' ' + blue + ')'

    return style;
}