//inculding html elements
//*news container //div with id container
let container=document.getElementById("container");

//Creating an xhr object
const xhr=new XMLHttpRequest();
//Opening xhr object
const country="in";
const apiKey="4bcfee1d722634fe95d1df40127ba30f";
const language="en";
let url=`https://gnews.io/api/v4/top-headlines?country=${country}&token=${apiKey}&lang=${language}`;
console.log(url);
xhr.open("GET",url,true);
//What to do when response is ready
xhr.onload=function(){
if(this.status==200){
let data=JSON.parse(this.responseText);
console.log(data);
let article=data.articles;
article.forEach((element,index)=>{
  let news=`
<div class="newsBox">
  <span><p><b>Title: </b>${element.title}</p></span>
  <p>
    ${element.content} <a href=${element.url}>read more.</a>
  </p>
</div>
`;
container.innerHTML+=news;
})
}
else{
 console.error("An error occurred");
}
}
//sending request
xhr.send();