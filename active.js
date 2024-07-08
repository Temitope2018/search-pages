const accessKey = "Zga_EbhbwGRr5n0CGxouxCVU3eIiin92ylo3FwdZOMs";
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search");
const searchResult = document.getElementById("search-result");
const showButton = document.getElementById("show-more-btn");
const mySpin = document.querySelector(".spin");
let Keyword ="";
let page = 1;
try{
    
async function searchimages(){
    Keyword = searchBox.value;
    mySpin.style.display ="block";
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${Keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    
    const data = await response.json();
    mySpin.style.display = "none";
    if(page===1){
        searchResult.innerHTML="";
    }
   
    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src= result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target ="_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    
    showButton.style.display ="block";
         
}
searchBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    page=1;
    mySpin.style.display ="block";
    searchimages();
    })
showButton.addEventListener("click",()=>{
   page++;
   searchimages();
})
}
catch(error){
    console.error(error);
}


