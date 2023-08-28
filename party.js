const list = document.querySelector("ul")

let party= [];

function render (){
    const events = party.map((names) => {
        return `<li> ${names.name} </li>`
    })

    console.log(events)
};

async function fetchParty (){
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events')
    const json = await response.json();
    console.log(json)
    party = json.data;
    console.log(party)
    
};

await fetchParty();

render();


