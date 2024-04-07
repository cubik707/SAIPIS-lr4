
document.querySelector('#addWord').addEventListener('click', () => insertText());
document.querySelector('#addToParagraph').addEventListener('click', () => addTextToParagraph());

const insertText = () => {
    let fontSize = document.getElementById("fontSize").value;
    let fontStyle = document.getElementById("fontStyle").value;
    let fontColor = document.getElementById("fontColor").value;
    let capital = document.getElementById("capital").value;
    let position = document.querySelector('input[name="position"]:checked').value;

    let newText = `<span class="newWord" style="font-size: ${fontSize}; font-style: ${fontStyle}; font-weight:${fontStyle}; color: ${fontColor};">${capital}</span>`;

    let textArea = document.getElementById("userInput");

    position === "before" 
        ? textArea.insertAdjacentHTML('beforebegin' , newText)
        : textArea.insertAdjacentHTML('afterend', newText)
    
}

const addTextToParagraph = () => {
    let userInput = document.getElementById("userInput").value;
    let newWords = document.getElementsByClassName("newWord");

    let outerHTMLArray = [];

    for (let element of newWords) {
        outerHTMLArray.push(element.outerHTML);
    }

    console.log(newWords);


    let newParagraph = document.createElement("p");
    newParagraph.textContent = userInput + " "
    outerHTMLArray.forEach(html => {
        newParagraph.innerHTML += html;
    });
    
    console.log(newParagraph);
    document.getElementById("paragraphImage").insertAdjacentElement('beforebegin' , newParagraph);
}

