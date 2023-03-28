const text = document.getElementById("text");
const words = text.textContent.split(" ");

words.forEach((word) =>{
    if(word.length > 8){
        const highlightedWord = document.createElement("span");
        highlightedWord.textContent = word;
        highlightedWord.style.backgroundColor ='yellow';
        text.innerHTML = text.innerHTML.replace(word,highlightedWord.outerHTML);
    }
});

