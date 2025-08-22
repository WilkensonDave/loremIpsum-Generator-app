"use strict"

const tags = [
    "p", "h1", "h2", "h3", "h4", "h5", "h6", "span"
]

const paragraphSlider = document.getElementById("paragraphs");
const paragraphValue = document.querySelector(".paragraphValue");

const wordSlider = document.getElementById("words");
const wordsValue = document.querySelector(".wordValue");

const tagOptions = document.getElementById("tags");
const includeHtml = document.getElementById("include");

const button = document.querySelector(".generator");
const outPut = document.querySelector(".output");


function updateUI(){
    tags.forEach((el) =>{
        const option = document.createElement("option");

        option.value = el;
        option.textContent = `<${el}>`;
        tagOptions.appendChild(option);

    });

    paragraphSlider.addEventListener("click", updateParagraphValue);
    wordSlider.addEventListener("click", updateWordValue);
    button.addEventListener("click", generateLoremIpsum);

}


function updateParagraphValue(){
    paragraphValue.textContent = paragraphSlider.value;
}


function updateWordValue(){
    wordsValue.textContent = wordSlider.value
}


function generateLoremIpsum(){
    const paragraph = Number.parseInt(paragraphSlider.value);
    const word = Number.parseInt(wordSlider.value);
    const tag = document.getElementById("tags").value;
    const include = document.getElementById("include").value;

    const loremText = generateText(
        paragraph, word, tag, include
    )
    
    displayLoremIpsum(loremText);
    
}


function generateText(
    paragraph, word, tag, include
){
    const wordsArr = new Array(paragraph).fill("");
    const content = generateWord(word);

    for(let i = 0; i < wordsArr.length; i++){
        wordsArr[i] = include == "Yes" ? `<${tag}> ${content} <${tag}>`: content;
    }

    return wordsArr.join("\n");
}


function generateWord(word){

    const text = `
    Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna 
    aliqua. Diam in arcu cursus euismod 
    quis viverra nibh. Nunc aliquet bibendum
    enim facilisis gravida neque convallis 
    a cras. Sagittis purus sit amet volutpat
    Consequat mauris. Duis ultricies lacus 
    sed turpis tincidunt id. Consequat interdum
    varius sit amet mattis vulputate. Enim sed
    faucibus turpis in eu. Ridiculus mus mauris
    vitae ultricies leo integer malesuada nunc vel.
    Nulla pharetra diam sit amet nisl suscipit.
    Lobortis elementum nibh tellus molestie nunc
    non blandit massa enim. Dis parturient montes
    nascetur ridiculus mus. Justo nec ultrices dui
    sapien eget. Enim tortor at auctor urna nunc.
    Dictumst quisque sagittis purus sit amet volutpat
    consequat mauris nunc.`;

    const textArr = text.split(" ");            

    if(word <= textArr.length){
        return textArr.slice(0, word).join("");

    }else{  
        return textArr.join(" ");
    }

}

function displayLoremIpsum(text){
    outPut.innerHTML = text;
}

updateUI()
