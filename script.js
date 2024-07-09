
function rectangle() {
  let ab = document.getElementById("ab").value;
  let ac = document.getElementById("ac").value;
  let bc = document.getElementById("bc").value;
  let a = ab**2;
  let b = ac**2;
  let c = bc**2

  if (ab.length === 0 || ac.length === 0 || bc.length === 0) { document.getElementById("resultat").innerHTML = "Merci de renseigner les champs."; document.getElementById("resultat").style.color = "orange"; }


     else if (ab<= 0 || ac<= 0 || bc<= 0) { document.getElementById("resultat").innerHTML = "Les longueurs des côtés ne peuvent pas être négatives ou nulles."; document.getElementById("resultat").style.color = "red"; }
 


    else if (c === a + b) {
      document.getElementById("resultat").innerHTML = "Le triangle ABC est rectangle en A";
      document.getElementById("resultat").style.color = "green";
    }
    
    else { let a ="Le triangle ABC"; let b= "n'est pas" ; let c= "rectangle en A";
      document.getElementById("resultat").innerHTML = a + " " +  b + " " + c;
          document.getElementById("resultat").style.color = "blue";
        
         }
}



  const el = document.getElementById('bouton');
  el.addEventListener('click', rectangle);