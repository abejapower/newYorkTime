const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;

form.addEventListener('submit', function(e){
    e.preventDefault();
    responseContainer.innerHTML = '';
    searchedForText = searchField.value;
    getNews();
});

function getNews(){
    const article = new XHLHttpRequest();
    articleRequest.open('GET','http://api.nytimes.com/svc/search/v2/articlesearch.json?q=$(searchedForText)&api-key=<575ab4f4a10b4d7d975eadce5766b308>');
    articleRequest.onload = addNews;
    articleRequest.onerror = handleError;
    articleRequest.send();

}

function handleError(){
    console.log('se ha presentado un error');
}

function addNews(){
    const data = JSON.parse(this.responseText);
    //const response= data.response;
    //console.log(data);
    const article= data.response.docs[0];
    const title = article.hradline.main;
    const snippet = article.snippet;
    responseContainer=appendChild(li);
}
