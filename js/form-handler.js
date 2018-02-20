function capture(){
  event.preventDefault()
  console.log("form submitted")
  
  var theEmail = document.custInfo.email.value
  
  console.log("Thanks for signing up for our mailing list, " + theEmail + "!")
}