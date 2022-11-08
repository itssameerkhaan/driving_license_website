


function validate(){
  let adhaar=document.getElementById('adhaar');
  let phone=document.getElementById('phone');
  let adhaar_error=document.getElementById('adhaar_error');
  let phone_error=document.getElementById('phone_error');
  if(adhaar.value.length!=12){
    console.log(adhaar.value.length);
    adhaar_error.innerHTML='<br>enter 12 degit adhaar number.';
    return false;
  }else {if(phone.value.length!=10){
    console.log(phone.value.length);
    phone_error.innerHTML='<br>enter 10 degit phone number.';
    return false;
  }else{
    alert("form is submited:");
    return true;}
  }
  
}


function mail(){
  let adhaar=document.getElementById('adhaar');
  let phone=document.getElementById('phone');
  let name=document.getElementById('name');
  let linked=document.getElementsByName('linked');
  let birthday=document.getElementById('birthday');
  let gender=document.getElementsByName('gender');

  let x;
  if (linked[0].checked){
    x='YES';
  }else{
    x='NO';
  }

  let y;
  if(gender[0].checked){
    y='MALE';
  }else{
    y='FEMALE';
  }


   Email.send({
     Host : "smtp.elasticemail.com",
     Username : "sameerkhan1ssk1@gmail.com",
     Password : "8DC460A9C8806313C7E02FB799EF103874C0",
     To : '2016belalkhan786@gmail.com',
     From : "sameerkhan1ssk1@gmail.com",
     Subject : "bellal website",
     Body : "name : "+name.value +"<br/>adhaar : "+adhaar.value + "<br/>phone : "+phone.value +"<br/>linked : "+x +"<br/>birthday : "+birthday.value +"<br/>gender : "+y
 }).then(
   message => alert(message)
 );
}