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



 
//  function InvalidCheck(qustion1){
//     var qustion1 = document.getElementById("Q1").value;
//     var qustion2 = document.getElementById("Q2").value;
//     var qustion3 = document.getElementById("Q3").value;
//      if(qustion1 === "")
//      {
//          console.log("Invalid");
//      }
//      else{
//          let Answers = [];
//          Answers.push(qustion1);
//          console.log(Answers);
//      }
//  }



function AddingToList()
{
    let question1 = document.getElementById("Q1").value;
    let question2 = document.getElementById("Q2").value;
    let question3 = document.getElementById("Q3").value;
    let arr = []
    if(question1 == "")
    {
        arr.push("Invalid",question2,question3)
    }
    else if (question2 == ""){
        arr.push(question1,"Invalid",question3)
    }
    else if (question3 == ""){
        arr.push(question1,question2,"Invalid")
    }
    else{
        arr.push(question1,question2,question3)
    }
    console.log(arr);
}