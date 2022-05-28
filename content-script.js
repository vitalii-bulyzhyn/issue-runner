const leftElement = document.createElement("div")
const leftTextNode = document.createTextNode("<");
leftElement.classList.add("next-button")
leftElement.classList.add("left-position")
leftElement.appendChild(leftTextNode);

leftElement.onclick = () => {
    console.log("left click")
}

const rightElement = document.createElement("div")
const rightTextNode = document.createTextNode(">");
rightElement.classList.add("next-button")
rightElement.classList.add("right-position")
rightElement.appendChild(rightTextNode);

rightElement.onclick = () => {
    console.log("right click")
}

document.body.append(leftElement)
document.body.append(rightElement)
