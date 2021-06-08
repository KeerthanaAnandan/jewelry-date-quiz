let questions = [
  {
  
  id: 1,
  question: "What hair style you mostly prefer ?",
 
  options: [
    "./Assets/1.jpg",
    "./Assets/2.jpg",
    "./Assets/7.jpg",
    "./Assets/4.jpg",
   
    ],
    alts:[
      "Bun or pony tail",
      "Long, Loose Waves",
      "Sleek and Stick Straight",
      "Wavy Bob"
      
    ]
},
{
  id: 2,
  question: "Lipstick shade that you would most likely to wear ?",
 

  options: ["Color that flatters my dress",
  "Nude / soft pink shades",
  "Colourful vibrant shades",
  "Red",
  ],
},
  {
    id: 3,
    question: "What dress you most likely to wear?",
   
    options: [
      "./Assets/11.jpg",
      "./Assets/12.jpg",
      "./Assets/13.jpg",
      "./Assets/14.jpg",
     
      ],
    alts:["Think jeans, comfortable T-shirts",
    "Feminine or full dress",
    "Colourful or with prints",
    "Sexy low blouses/dress"]
  },
  {
    id: 4,
    question:
      "What quality do you expect in a date?",
     
   
    options: ["Humour and fun",
    "Caring",
    "Confidence", 
    "Intimidating and masculine appearance",
    ],
  },
  {
    id: 5,
    question:
    "What would be your choice of footwear?",
 
    options: [
      "./Assets/21.jpg",
      "./Assets/22.jpg",
      "./Assets/23.jpeg",
      "./Assets/24.png",
     
      ],
      alts:["Sneakers",
      "Sandals",
      "Boots",
      "Heels"]
  },
  {
    id: 6,
    question: "Which place would you prefer for date night?",
        options: ["Any comfort Street side restaurant",
        "High end restaurant with candles",
        "Any Restaurant with yummy foods",
      "Dinner in the dark romantic restaurants."],
        
      },
  {
    id: 7,
    question: "How do you prefer your nails could be ?" ,
    
    options: [
      "./Assets/31.jpg",
      "./Assets/32.jpg",
      "./Assets/33.jpg",
      "./Assets/34.jpg",
     
      ],
    alts:["I don’t like my nails to be coloured",
    "Soft pink / nail colours",
    "Vibrant colors that stands out",
   "Hot pink / red colors to make me feel sexy"]
  },
  {
    id: 8,
    question: "How do you wanna  spend date night? ",
        options: ["Movie",
        "Casual talk to know about each other",
        	"Visit art gallery",
        "Go dancing"],
        
      },
  {
    id: 9,
    question: "Makeup you prefer the most ?",
   
    options: [
      "./Assets/41.jpg",
      "./Assets/42.jpg",
      "./Assets/43.jpg",
      "./Assets/44.jpg",
     
      ],
    alts:["No makeup makeup look",
  "Light and basic look",
    "Colourful eye makeup",
    "Full glam"]
  },



 
      {
        id: 10,
        question: "What do you most likely to notice from/in your date ?",
            options: ["How he treats the waiter matters to me.",
            "The way he talks and smiles",
             "I check if he asks me of my interest and let me talk about my interests.",
             "I most likely to wait for appreciation/ compliments."],
            
          },




  
  
];

let question_count = 0;
//let points = 0;
Max_Questions = 10;

let firstPoints = 0;
let secondPoints = 0;
let thirdPoints = 0;
let fourtPoints = 0;


window.onload = function () {
  show(question_count);
  //let user_ani = document.querySelector(".optionhana.active").innerHTML;
  //let user_answer = document.querySelector(".option.active").innerHTML;
  

};

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "end.html";
  }
if(question_count % 2 == 0) {
console.log("even")

  let user_ani = document.querySelector(".optionhana.active").value;
  //var q1 = document.forms["quizForm"]["q1"].value;
  console.log(user_ani)
  if( question_count == 0 && user_ani == "a" ){
              firstPoints += 1;
    sessionStorage.setItem("hana" , firstPoints)}
  if(user_ani == "b"){
             secondPoints += 1;
    sessionStorage.setItem("tul" , secondPoints)}
  if(user_ani == "c"){
             thirdPoints += 1;
    sessionStorage.setItem("set" , thirdPoints)}
  if(user_ani == "d"){
           fourtPoints += 1;
    sessionStorage.setItem("net" , fourtPoints)}


} 
/*if(question_count >= 6){
  let user_answer = document.querySelector(".option.active").innerHTML;
  console.log(user_answer)
  sessionStorage.setItem("yolhana" , "jugiyo")

}*/
  
  //let user_ani = document.querySelector(".optionhana.active").innerHTML;
 // let user_answer = document.querySelector(".option.active").innerHTML;
 

  //check answer
 /* if (user_ani == questions[question_count].answer) {
   points += 10;
   
  // 
  console.log(points); */
  //trust(0)
  //console.log(questions[0].options[0])
 /* for (let i = 0; i < 15; i++) {
    if (user_answer == questions[i].options[0]){
      //console.log("hana")
      firstPoints += 1;
    }
}
for (let i = 0; i < 15; i++) {
  if (user_answer == questions[i].options[1]){
    secondPoints += 1;
    //console.log("tul")
  }
}
for (let i = 0; i < 15; i++) {
  if (user_answer == questions[i].options[2]){
    thirdPoints += 1;
   // console.log("set")
  }
}

   if(user_answer == "None of the above")
   {
     console.log("ottaeke")
   }

   else if(question_count == 15 ){
    // console.log("yol-set")
     sessionStorage.setItem("yolSet" , user_answer)
   }
   else if(question_count == 16 ){
    //console.log("yol-net")
    sessionStorage.setItem("yolNet" , user_answer)
  } */
