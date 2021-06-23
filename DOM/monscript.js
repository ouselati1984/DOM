/* like function*/

//step1: we target the element
//step2: boucle for to browse a table of elements
//step3: link the 'click' event with the  function
//step4: function (condition)

var like = document.getElementsByClassName("like-btn");
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function () {
   let ii=1
    if (like[i].style.color === "red") {
      like[i].style.color = "black";
    } else {
      
      like[i].style.color = "red";
      
    }
  });
}



/*plus function*/
//step1:target the element plus
//step3: boucle for to browse the table of (buttons )
//step4:link the event and the function (we target the next sibling of the button which is the quantity) /*check the dom tree*/

var plus = document.querySelectorAll(".plus-btn");
//var quantity=document.querySelectorAll('.number-items')
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].nextElementSibling.innerHTML++; ////nextElementSibling aller vers le suivant 
    totalPrice();
  });
}

/*minus function*/
//same steps  as plus function
var minus = document.querySelectorAll(".minus-btn");
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (minus[i].previousElementSibling.innerHTML >= 0) {
      minus[i].previousElementSibling.innerHTML--;
    }

    //previousElementSibling aller vers le précédent 
    totalPrice();
  });
}

/*delete function*/
//step1:select the delete button
//step2:boucle...
//step3:link event-function
//step4:funtion( 1-target the parent element, 2-remove() ) /*check the DOM tree*/
var Del = document.querySelectorAll(".delete-btn");
for (let i = 0; i < Del.length; i++) {
  Del[i].addEventListener("click", function () {
    Del[i].parentElement.parentElement.parentElement.remove(); //pour aller au noued selon l'arboresence

    totalPrice();
  });
}

/*total price function*/
// the calculation needed: total=  somme (itemPrice[i]*quatity )
// step1: target the elements needed in the calculation
//step2: declare a variable that will be updated with each product
//step3:loop the items so we can sum the price of each item
//step3: update the total price and change the html elemnt value with the updated price
function totalPrice() {
  var itemPrice = document.querySelectorAll(".price");
  var qtt = document.querySelectorAll(".number-items");
  var total = 0;
  var calcul_remise=0
  for (let i = 0; i < itemPrice.length; i++) {
    total += itemPrice[i].innerHTML * qtt[i].innerHTML;
    calcul_remise=total -((total)/10) ;
    document.getElementById("total").innerHTML = total + ' AVEC la remise de 10 % le montant  est !! ' + calcul_remise;
   
  }
  
}

// juste pour tester le DOM
document.getElementsByName("name")[0].addEventListener('change', bienvenue);

/* function */
function bienvenue(){
   alert('Bienvenue!  "' + this.value + '"!');
}
