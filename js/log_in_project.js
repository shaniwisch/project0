

function myFunction(){
    var password1Input = document.getElementById("password1");
    var email1Input = document.getElementById("email1");
    window.alert(email1Input.value);
  if(email1Input.value == "shaniwisch@gmail.com" && password1Input.value == "1234"){
    window.alert('הודעתך נשלחה בהצלחה!');
    window.location.href = "html/home_page.html";
  }
  if(email1Input.value == "test" && password1Input.value == "test"){
    window.alert('הודעתך נשלחה בהצלחה!');
    window.location.href = "html/home_page.html";
  }
    
  else{window.alert('הקלד נתונים אחרים');}
  }
  
  