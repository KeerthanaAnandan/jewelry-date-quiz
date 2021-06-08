let  first = sessionStorage.getItem("hana");
let  second = sessionStorage.getItem("tul");
let third = sessionStorage.getItem("set");
let fourth = sessionStorage.getItem("net");
let yolSet = sessionStorage.getItem("yolSet");
let yolNet = sessionStorage.getItem("yolNet");

document.querySelector(".firsthide").style.display = "none";
document.querySelector(".secondhide").style.display = "none";
document.querySelector(".thirdhide").style.display = "none";
document.querySelector(".fourthhide").style.display = "none";



let mess;
let typo;


//first
if (
   first >  second &&
   first > third &&
   first > fourth
  
) {
  //typo = "Casual(street wear, sporty) ";
  mess = [
    "Your results show that you are a “Casual basic person” who gives importance to character and personality of a person and also you are someone who most likely to pull off street wear to sporty outfits.",
    "Wearing a right jewelry not only enhances your overall look but also boosts your confidence which will most likely impress your date. ",
"Here are some of the jewelry we suggest based on your personality and interest."
  ];
  document.querySelector(".firsthide").style.display = "block";
}

// second
else if (
   second >  first &&
   second > third &&
   second > fourth
  
) {
 // typo = "Classic , romantic";
  mess = [
"Your results show that you are a “Classic, Romantic and a feminine person” who gives importance to emotions,  equality and protectiveness  and also you are someone who most likely to pull off any classic outfits from formal  blazers to  prom dresses.",
"Wearing a right jewelry not only enhances your overall look but also boosts your confidence which will most likely impress your date. ",
"Here are some of the jewelry we suggest based on your personality and interest.",
]; 
  document.querySelector(".secondhide").style.display = "block";
}
//third
else if (
  third >  second &&
  third >  first &&
  third > fourth
 
) {
  // typo = "3)	Vibrant , artsy  ";
  mess = [
    "Your results show that you are a “Colourful and artsy person” who gives importance to vulnerability and awareness of a person and also you are someone who most likely to pull off  any colourful and vibrant outfits.",
    "Wearing a right jewelry not only enhances your overall look but also boosts your confidence which will most likely impress your date. ",
"Here are some of the jewelry we suggest based on your personality and interest.",
];
  document.querySelector(".thirdhide").style.display = "block"; 
}
// fourth
else if (
  fourth >  first &&
  fourth > third &&
  fourth > second
 
) {
// typo = "Sexy , edgy ";
 mess = [
" Your results show that you are a “Sexy and maybe a little edgy person” who gives importance to Chemistry and curiosity of a person. You are usually bold and have high confidence and also you are someone who most likely to pull off  sexy dresses , low neck blouses and more revealing outfits.",
"Wearing a right jewelry not only enhances your overall look but also boosts your confidence which will most likely impress your date.", 
"Here are some of the jewelry we suggest based on your personality and interest.",
]; 
document.querySelector(".fourthhide").style.display = "block";
}

//first === second
else if (
  first ==  second &&
  first >  third && 
  first > fourth
  
) {
 //typo = "Casual(street wear, sporty) ";
 mess = [
  "Your results show that you are a “Casual basic person” who gives importance to character and personality of a person and also you are someone who most likely to pull off street wear to sporty outfits.",
  "Wearing a right jewelry not only enhances your overall look but also boosts your confidence which will most likely impress your date. ",
"Here are some of the jewelry we suggest based on your personality and interest."
];
  document.querySelector(".firsthide").style.display = "block";
  
  
}

//SECOND == THIRD
else if (
  second ==  third &&
  second >  first && 
  second > fourth 
 
) {
 
  // typo = "Classic , romantic";
  mess = [
    "Your results show that you are a “Classic, Romantic and a feminine person” who gives importance to emotions,  equality and protectiveness  and also you are someone who most likely to pull off any classic outfits from formal  blazers to  prom dresses.",
    "Wearing a right jewelry not only enhances your overall look but also boosts your confidence which will most likely impress your date. ",
    "Here are some of the jewelry we suggest based on your personality and interest.",
    ]; 
    document.querySelector(".secondhide").style.display = "block";
  
}
//third == first
else if (
  third ==  fourth &&
  third >  first &&
  third > second

) {
// typo = "Sexy , edgy ";
mess = [
  " Your results show that you are a “Sexy and maybe a little edgy person” who gives importance to Chemistry and curiosity of a person. You are usually bold and have high confidence and also you are someone who most likely to pull off  sexy dresses , low neck blouses and more revealing outfits.",
  "Wearing a right jewelry not only enhances your overall look but also boosts your confidence which will most likely impress your date.", 
  "Here are some of the jewelry we suggest based on your personality and interest.",
  ]; 
  document.querySelector(".fourthhide").style.display = "block";
}

 // fourth == first
 else if (
  first ==  fourth &&
  first >  third &&
  first > second

) {
// typo = "Sexy , edgy ";
mess = [
  " Your results show that you are a “Sexy and maybe a little edgy person” who gives importance to Chemistry and curiosity of a person. You are usually bold and have high confidence and also you are someone who most likely to pull off  sexy dresses , low neck blouses and more revealing outfits.",
  "Wearing a right jewelry not only enhances your overall look but also boosts your confidence which will most likely impress your date.", 
  "Here are some of the jewelry we suggest based on your personality and interest.",
  ]; 
  document.querySelector(".fourthhide").style.display = "block";
  
}

  

   


else
  {
    // typo = "Classic , romantic";
     mess = [
   "Your results show that you are a “Classic, Romantic and a feminine person” who gives importance to emotions,  equality and protectiveness  and also you are someone who most likely to pull off any classic outfits from formal  blazers to  prom dresses.",
   "Wearing a right jewelry not only enhances your overall look but also boosts your confidence which will most likely impress your date. ",
   "Here are some of the jewelry we suggest based on your personality and interest.",
   ]; 
     document.querySelector(".secondhide").style.display = "block";
   }




const mao = mess.map((ms) => `<li>` + ms + `</li>`).join("");


//document.querySelector(".msghere").innerHTML = mao;


window.onload = function() {
  what();
  function what(){
   // const headmsg = document.querySelector(".headmsg");
   
   // headmsg.innerHTML = typo;
   
   const msgme = document.querySelector(".msghere");
  
   msgme.className = "center-item";
  
   msgme.innerHTML = mao;
  
  };
}
//document.querySelector(".usertype").value = typo;

//document.querySelector(".usertype").style.display = "none";
//console.log(document.querySelector(".usertype").value)

//share buttons
/* 

Social Share Links:

WhatsApp:
https://wa.me/?text=[post-title] [post-url]

Facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]

Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

*/

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");

const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Checkout what type of communicator I am");
  // let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",

    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  // linkedinBtn.setAttribute(
  // "href",
  //"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com"
  //`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  //);
  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();
