function box(){document.getElementById("QustionsBox").style.display = "block";}

function exit(){
    document.getElementById("QustionsBox").style.display = "none";
}

function GetGender(){
 let gender = document.getElementById("Gender").value;
 let name = document.getElementById("Name").value;
 if(gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female")
 {
     alert("You Should Type ( male ) or ( female )")
 }

 }

function GetAge(){
    let age = document.getElementById("Age").value;
    if(age <= 0 ){
        alert("Your Age is Less Than Or Equal To Zero.")
    }
    else{
        let userAnswer = confirm("Do You Want to Skip the Greeting Message ? ")
        if(userAnswer == true)
        {
            document.getElementById("QustionsBox").style.display = "none";
        }
        else{
            document.getElementById("Usergreeting").style.display = "block";
        }
    }
}

function greeting(){
    let name = document.getElementById("Name").value;
    let gender = document.getElementById("Gender").value;
 


    if(gender == "male"){
     alert(`Welcome Mr ${name} To My Website `)
 }
  else {
    alert(`Welcome Ms ${name} To My Website `)

  }

 }