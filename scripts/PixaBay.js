var pageNumber = 1;
var API_KEY = '6842085-e1731a927520d8ddf63cd9325';
var searchQ = "";
var colorQ = "";
var URL = "";

var maxItems = 1;
var currentCount = 0;

document.getElementById('sokbutton').addEventListener("click", async function () {
    fetchImages()
});

(function () {
    checkButtonState();
    fetchImages();
})();

const node = document.getElementById("searchfield");
node.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        fetchImages();
    }
})

function checkButtonState() {
    if (pageNumber == 1) {
        document.getElementById('previousButton').disabled = true;
    } else {
        document.getElementById('previousButton').disabled = false;
    }

    if(currentCount >= (maxItems)){
        document.getElementById('nextButton').disabled = true;
    }else{
        document.getElementById('nextButton').disabled = false;
    }
}

async function fetchImages() {
    searchQ = document.getElementById('searchfield').value;
    var sel = document.getElementById("colors");
    colorQ = sel.options[sel.selectedIndex].text.toLowerCase();
    document.getElementById('image-container').innerHTML = "";
    URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(searchQ) + "&colors=" + encodeURIComponent(colorQ) + "&per_page=10&page=" + pageNumber;
    const data = await (await fetch(URL)).json();

    if (parseInt(data.totalHits) > 0) {
        maxItems = data.total;
        console.log(maxItems);
        data.hits.forEach(hit => {
            console.log(hit.previewURL);
            var grid = document.createElement('div');
            grid.setAttribute("id", "imagegrid");
            grid.innerHTML = "<img src=" + hit.largeImageURL + "></img>";

            var user = document.createElement("p");
            user.innerHTML = hit.user

            var tags = document.createElement("p");
            tags.innerHTML = hit.tags

            grid.append(user);
            grid.append(tags);
            document.getElementById('image-container').append(grid);
        });
    }
    else {
        console.log('No hits');
    }
}

document.getElementById('nextButton').addEventListener("click", async function () {
    pageNumber++;
    DoStuff();
    console.log(pageNumber);
    currentCount = pageNumber * 10;
    console.log(currentCount);
    checkButtonState();
});

document.getElementById('previousButton').addEventListener("click", async function () {
    if (pageNumber == 1) return;
    pageNumber--;
    currentCount = pageNumber * 10;
    console.log(currentCount);
    DoStuff();
    checkButtonState();
});

async function DoStuff(op) {
    document.getElementById('image-container').innerHTML = "";
    URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(searchQ) + "&colors=" + encodeURIComponent(colorQ) + "&per_page=10&page=" + pageNumber;
    var data = await (await fetch(URL)).json();
    
    if (parseInt(data.totalHits) > 0)
        data.hits.forEach(hit => {
            console.log(hit.previewURL);
            var grid = document.createElement('div');
            grid.setAttribute("id", "imagegrid");
            grid.innerHTML = "<img src=" + hit.largeImageURL + "></img>";

            var user = document.createElement("p");
            user.innerHTML = hit.user

            var tags = document.createElement("p");
            tags.innerHTML = hit.tags

            grid.append(user);
            grid.append(tags);
            document.getElementById('image-container').append(grid);
        });

    else
        console.log('No hits');
}

