// $(function(){
//     var email = $("#user email");
//     var name = $("#user name");

//     function validate(field){
//         if(field.val().length === 0){
//             field.removeClass().addClass("error");
//             field.next().removeClass().addClass("icon-warning-sign");
//         }else{
//             field.removeClass().addClass("success");
//             field.next().removeClass().addClass("icon-ok");
//         }
//         return field;
//     }

//     $('input').blur(function(){
//         validate($(this));
//     });

//     $("button").on("click" , function(){
//         validate(email);
//         validate(name);
//         if($(email).val().length === 0 || $(name).val().length === 0)
//             $(this).removeClass().addClass("submit-error");
//         else{
//             $(this).removeClass().addClass("submit-success");
//         }
//         window.setTimeout(function(){
//             console.log("done");
//             $("button").removeClass();
//         }, 3000)
//         return false;
//     });
    
// });


var nameInput = document.getElementById("username");
var emailInput = document.getElementById("useremail");


form.addEventListener("submit", function(event){
    event.preventDefault();
    let username = usernameInput.value;
    let useremail = useremailInput.value;
    addTask(username,useremail, false);
    console.log(taskList);
  })


  var taskListArray = [];

function addTask(username,useremail) {
  let d = new Date();
  let dateCreated = d.getFullYear();
  let infos = {
    username,
    useremail
  };
  taskListArray.push(infos);
  renderTask(infos);
}

function renderTask(infos){
    // Create HTML elements
    let item = document.createElement("li");
    item.innerHTML = "<p>" + infos.taskDescription + "</p>";
  
    tasklist.appendChild(item);
  
    // Extra Task DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete Task");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);
  
  
    // Event Listeners for DOM elements
    delButton.addEventListener("click", function(event){
      event.preventDefault();
      item.remove();
    })
  
  
    // Clear the input form
    form.reset();
  }
  