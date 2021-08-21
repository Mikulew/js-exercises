/*
    Write a JavaScript program to rotate the string 'example' in right direction 
    by periodically removing one letter from the end of the string and attaching it to the front.
*/


const element = document.getElementById('result');
element.textContent = "Mikulew";

function animateString(node, time) {
    setInterval(() => {
        let text = node.textContent;
        const updatedText = text[text.length - 1] + text.substring(0, text.length - 1);
        node.textContent = updatedText;
    }, time);
}

animateString(element, 100);
