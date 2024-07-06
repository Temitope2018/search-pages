const accessKey = "Zga_EbhbwGRr5n0CGxouxCVU3eIiin92ylo3FwdZOMs";
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search");
const searchResult = document.getElementById("search-result");
const showButton = document.getElementById("show-more-btn");

let Keyword ="";
let page = 1;

async function searchimages(){
    Keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${Keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

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
    searchimages();
})
showButton.addEventListener("click",()=>{
   page++;
   searchimages();
})
