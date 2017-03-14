var pic=[
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg"
];

var sTextF=[
    "Clean",
    "Technical",
    "Responsive",
    "Documentation",
    "Quality",
    "Support"
];

var sTextS=[
    "Code",
    "Support",
    "",
    "",
    "",
    ""
];


var fWorksAuthor=[
    "Ginger Beast",
    "Jessica White",
    "Chelsea Staub",
    "Melissa Giraldo",
    "Hana Nitsche",
    "Kristina Romanova",
    "Misa Campo"
]

var fWorksDate=[
    "14 March 2017",
    "05 January 2017",
    "07 April 2017",
    "18 May 2017",
    "29 September 2016",
    "17 July 2016",
    "03 March 2016"
]

var teamNames=[
    "Sarah Brown",
    "David Jones",
    "Kate Smith",
    "Peter Parker",
    "Jim Moss",
    "John Marks",
    "Joe Mades",
    "Julia Anderson"
];

var teamJobs=[
    "Director",
    "Creative Director",
    "Manager",
    "Manager",
    "Designer",
    "Designer",
    "Developer",
    "Developer"
];

var teamContacts=[
    ['<i class="fa fa-twitter" aria-hidden="true"></i>','<i class="fa fa-facebook" aria-hidden="true"></i>'],
    ['<i class="fa fa-twitter" aria-hidden="true"></i>', '<i class="fa fa-facebook" aria-hidden="true"></i>','<i class="fa fa-google-plus" aria-hidden="true"></i>'],
    ['<i class="fa fa-twitter" aria-hidden="true"></i>','<i class="fa fa-facebook" aria-hidden="true"></i>'],
    ['<i class="fa fa-twitter" aria-hidden="true"></i>','<i class="fa fa-facebook" aria-hidden="true"></i>'],
    ['<i class="fa fa-twitter" aria-hidden="true"></i>', '<i class="fa fa-facebook" aria-hidden="true"></i>','<i class="fa fa-google-plus" aria-hidden="true"></i>'],
    ['<i class="fa fa-twitter" aria-hidden="true"></i>','<i class="fa fa-facebook" aria-hidden="true"></i>'],
    ['<i class="fa fa-twitter" aria-hidden="true"></i>','<i class="fa fa-facebook" aria-hidden="true"></i>'],
    ['<i class="fa fa-twitter" aria-hidden="true"></i>', '<i class="fa fa-facebook" aria-hidden="true"></i>','<i class="fa fa-google-plus" aria-hidden="true"></i>']    
];


var text=[
"There is nothing scary in the darkness, if you encounter it face-to-face. The inevitable price we pay for our happiness is eternal fear to lose it. When you start thinking a lot about your past, it becomes your present and you can't see your future without it.",
"There is nothing scary in the darkness, if you encounter it face-to-face. The inevitable price we pay for our happiness is eternal fear to lose it. When you start thinking a lot about your past, it becomes your present and you can't see your future without it.",
"There is nothing scary in the darkness, if you encounter it face-to-face. The inevitable price we pay for our happiness is eternal fear to lose it. When you start thinking a lot about your past, it becomes your present and you can't see your future without it."
];
var author=[
  "-—Anna Balashova, Philosopher",
  "-—Anna Balashova, Philosopher",
  "-—Anna Balashova, Philosopher",
  "--—Anna Balashova, Philosopher"
];

(function(){
for(i=0;i<text.length;i++){
  but=document.createElement("div");
  but.setAttribute("class","buttons");
  document.getElementsByClassName("heading")[0].appendChild(but);
  but.setAttribute("onclick","celil(this)");
   
  but.setAttribute("name",i);

  new_div=document.createElement("div");
  new_div.setAttribute("class","new_div");
  document.getElementById("row").appendChild(new_div);

    p_tag=document.createElement("p");
  p_tag.setAttribute("class","textt");
  p_tag.innerHTML=text[i];
  new_div.appendChild(p_tag);


  quote=document.createElement("blockquote");
  quote.setAttribute("class","quote");
  quote.innerHTML=author[i];
  new_div.appendChild(quote);



}

})()

div_left=0;

function celil(b){

k=parseInt(b.getAttribute("name"));



for(i=0;i<text.length;i++){
  document.getElementsByClassName("new_div")[i].style.left=div_left+"px";
  document.getElementsByClassName("buttons")[i].style.background="white";
}
b.style.background="black";

div_left=-1000*k;





}

var u=11,z=11,p=11;
  var  topp=-15;
var contentT=document.createElement("img");

// document.getElementsByClassName("ccodeT")[0].style.display="block";
document.getElementsByClassName("ccode")[0].style.background="white";


k=0; z=0;
document.getElementsByClassName("slide")[0].id=0;

for(i=0;i<document.getElementsByClassName("pictures")[0].getElementsByTagName("img").length;i++){
    document.getElementsByClassName("pictures")[0].getElementsByTagName("img")[i].setAttribute("id",i);
}

