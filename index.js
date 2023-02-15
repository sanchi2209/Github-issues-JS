
// function main(){
// fetch(`https://api.github.com/repositories/1296269/issues?page=${count}&per_page=5`)
// .then((res)=>{
//  return res.json()
// }).then((data)=>{
//  console.log(data)
//  data.forEach(element => {
//     let h1=document.createElement("h1")
//     h1.innerText=`Title ${element.title}`
//     document.getElementById("container").appendChild(h1)
//     // 
//  });

 
 
 
 
// //  console.log(DIV)
// })
// }
// let count=0;
// function next(){
//     document.getElementById("container").innerHTML=""
//     // let Page=document.getElementById("Page")
//     let Page=document.getElementById("Page");
//     count++
//     Page.innerText=`Page Number is:${count}`;
    
//     main()
//     // Page.innerHTML=count;
//     console.log(count)
    
    
// }

// function prev(){
//     debugger
//     document.getElementById("container").innerHTML=""
//     let Page=document.getElementById("Page");
    
//         count--;
//         Page.innerText=`Page Number is ${count}`;
//         main()
        
    
    
//     // 
// }

function main(){
fetch(`https://api.github.com/repositories/1296269/issues?page=${count}&per_page=5`)
.then((res)=>{return res.json()})
.then((data)=>{
    data.forEach(element => {
        const h1=document.createElement("h1")
        h1.innerText=`Title ${element.title}`
        document.getElementById("container").appendChild(h1)
  
    });
})
}
let count=0;
function next(){
    document.getElementById("container").innerHTML=""
    let page=document.getElementById("Page")
    count++;
    
    page.innerHTML=`Page Number is ${count}`
    main()
}

function prev(){
    document.getElementById("container").innerText=""
   let Page=document.getElementById("Page");
   
//  main()

   //if(Page>1){
    count--;
    Page.innerHTML=`Page Number is ${count}`
    main()
    
  // }
   
//    else{

//    }
}