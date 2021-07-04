let userCountId=0;
function contactMe(){
    let message=document.getElementById("message").value;
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let email=document.getElementById("email").value;
    let subject=document.getElementById("subject").value;
    userCountId++;
    sessionStorage.setItem(userCountId,'{"message":"'+message+'","fname":"'+fname+'","lname":"'+lname+'","email":"'+email+'","subject":"'+subject+'"}');
    console.log("Stored");
}
