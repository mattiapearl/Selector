// Pull list in similar form. If one of them is not defined, they won't show in the search.
const listOfExternalWallets = [
  {
    "name": "calxes",
    "type": "equity"
  },
  {
    "name": "penicillation",
    "type": "crypto"
  },
  {
    "name": "downhaul",
    "type": "equity"
  },
  {
    "name": "unscrutable",
    "type": "crypto"
  },
  {
    "name": "nonmonarchial",
    "type": "crypto"
  },
  {
    "name": "sapropelic",
    "type": "equity"
  },
  {
    "name": "heartthrob",
    "type": "equity"
  },
  {
    "name": "aff",
    "type": "equity"
  },
  {
    "name": "subaudibleness",
    "type": "equity"
  },
  {
    "name": "holophote",
    "type": "crypto"
  },
  {
    "name": "deplored",
    "type": "equity"
  },
  {
    "name": "countrywide",
    "type": "crypto"
  },
  {
    "name": "disutility",
    "type": "crypto"
  },
  {
    "name": "barih",
    "type": "equity"
  },
  {
    "name": "opiated",
    "type": "crypto"
  },
  {
    "name": "unquotable",
    "type": "crypto"
  },
  {
    "name": "overliberalize",
    "type": "crypto"
  },
  {
    "name": "turion",
    "type": "crypto"
  },
  {
    "name": "chickenshit",
    "type": "equity"
  },
  {
    "name": "technic",
    "type": "crypto"
  },
  {
    "name": "subcancellous",
    "type": "equity"
  },
  {
    "name": "misauthorize",
    "type": "crypto"
  },
  {
    "name": "tendencious",
    "type": "crypto"
  },
  {
    "name": "celestite",
    "type": "equity"
  },
  {
    "name": "ameerate",
    "type": "crypto"
  },
  {
    "name": "dustless",
    "type": "equity"
  },
  {
    "name": "horseradish",
    "type": "equity"
  },
  {
    "name": "whips",
    "type": "equity"
  },
  {
    "name": "methylene",
    "type": "crypto"
  },
  {
    "name": "subpatellar",
    "type": "crypto"
  },
  {
    "name": "intolerableness",
    "type": "crypto"
  },
  {
    "name": "unterwalden",
    "type": "crypto"
  },
  {
    "name": "mastery",
    "type": "equity"
  },
  {
    "name": "giver",
    "type": "crypto"
  },
  {
    "name": "unsplit",
    "type": "equity"
  },
  {
    "name": "anticonservative",
    "type": "equity"
  },
  {
    "name": "feod",
    "type": "equity"
  },
  {
    "name": "hemoglobic",
    "type": "equity"
  },
  {
    "name": "ungraspable",
    "type": "crypto"
  },
  {
    "name": "hiver",
    "type": "crypto"
  },
  {
    "name": "recombine",
    "type": "crypto"
  },
  {
    "name": "anyplace",
    "type": "equity"
  },
  {
    "name": "unvindictive",
    "type": "equity"
  },
  {
    "name": "ontogenesis",
    "type": "crypto"
  },
  {
    "name": "chapleted",
    "type": "equity"
  },
  {
    "name": "rhizopus",
    "type": "equity"
  },
  {
    "name": "trochilus",
    "type": "crypto"
  },
  {
    "name": "quintal",
    "type": "equity"
  },
  {
    "name": "croupy",
    "type": "crypto"
  }
];
const listOfInternalWallets = [{
  "name": "calxes",
  "type": "equity"
}]; 

// Declarations
const wrapper = document.querySelector(".selector-container");
const input = document.querySelector(".wallet-selector");
const ulBox = document.querySelector(".ul-box");
const personal = document.querySelector(".personal");
const external = document.querySelector(".external");

// Functions
function createList(wrapper1,wrapper2,list1,list2){
  
  if(list1){
    // Show wallet list in the focus tab
    wrapper1.style.display = "block";

    // Create the wallet elements
    list1.forEach(element =>{
      const li = document.createElement("li");
      li.innerHTML = element.name;
      if(element.type == "crypto"){
        const logo = document.createElement("img");
        logo.src = "res/crypt.svg";
        logo.alt = "Crypto Wallet Logo";
        li.appendChild(logo);
      }else{
        const logo = document.createElement("img");
        logo.src = "res/dollar.svg";
        logo.alt = "Equity Wallet Logo";
        li.appendChild(logo);
      }
      wrapper1.appendChild(li);

      //append an event to each element
      li.addEventListener("click", (event)=>{
        const value = event.target.innerText;
        input.value = value;
        input.innerText = value;
      })
    })
  }else{
    wrapper1.style.display ="none";
  }

  if(list2){
    // Show wallet list in the focus tab
    wrapper2.style.display = "block";

    // Create the wallet elements
    list2.forEach(element =>{
      const li = document.createElement("li");
      li.innerHTML = element.name;
      if(element.type == "crypto"){
        const logo = document.createElement("img");
        logo.src = "res/crypt.svg";
        logo.alt = "Crypto Wallet Logo";
        li.appendChild(logo);
      }else{
        const logo = document.createElement("img");
        logo.src = "res/dollar.svg";
        logo.alt = "Equity Wallet Logo";
        li.appendChild(logo);
      }
      wrapper2.appendChild(li);

      //append an event to each element
      li.addEventListener("click", (event)=>{
        const value = event.target.innerText;
        input.value = value;
        input.innerText = value;
      })
    })
  }else{
    wrapper2.style.display ="none";
  }
}

//Event listeners
input.addEventListener("focus", ()=>{
  ulBox.style.display = "block";
  ulBox.scrollTo(0,0);
});
input.addEventListener("keyup", (event) =>{
  if(event.keyCode == 13){
    ulBox.style.display = "none";
  }
})
window.addEventListener("click", (event) =>{
  if(event.target != input && event.target != ulBox){
    ulBox.style.display = "none";
  }
})

//Runtime
createList(external,personal,listOfExternalWallets,listOfInternalWallets);



//  CODE USED TO GENERATE ARRAY
// const array = [
//   "calxes",
//   "penicillation",
//   "downhaul",
//   "unscrutable",
//   "nonmonarchial",
//   "sapropelic",
//   "heartthrob",
//   "aff",
//   "subaudibleness",
//   "holophote",
//   "deplored",
//   "countrywide",
//   "disutility",
//   "barih",
//   "opiated",
//   "unquotable",
//   "overliberalize",
//   "turion",
//   "chickenshit",
//   "technic",
//   "subcancellous",
//   "misauthorize",
//   "tendencious",
//   "celestite",
//   "ameerate",
//   "dustless",
//   "horseradish",
//   "whips",
//   "methylene",
//   "subpatellar",
//   "intolerableness",
//   "unterwalden",
//   "mastery",
//   "giver",
//   "unsplit",
//   "anticonservative",
//   "feod",
//   "hemoglobic",
//   "ungraspable",
//   "hiver",
//   "recombine",
//   "anyplace",
//   "unvindictive",
//   "ontogenesis",
//   "chapleted",
//   "rhizopus",
//   "trochilus",
//   "quintal",
//   "croupy",
// ];
// const newArray = array.map((element)=> {
//   const rand = Math.round(Math.random());
//   let type ="";
//   if(rand == 0) {
//     type = "crypto";
//   }else{
//     type = "equity";
//   };
//   const object = { name : element, type: type };
//   return object;
// })