/*for (let i = 0; i = 14 ; i++){
             console.log(user_answer)
             sessionStorage.setItem("yolnet" , user_answer)
}
for (let i = 0; i = 15 ; i++){
  console.log(user_answer)
  sessionStorage.setItem("yolyetso" , user_answer)
} 
  // if(user_answer == questions[0].options[0]){}
  if (user_answer === "I have a hard time gaining weight." || user_answer === "Mostly straight" || user_answer === "The same as your hips" || user_answer === "Bones" || user_answer === "Overlap" || user_answer === "Normal, Light" || user_answer === "Leg workouts are not my favorites." || user_answer === "No fat") {
    firstPoints += 1;
  }
  //neglect(1)
  else if (user_answer === "I both gain and lose weight without too much effort." || user_answer === "Hourglass" || user_answer === "Wider than your hips" || user_answer === "Muscles" || user_answer === "Touch" || user_answer==="Feel full and satisfied" || user_answer==="I am good with all type of workouts." || user_answer === "Upper body/equally stored in all body parts") {
    secondPoints += 1;
  }
  //guilt(2)
  else if (user_answer === "I gain weight easily." || user_answer === "Pear (narrow shoulders, wide hips)" || user_answer === "Narrower than your hips" || user_answer=== "Body fat" || user_answer === "Don't Touch" || user_answer === "Tired, bloated, lethargic" || user_answer === "I am really good with leg exercises comparing to other workouts." || user_answer === "Belly, hips, and thighs") {
    thirdPoints += 1;
  }
 

  sessionStorage.setItem("first", firstPoints);
  sessionStorage.setItem("second", secondPoints);
  sessionStorage.setItem("third", thirdPoints);
 */
  //let coloranswer = document.querySelector("li.option.active");
  //e.target.coloranswer.classList.add("correct");

  question_count++;
  show(question_count);
  toggleActive();
  toggleActiveHana();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");
 

  progressBarFull.style.width = ` ${((question_count / Max_Questions) * 100 + 50 )}%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = ` ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");



   
  if(question_count  == 0 || question_count== 2 || question_count == 4 || question_count == 6 || question_count == 8 || question_count ==10) {
    let [first, second , third , fourth ] = questions[count].options;
    let [il, ee , sam, sa ] = questions[count].alts;
    ///////no of questions
  
    question.innerHTML = `
    <p class="iamquestion"> ${questions[count].question}</p>
     <ul class="option_group">
     <input type="radio" name="q1" value="a" id="q1a" class="optionhana" />
          <label for="q1a"> <img src=${first}  alt=${il} /></label>
          <input type="radio" name="q1" value="b" id="q1b" class="optionhana" />
          <label for="q1b"> <img src=${second}  alt=${ee} /></label>
          <input type="radio" name="q1" value="c" id="q1c" class="optionhana" />
          <label for="q1c"> <img src=${third}  alt=${sam} /></label>
          <input type="radio" name="q1" value="d" id="q1d" class="optionhana"/>
          <label for="q1d"> <img src=${fourth}  alt=${sa} /></label>
   
   
   
  </ul> 
    `;
    
    
  }
  else   if(question_count  == 1 || question_count == 3 || question_count == 5 || question_count == 7 || question_count == 9) {
    let [first, second , third , fourth] = questions[count].options;
    ///////no of questions
  
    question.innerHTML = `
    <p class="iamquestion"> ${questions[count].question}</p>
     <ul class="option_group">
    <li><span class="option">${first}</span></li>
    <li ><span class="option">${second}</span></li>
    <li ><span class="option">${third}</span></li>
    <li ><span class="option">${fourth}</span></li>
   
  </ul> 
    `;
  }
 /* else if(question_count > 1){
   if(question_count % 2 == 0) {
    let [first, second , third , fourth ] = questions[count].options;
    let [il, ee , sam, sa ] = questions[count].alts;
    ///////no of questions
  
    question.innerHTML = `
    <p class="iamquestion"> ${questions[count].question}</p>
     <ul class="option_group">
     <input type="radio" name="q1" value="a" id="q1a" class="optionhana" />
          <label for="q1a"> <img src=${first}  alt=${il} /></label>
          <input type="radio" name="q1" value="b" id="q1b" class="optionhana" />
          <label for="q1b"> <img src=${second}  alt=${ee} /></label>
          <input type="radio" name="q1" value="c" id="q1c" class="optionhana" />
          <label for="q1c"> <img src=${third}  alt=${sam} /></label>
          <input type="radio" name="q1" value="d" id="q1d" class="optionhana"/>
          <label for="q1d"> <img src=${fourth}  alt=${sa} /></label>
   
   
   
  </ul> 
    `;}
  else   if(question_count % 3 == 0) {
    let [first, second , third , fourth] = questions[count].options;
    ///////no of questions
  
    question.innerHTML = `
    <p class="iamquestion"> ${questions[count].question}</p>
     <ul class="option_group">
    <li><span class="option">${first}</span></li>
    <li ><span class="option">${second}</span></li>
    <li ><span class="option">${third}</span></li>
    <li ><span class="option">${fourth}</span></li>
   
  </ul> 
    `;
  }
  } */

  toggleActive();
  toggleActiveHana()
}

function toggleActive() {
  let option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
function toggleActiveHana() {
  let optionhana = document.querySelectorAll(".optionhana");

  for (let i = 0; i < optionhana.length; i++) {
    optionhana[i].onclick = function () {
      for (let i = 0; i < optionhana.length; i++) {
        if (optionhana[i].classList.contains("active")) {
          optionhana[i].classList.remove("active");
        }
      }
      optionhana[i].classList.add("active");
    };
  }
}