function change(a){
for(i=0;i<pic.length;i++){
    document.getElementsByClassName("spics")[i].style.border="transparent";
}
document.getElementsByClassName("slide")[0].style.background="url("+a.src+")";
document.getElementsByClassName("slide")[0].style.backgroundSize="cover";
   document.getElementsByClassName("slide")[0].style.backgroundAttachment="fixed";
a.style.border="5px solid white";
a.style.boxSizing="border-box";



if(a.id!="0"){
document.getElementsByClassName("slideFirst")[0].style.color="white";
document.getElementsByClassName("slideSecond")[0].style.color="white";
document.getElementsByClassName("slideThird")[0].style.color="white";
}

else{
document.getElementsByClassName("slideFirst")[0].style.color="#333";
document.getElementsByClassName("slideSecond")[0].style.color="#333";
document.getElementsByClassName("slideThird")[0].style.color="#333";
}
document.getElementsByClassName("slide")[0].id=a.id;
z=a.id;
}


function next(){
  z+=1;
  if(z>2)
  z=0;


for(i=0;i<pic.length;i++){
    document.getElementsByClassName("spics")[i].style.border="transparent";
}

document.getElementsByClassName("pictures")[0].getElementsByTagName("img")[z].style.border="5px solid white";


  document.getElementsByClassName("slide")[0].style.background="url("+pic[z]+")";
document.getElementsByClassName("slide")[0].style.backgroundSize="cover";
   document.getElementsByClassName("slide")[0].style.backgroundAttachment="fixed";

document.getElementsByClassName("slide")[0].id=z;
if(z!=0){
document.getElementsByClassName("slideFirst")[0].style.color="white";
document.getElementsByClassName("slideSecond")[0].style.color="white";
document.getElementsByClassName("slideThird")[0].style.color="white";
}

else{
document.getElementsByClassName("slideFirst")[0].style.color="#333";
document.getElementsByClassName("slideSecond")[0].style.color="#333";
document.getElementsByClassName("slideThird")[0].style.color="#333";
}
  
}

function previous(){
  z-=1;
      if(z<0)
    z=pic.length-1;

  

    document.getElementsByClassName("slide")[0].id=z;
    document.getElementsByClassName("slide")[0].style.background="url("+pic[z]+")";
    document.getElementsByClassName("slide")[0].style.backgroundSize="cover";
       document.getElementsByClassName("slide")[0].style.backgroundAttachment="fixed";
for(i=0;i<pic.length;i++){
    document.getElementsByClassName("spics")[i].style.border="transparent";
}

// document.getElementsByClassName("slide")[0].style.border="5px solid white";
// document.getElementsByClassName("slide")[0].style.boxSizing="border-box";

if(z!=0){
document.getElementsByClassName("slideFirst")[0].style.color="white";
document.getElementsByClassName("slideSecond")[0].style.color="white";
document.getElementsByClassName("slideThird")[0].style.color="white";
}
else{
  document.getElementsByClassName("slideFirst")[0].style.color="#333";
 document.getElementsByClassName("slideSecond")[0].style.color="#333";
  document.getElementsByClassName("slideThird")[0].style.color="#333";  
}

  for(i=0;i<pic.length;i++){
    document.getElementsByClassName("spics")[i].style.border="transparent";
}

document.getElementsByClassName("pictures")[0].getElementsByTagName("img")[z].style.border="5px solid white";
}



leftt=0;
slideNumber=0;
l=0;



function nTeam(){
       if(slideNumber>=5){
       slideNumber=-1;
}
slideNumber+=1;
l=400*slideNumber;  
 
  
       for(i=21;i<29;i++){
    document.getElementById(i).style.left=-l+"px"; }  
 


console.log(slideNumber);

   }


function pTeam(){
       if(slideNumber<=0){
       slideNumber=6;
}
slideNumber-=1;
l=400*slideNumber;  
 
  
       for(i=21;i<29;i++){
    document.getElementById(i).style.left=-l+"px"; }  
 

console.log(slideNumber);
}



function fworksOn(k){
coverr=document.createElement("div");
coverr.setAttribute("id","fworksNewDiv");
k.appendChild(coverr);

 k.style.transform="scale(.9,.9)";

// document.getElementById("#fworksNewDiv").style.transform="scale(.9,.9)";

fworksDiv=document.createElement("div");
fworksDiv.setAttribute("id","fworksDiv");
coverr.appendChild(fworksDiv);

fContent=document.createElement("a");
fContent.setAttribute("id","fworksFirstContent");
fContent.setAttribute("href","#");
fContent.innerHTML=fWorksAuthor[k.id-30];
fworksDiv.appendChild(fContent);

fContentS=document.createElement("p");
fContentS.setAttribute("id","fworksSecondContent");
fContentS.innerHTML=fWorksDate[k.id-30];
fworksDiv.appendChild(fContentS);

contentT=document.createElement("img");
contentT.setAttribute("src","img/eye.png");
contentT.setAttribute("id","contentPic");
fworksDiv.appendChild(contentT);

b=100; g=30;

finterv=setInterval(function(){
    b-=8; z-=3; g-=3
contentT.style.top=b+"px";
fContent.style.top=-g+"px";
fContentS.style.top=-(g-30)+"px";

if(b<=60 && z<=0 && g<=15){
    clearInterval(finterv);
}
}, 1);

contentT.addEventListener("mouseover",function(){
    contentT.setAttribute("src","img/zoom_h.png");
})

contentT.addEventListener("mouseleave",function(){
    contentT.setAttribute("src","img/eye.png");
})


}




