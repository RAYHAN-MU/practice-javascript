// task 1 
let vari = document.querySelector("#abc");
function message1() {
    vari.src = "images/img1.png";
    vari.style.display = "block";
}
function message2() {
    vari.src = "images/img2.png";
    vari.style.display = "block";
} 
//task 2
  //FOR REMOVE CHILD  SELECT-children> parent >remove children 
 let chil1=document.getElementById("nextid"); 
 let par1=chil1.parentElement;
 par1.removeChild(par1.children[0]); 
 // task 3
//  // for remove children arif  select- parent > any child >remove arif children 
  let  par2=document.getElementsByClassName("ol_class")[0];
   let  chil2=par2.children[3]; 
   let  chil3=chil2.nextElementSibling; 
     par2.removeChild(chil3);  
  //image slider task 4
  let ver = document.getElementById("abcd");
       function funct(i)
       {   
        if(i===0){
           ver.src="images/img2.png"; 
         ver.style.display="block";     
        } 
        else if(i===1)
          {    
          ver.src="images/img1.png"; 
          ver.style.display="block";
      }

    }
    //  start image slider with array implementation   task 5
    let count=0; 
    let arr_image_ver=document.getElementById("arrimageid"); 
    let photos=["images/img1.png","images/img2.png","images/img3.png","images/img4.png"]; 
       function fun()
       {
            if(count>=0 && count<photos.length)
            {  
              arr_image_ver.src=photos[count]; 
              arr_image_ver.style.display="block";
              count++;    
            }
            
           
       } 
       function funpre()
       { 
           count=count-1;
        if(count>=0 && count<photos.length)
        {          
          arr_image_ver.src=photos[count]; 
          arr_image_ver.style.display="block";     
        } 
       
       }  

       // css style dynamcally   task 6

      
      //  function addfun()
      //  {
      //    pver.style.color="yellow";
      //    pver.style.backgroundColor="gray";
      //    pver.style.width="170px"
      //    pver.style.fontSize="20px";
      //  } 
       ///similar code with css file add v-41  
       let pver = document.getElementsByClassName("pclass")[0];
       function addfu()
      {
              
          pver.classList.add("p_id-style");

      } 
      function  removfun()
      {
              
          pver.classList.remove("p_id-style");
      }  
      //event listener   task 7    incomplete
      // if we create without function name , this function  is called annonomoyas function 
    let veri=document.getElementById("button_id");
    veri.addEventListener("mouseover",function() 
    


    {
      veri.classList.add("p_id-style");

    });   
    veri.addEventListener("mouseout",function()
           {
                   veri.classList.remove("p_id-style"); 
          });  
          //event listener multiple elements  v_43  
       let v1=document.getElementById("xyz").children[0]; 
       let v2=document.getElementById("xyz").children[1]; 
      
        v2.addEventListener("click",function()
      {
            v1.innerHTML="this is a Button one";
      }); 

      
      let v4=document.getElementById("xyz").children[2]; 
     
       v4.addEventListener("click",function()
     {
           v1.innerHTML="this is a Button  two";
     });

     let v5=document.getElementById("xyz").children[3]; 
     
       v5.addEventListener("click",function()
     {
           v1.innerHTML="this is a Button  three";
     }); 
     //audio play  in javascript   task 8 incomplete V-44


     //how to add and remove animation V-45 task 9


     //key press listener  task 10 
     let vart9=document.getElementById("axb");
     let vart10=document.getElementById("azc");
      vart10.addEventListener("keypress",function(event)
    {
                  let text=event.key;
                  vart9.innerHTML="you press "+text; 

    }); 

         
      






  




    

  

 



