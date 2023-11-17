import './style.css'

const mots = [
    "chat",
    "chien",
    "maison",
    "ordinateur",
    "fleur",
    "soleil",
    "montagne",
    "plage",
    "livre",
    "musique",
    "vélo",
    "voiture",
    "avion",
    "fruit",
    "lune",
    "étoile",
    "eau",
    "feu",
    "terre",
    "vent",
    "arbre",
    "piano",
    "film",
    "caméra",
    "école",
    "cuisine",
    "pont",
    "jardin",
    "fête",
    "voyage"
  ];

  const div = document.querySelector('#suggest');

const input = document.querySelector('input');
input.addEventListener('input', (e)=>{
    // console.log(e.data);
    // console.log(e.target.value);
    // console.log(input.value);
    const results = search(e.target.value, mots);
    console.log(results);
    let liste = "";
    for(let i = 0; i < results.length ; i++){
        liste += "<li>" + results[i] + "</li>";
        
    }
    div.innerHTML = liste;
});

const search = (str, wordList)=>{
    const results = [];
    if(str.length === 0){
        return results;
    }
    for (let i = 0; i < wordList.length; i++) { 
        const item = wordList[i];
        if (item.startsWith(str)){
            results.push(item);
        }
    }
    return results;
}
