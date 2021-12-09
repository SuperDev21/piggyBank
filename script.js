function calcul(elem){
    let allRows = document.getElementById("myTable").rows;
    // console.log(allRows)
    let total = 0
    for (let i = 1; i < allRows.length; i++) {
        // console.log(allRows[i].cells[2].value)
        total = total + parseFloat(allRows[i].cells[2].innerText)
        }
    // console.log(total)
    document.getElementById("demo").innerHTML ="total : " + total.toFixed(2);
}
calcul()

// fonction step03 supprimmer un element de la table
function deleteElement(){
    let myInput = document.getElementsByClassName('deleteInput')
    // console.log(myInput)
    for(let i = 0; i < myInput.length; i++){
        // console.log('myInput[i] =',myInput[i])
        myInput[i].addEventListener("click", function(){
            // console.log('this =',this)
            this.parentElement.parentElement.remove()
            calcul(this)
        })
}
}
deleteElement()

// le meme code avec jquery
// function deleteElement2(){
//     $(".deleteInput").click(function(){
//     this.parentElement.parentElement.remove()
//     calcul(this)
// })
// }


// code pour insérer des elements dans le tableau
const btnElmInput = document.getElementById('btninp');
btnElmInput.addEventListener('click', function(){
    let name = document.getElementById('name').value;
    // vérification sur le name si il existe
    if (name){
        document.getElementById('name').style.borderColor = 'green'
        document.getElementById('validatedName').textContent = ''
    }else{
        document.getElementById('name').style.borderColor = 'red'
        document.getElementById('validatedName').textContent = 'You must provide a name'
    }

    let price = +document.getElementById('price').value;
    // vérification sur le price si il existe
    if (Number(price)){
        document.getElementById('price').style.borderColor = 'green'
        document.getElementById('validatedPrice').textContent = ''
    } else{
        document.getElementById('price').style.borderColor = 'red'
        document.getElementById('validatedPrice').textContent = 'You must provide a number!'
    }

    // si le name et price existent 
    if(name && price){
        // créer un tr
        let nodeTr = document.createElement('tr')
    
        // créer td(name) puis son contenu puis l'ajouter au td puis ajouter td au tr
        let nodeTdName = document.createElement('td')
        let texName = document.createTextNode(name)
        nodeTdName.appendChild(texName)
        nodeTr.appendChild(nodeTdName)
    
        // recupérer la description du formulaire puis créer td(description) puis son contenu 
        // puis l'ajouter au td puis ajouter td au tr
        let description = document.getElementById('description').value;
        let nodeTdDescription = document.createElement('td')
        let textDescription = document.createTextNode(description)
        nodeTdDescription.appendChild(textDescription)
        nodeTr.appendChild(nodeTdDescription)
    
        // créer td(price) puis l'ajouter une class puis créer son contenu puis l'ajouter au 
        // td puis ajouter td au tr
        let nodeTdPrice= document.createElement('td')
        nodeTdPrice.setAttribute('class', 'prix')
        let textPrice = document.createTextNode(price)
        nodeTdPrice.appendChild(textPrice)
        nodeTr.appendChild(nodeTdPrice)
    
        // créer td(input-delete) puis input puis l'ajouter une class, type et value puis 
        // l'ajouter au td puis ajouter td au tr
        let nodeTdDelete = document.createElement('td')
        let nodeButton = document.createElement('button')
        let nodeImg = document.createElement('img')
        nodeButton.setAttribute("class", "deleteInput")
        nodeButton.setAttribute("type", "submit")
        nodeImg.setAttribute("src", "images/Group.png")
        nodeImg.setAttribute("alt", "image de poubelle")
        nodeButton.appendChild(nodeImg)
        nodeTdDelete.appendChild(nodeButton)
        nodeTr.appendChild(nodeTdDelete)
    
        // ajouter tr au tbody
        document.getElementsByTagName('tbody')[0].appendChild(nodeTr)
        
        // vider le formulaire
        name = document.getElementById('name').value = ''
        price = document.getElementById('price').value = ''
        description = document.getElementById('description').value = ''
        
        // Metre à jour la somme totale de prix
        calcul()
        
        // supprimer les elements
        deleteElement()
    }
})
