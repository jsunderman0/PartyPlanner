const list = document.querySelector("ul")

let party= [];

function render (){
   
   const events = party.map((names) => {
        return `<li> ${names.name} 
        <p> ${names.date}</p>
        </li>`
    })

    list.innerHTML = events.join('')
};

async function fetchParty (){
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events')
    const json = await response.json();
    console.log(json)
    party = json.data;
    console.log(party)
    render()
};


fetchParty(); 
render();