function fworksOut(arg){

arg.removeChild(arg.childNodes[1]);
arg.style.transform="scale(1,1)";
}

lleft=0; slideNumberr=0;
u=document.getElementById(30);
function nextF(){
 if(slideNumberr>=3){
       slideNumberr=-1;
}
slideNumberr+=1;
l=u.clientWidth*slideNumberr;  
 
  
       for(i=30;i<37;i++){
    document.getElementById(i).style.left=-l+"px"; }  
 

}




function previousF(){
   if(slideNumberr<=0){
       slideNumberr=4;
}
slideNumberr-=1;
l=u.clientWidth*slideNumberr;  
 
  
       for(i=30;i<37;i++){
    document.getElementById(i).style.left=-l+"px"; }  
 
}


     z=0;
     mz=15; 

function teamMove(k){
   
    t_div=document.createElement("div");
    t_div.setAttribute("id","team_Div");
    k.appendChild(t_div);

    innerDiv=document.createElement("div");
    innerDiv.setAttribute("id","t_innerDiv");
    t_div.appendChild(innerDiv);

      newDiv=document.createElement("div");
    newDiv.setAttribute("id","new_innerDiv");
    t_div.appendChild(newDiv);

    t_p=document.createElement("p");
    t_p.setAttribute("id","t_p");
     t_p.innerHTML=teamNames[k.id-21];
     newDiv.appendChild(t_p);

       t_j=document.createElement("p");
    t_j.setAttribute("id","t_j");
     t_j.innerHTML=teamJobs[k.id-21];
     newDiv.appendChild(t_j);


     for(j=0;j<teamContacts[k.id-21].length;j++){

    
      t_c=document.createElement("a");
      t_c.setAttribute("href","#");
    t_c.setAttribute("id","t_c");
    
     t_c.innerHTML=teamContacts[k.id-21][j];

     newDiv.appendChild(t_c);


     
        
 }
}
 


   
 



function teamLeave(arg){
    arg.removeChild(arg.childNodes[2]);
}

a=document.getElementById("11");
 var p_top=30;
function support(k){
   var slideinterval=setInterval(function(){
    p_top-=10;
     document.getElementsByClassName("slideText")[0].style.top=p_top+"px";

    },10);
    //  k.getElementsByTagName("p")[0].style.top=p_top+"px";
    for(i=11;i<17;i++){
        document.getElementById(i).style.background="none";
        document.getElementById(i).getElementsByTagName("i")[0].style.color="#666";
         document.getElementById(i).getElementsByTagName("p")[0].style.visibility="hidden";
    }
    k.getElementsByTagName("i")[0].style.color="#333";
        k.getElementsByTagName("p")[0].style.visibility="visible";
    
k.style.background="white";
a=k;


}

function liMove(k){
    z=-15;
k.getElementsByTagName("i")[0].style.top=z+"px";
k.getElementsByTagName("i")[0].style.color="#333";

}

function lLi(k){
z+=15;
    k.getElementsByTagName("i")[0].style.top=z+"px";
k.getElementsByTagName("i")[0].style.color="#666";

    a.getElementsByTagName("i")[0].style.top="-15px";
a.getElementsByTagName("i")[0].style.color="#333";
    
}


 function myfunc(k){

    
     k.getElementsByTagName("img")[0].style.opacity="0.5";

 }
 function myfunc2(k){
       k.getElementsByTagName("img")[0].style.opacity="0.5";
 }
        
        function myfunc3(k){
       k.getElementsByTagName("img")[0].style.opacity="0.5";
 }



 function func3(k){
       k.getElementsByTagName("img")[0].style.opacity="1";
 }
 
 function func2(k){
       k.getElementsByTagName("img")[0].style.opacity="1";
 }
   function func1(k){
       k.getElementsByTagName("img")[0].style.opacity="1";
 }





function input(){
 
document.getElementsByTagName("input")[0].placeholder=" "

document.getElementsByTagName("input")[0].style.border="2px solid #ccc "
    


}



function text(){
document.getElementsByTagName("textarea")[0].placeholder=" "
document.getElementsByTagName("textarea")[0].style.border="2px solid #ccc "

}


