
//Contact Button



//This sets the Button to the horizontal position and
//pushes the ContactInfo off the screen by moving the x-coordinate
TweenMax.set ('.button', {rotation:"270deg", x:-35});
TweenMax.set ('.ContactInfo', {x:-245});

//This function fades the Button out and 
//pushes the ContactInfo to the right by clicking on the Button
function showContact (){

TweenMax.to('.button', .3, {alpha:0});
TweenMax.to('.ContactInfo', 1, {x:0, delay:.25, ease:'Quad.easeIn'})

}

$('.button').click(showContact)



//This function pushes the ContactInfo to the right (offscreen)
//and fades in the Button
function hideContact () {
TweenMax.to ('.button', .9, {delay:.25, alpha:1});
TweenMax.to('.ContactInfo', .3, {x:-245,  ease:'Quad.easeOut'})

}
$('.ContactInfo').click(hideContact)

//I need to find a way to make the button and 
//the contactInfo to move together on the y-axis
//maybe if I make the type rotate and make the box tall & skinny
//they will fall together....?









//LIGHTBOX
TweenMax.set ('.blackbox', {alpha:0});
TweenMax.to('.ImageOne', {alpha:1, scale:1})
TweenMax.to('.ImageTwo', {alpha:1})
TweenMax.to('.ImageThree', {alpha:1})

function enlargeImage (){

TweenMax.to('.ImageOne', 1, {scale:1.5, x:350, y:150, z:2});
TweenMax.to('.blackbox', .91, {alpha:.9})
TweenMax.to('.ImagesTwo', 1, {alpha:0})
TweenMax.to('.ImagesThree', .1, {alpha:0})
}

$('.ImageOne').click(enlargeImage)


function shrinkImage (){

TweenMax.to('.ImageOne', 0.3, {scale:1, x:0, y:0, z:2});
TweenMax.to('.blackbox', .3, {alpha:.0})
TweenMax.to('.ImagesTwo', .8, {alpha:1})
TweenMax.to('.ImagesThree', .8, {alpha:1})
}

$('.ImageOne').dblclick(shrinkImage)

