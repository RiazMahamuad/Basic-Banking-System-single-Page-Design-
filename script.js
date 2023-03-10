
var submit = document.getElementById("btn")
var backButton=document.getElementById("backBtn")
backButton.addEventListener("click",function(){
    var from = document.getElementById("from")
    var show=document.getElementById("bDetails")
    from.style.display = "block";
    show.style.display="none"
    window.closed;
})
submit.addEventListener('click', function(){

    var Email = document.getElementById("mail").value;
    var from = document.getElementById("from")
    var password = document.getElementById("pass").value;
    var show=document.getElementById("bDetails")
    var error_message=document.getElementById("Erroe_m")
    if (Email =='') {


        alert('Email is required');
        
    }

    else if (password=='') {
        alert(' password is required');
    }
   /*  else {
        from.style.display = "none";
        show.style.display="block"
    } */
    else{
        if(Email=="riaz@gmail.com" && password==12345)
        {
            from.style.display = "none";
            show.style.display="block"
        }
        else {
            error_message.style.display="block";
        }

    }
   
});

// bank managment
 
var dipositebtn=document.getElementById("dbtn")
dipositebtn.addEventListener('click',function()
{
   
    var  dinput=document.getElementById("dinput").value;
    var dp=parseFloat(dinput);
    var totalBlance=document.getElementById("showAllBlance").innerHTML;
     var dt=parseFloat(totalBlance);



    var total_blance_add= dp+dt ;
    document.getElementById("showAllBlance").innerHTML=total_blance_add;
       
})

var widthrybtn=document.getElementById("wbtn")
widthrybtn.addEventListener('click',function()
{
    var wInput=document.getElementById("widthy").value
    var totalBlance=document.getElementById("showAllBlance").innerHTML;
    if(wInput<=10)
    {
        alert("Minimum Widthry 10+")
        
    }
    else {
        var totalBlance_remove=totalBlance-wInput;
        document.getElementById("showAllBlance").innerHTML=totalBlance_remove;
        
    }
  if(totalBlance<=10)
  {
    alert("please deposite first")
   document.getElementById("showAllBlance").innerHTML=totalBlance;
    
  }
 



   
   
  
    
})
