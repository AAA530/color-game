/*************** starting of js code ********************/
var squares = document.querySelectorAll(".square");
var colors = genrateRandomColor(6);

var pickedcolor = randomcolor();
var question = document.querySelector(".question");

question.textContent = pickedcolor;
for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor = colors[i];
}

function samecolor(){
    for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor = pickedcolor;
}
}
    

for( var j=0;j<squares.length;j++){
    squares[j].addEventListener("click",function select(){

        var Scolor = this.style.backgroundColor;
        if(Scolor === pickedcolor){
            samecolor();
            question.textContent = "you have gussed correctly!!!";
        }
        else{
            question.textContent = pickedcolor + " sorry click again";
            this.style.backgroundColor = "rgb(58, 51, 51)";
        }
    })
}

//random color pick
function randomcolor(){
   var x = Math.floor(Math.random()*colors.length);
   return colors[x];
}

//generate ramdom color 
function genrateRandomColor(y){
    var temp = [];
    for(var i=0;i<y;i++)
    {
        temp.push(getColor());
    }
    return temp;
}

//create random color
function getColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

     return "rgb("+r + ", "+ g + ", " + b +")";
}

/****************reset***********************/
var reset = document.querySelector(".reset");
reset.addEventListener("click",function(){
    alert("This will reset whole page");
    location.reload();
})

/***easy */
var easy = document.querySelector(".easy");
easy.addEventListener("click", function easyfun(){
    colors = genrateRandomColor(3);
    pickedcolor = randomcolor();
    question.textContent = pickedcolor;
    for(var i=0;i<squares.length;i++)
    {

        squares[i].style.backgroundColor = colors[i]
        if(i>=3)
        {
            squares[i].style.display = "none";
        }
    }
});

/**********************/
var hard = document.querySelector(".hard");
hard.addEventListener("click", function hardfun(){
    colors = genrateRandomColor(6);
    pickedcolor = randomcolor();
    question.textContent = pickedcolor;
    for(var i=0;i<squares.length;i++)
    {

        squares[i].style.backgroundColor = colors[i]
        squares[i].style.display = "block";
    }
})