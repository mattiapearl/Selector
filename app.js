// Pull list in similar form. If one of them is not defined, they won't show in the search.


// Declarations
let listOfExternalWallets = "";
let listOfInternalWallets = "";

//Function that assigns value to these two elements
listOfExternalWallets = [
  {
    name: "calxes",
    type: "equity",
  },
  {
    name: "penicillation",
    type: "crypto",
  },
  {
    name: "downhaul",
    type: "equity",
  },
  {
    name: "unscrutable",
    type: "crypto",
  },
  {
    name: "nonmonarchial",
    type: "crypto",
  },
  {
    name: "sapropelic",
    type: "equity",
  },
  {
    name: "heartthrob",
    type: "equity",
  },
  {
    name: "aff",
    type: "equity",
  },
  {
    name: "subaudibleness",
    type: "equity",
  },
  {
    name: "holophote",
    type: "crypto",
  },
  {
    name: "deplored",
    type: "equity",
  },
  {
    name: "countrywide",
    type: "crypto",
  },
  {
    name: "disutility",
    type: "crypto",
  },
  {
    name: "barih",
    type: "equity",
  },
  {
    name: "opiated",
    type: "crypto",
  },
  {
    name: "unquotable",
    type: "crypto",
  },
  {
    name: "overliberalize",
    type: "crypto",
  },
  {
    name: "turion",
    type: "crypto",
  },
  {
    name: "chickenshit",
    type: "equity",
  },
  {
    name: "technic",
    type: "crypto",
  },
  {
    name: "subcancellous",
    type: "equity",
  },
  {
    name: "misauthorize",
    type: "crypto",
  },
  {
    name: "tendencious",
    type: "crypto",
  },
  {
    name: "celestite",
    type: "equity",
  },
  {
    name: "ameerate",
    type: "crypto",
  },
  {
    name: "dustless",
    type: "equity",
  },
  {
    name: "horseradish",
    type: "equity",
  },
  {
    name: "whips",
    type: "equity",
  },
  {
    name: "methylene",
    type: "crypto",
  },
  {
    name: "subpatellar",
    type: "crypto",
  },
  {
    name: "intolerableness",
    type: "crypto",
  },
  {
    name: "unterwalden",
    type: "crypto",
  },
  {
    name: "mastery",
    type: "equity",
  },
  {
    name: "giver",
    type: "crypto",
  },
  {
    name: "unsplit",
    type: "equity",
  },
  {
    name: "anticonservative",
    type: "equity",
  },
  {
    name: "feod",
    type: "equity",
  },
  {
    name: "hemoglobic",
    type: "equity",
  },
  {
    name: "ungraspable",
    type: "crypto",
  },
  {
    name: "hiver",
    type: "crypto",
  },
  {
    name: "recombine",
    type: "crypto",
  },
  {
    name: "anyplace",
    type: "equity",
  },
  {
    name: "unvindictive",
    type: "equity",
  },
  {
    name: "ontogenesis",
    type: "crypto",
  },
  {
    name: "chapleted",
    type: "equity",
  },
  {
    name: "rhizopus",
    type: "equity",
  },
  {
    name: "trochilus",
    type: "crypto",
  },
  {
    name: "quintal",
    type: "equity",
  },
  {
    name: "croupy",
    type: "crypto",
  },
];
listOfInternalWallets = [
  {
    name: "calxes",
    type: "equity",
  },
];
let browsExt = [...listOfExternalWallets];
let browsInt = [...listOfInternalWallets];

const wrapper = document.querySelector(".selector-container");
const fieldset = document.querySelector(".selector-fieldset");
const input = document.querySelector(".wallet-selector");
const ulBox = document.querySelector(".ul-box");
const personal = document.querySelector(".personal");
const external = document.querySelector(".external");

// Functions
function createList(wrapper1, wrapper2, list1, list2) {
  //Clean previous list
  wrapper1.textContent = "";
  wrapper2.textContent = "";
  wrapper1.style.display = "none";
  wrapper2.style.display = "none";
  if (list1.length >0) {
    // Show wallet list in the focus tab
    wrapper1.style.display = "block";
    //Create text element
    const par = document.createElement("p");
    par.textContent = "External Wallets";
    wrapper1.appendChild(par);
    // Create the wallet elements
    list1.forEach((element) => {
      const li = document.createElement("li");
      li.innerHTML = element.name;
      if (element.type == "crypto") {
        const logo = document.createElement("img");
        logo.src = "res/crypt.svg";
        logo.alt = "Crypto Wallet Logo";
        li.appendChild(logo);
      } else {
        const logo = document.createElement("img");
        logo.src = "res/dollar.svg";
        logo.alt = "Equity Wallet Logo";
        li.appendChild(logo);
      }
      wrapper1.appendChild(li);

      //append an event to each element
      li.addEventListener("click", (event) => {
        const value = event.target.innerText;
        input.value = value;
        input.innerText = value;
        fieldset.style.background = "#ECECEC";
        input.style.background = "#ECECEC";
      });
    });
  }

  if (list2.length > 0) {
    // Show wallet list in the focus tab
    wrapper2.style.display = "block";
    //Create text element
    const par = document.createElement("p");
    par.textContent = "Personal Wallets";
    wrapper2.appendChild(par);
    // Create the wallet elements
    list2.forEach((element) => {
      const li = document.createElement("li");
      li.innerHTML = element.name;
      if (element.type == "crypto") {
        const logo = document.createElement("img");
        logo.src = "res/crypt.svg";
        logo.alt = "Crypto Wallet Logo";
        li.appendChild(logo);
      } else {
        const logo = document.createElement("img");
        logo.src = "res/dollar.svg";
        logo.alt = "Equity Wallet Logo";
        li.appendChild(logo);
      }
      wrapper2.appendChild(li);

      //append an event to each element
      li.addEventListener("click", (event) => {
        const value = event.target.innerText;
        input.value = value;
        input.innerText = value;
        fieldset.style.background = "#ECECEC";
        input.style.background = "#ECECEC";
      });
    });
  }
  if (!(list1.length > 0 || list2.length> 0)) {
    wrapper1.style.display = "block";
    const err = document.createElement("p");
    err.textContent = "No results";
    err.style.color = "#848484";
    wrapper1.appendChild(err);
  }
}

function browse(){
  console.log(browsExt,browsInt);
  if(input.value == ""){
    createList(external, personal, listOfExternalWallets, listOfInternalWallets);
  }else{
    browsExt ="";
    browsInt = "";
    browsExt = listOfExternalWallets.filter((value) =>{
      const compValue = value.name.toLowerCase();
      if(compValue.includes(input.value.toLowerCase())){
        return true
      }else{
        return "";
      }
    })
    browsInt = listOfInternalWallets.filter((value) =>{
      const compValue = value.name.toLowerCase();
      if(compValue.includes(input.value.toLowerCase())){
        return true
      }
      else{
        return false;
      }
    })
    createList(external, personal, browsExt, browsInt);
  }
}


//Event listeners
input.addEventListener("focus", () => {
  browse();
  ulBox.style.display = "block";
  ulBox.scrollTo(0, 0);
  fieldset.style.background = "#FFFFFF";
  input.style.background = "#FFFFFF";
});

input.addEventListener("input", browse);

input.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    ulBox.style.display = "none";
  }
});

window.addEventListener("click", (event) => {
  if (event.target != input && event.target != ulBox) {
    ulBox.style.display = "none";
  }
});



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
