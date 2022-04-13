const nombre = document.getElementById ("nombre");
const buscar = document.getElementById ("buscar");
const  pokenombre = document.getElementById ("pokenombre");
const  pokeimagen = document.getElementById ("pokeimagen");
const  poketipo = document.getElementById ("poketipo");
const  pokealtura = document.getElementById ("pokealtura");
const  pokepeso = document.getElementById ("pokepeso");

const pokemon = async (nombre) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`
    const espera = await fetch (url)
    const json = await espera.json ();
    console.log(espera);
    console.log(json);
    console.log(json.abilities[1].is_hidden);
    return json
}

buscar.addEventListener("click", async (e) => {
    e.preventDefault();
    const pokeinfo = await pokemon (nombre.value);
    nombre.value = '' 


})