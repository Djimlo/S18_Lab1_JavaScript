function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
  let demo = document.getElementById("demo");
  let qty = document.getElementById("qty").value;
  let titre = document.getElementById("titre").value;
  let contenu = document.getElementById("contenu").value;

  demo.textContent = ""

  for(let i = 0; i< qty; i++){
    let h = document.createElement("h2")
    h.textContent = titre + "" +i;
    demo.appendChild(h);

    let p = document.createElement("p")
    p.textContent = contenu + "" + i;
    demo.appendChild(p)
  }
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
 let djim = document.getElementById("demo");

 let elements = djim.getElementsByTagName("p");

 let couleur = document.getElementById("couleur").value;

 for(let element of elements){
  element.style.color = "red";
 }


}
  
function changerClassBoutons() {

   let elements = document.getElementsByTagName("button");

 
  let Djimlo = document.getElementById("btnClass").value;

  for(let element of elements){

    element.className = Djimlo;
  }

}