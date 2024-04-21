let lang = []; 
lang[0]=[];
 lang[1]=[]; 

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
       lang[i][j]=i+j; 
  }
}
for (let i = 0; i < 2; i++) 
{
    for (let j = 0; j < 3; j++) 
    {
          console.log(lang[i][j]);
    } 
} 
//create onject 
  let bangladesh={name:"bd",area:23.45,location:"sylhet", arr:[1,2,3,4]}; 
  console.log(bangladesh.name); 
  console.log(bangladesh.arr[0]);
  console.log(bangladesh.area); 
function cons(name,area,location)
{
     
     this.name=name;
     this.area=area;
    this.location=location; 
    this.dis=function()
    {

          console.log(this.name);
          console.log(this.area);
          console.log(this.location);
    }
    
}

let student1=new cons("rayhan",23.4,"sylhet"); 
 
let student2=new cons("burhan",82.5,"dkaka"); 
 

student1.dis();



