let nextUrl;
let prevUrl;

const leftElement = document.createElement("div")
const leftTextNode = document.createTextNode("<");
leftElement.classList.add("next-button")
leftElement.classList.add("left-position")
leftElement.appendChild(leftTextNode);

leftElement.onclick = () => {
    window.location = prevUrl.html_url
}

const rightElement = document.createElement("div")
const rightTextNode = document.createTextNode(">");
rightElement.classList.add("next-button")
rightElement.classList.add("right-position")
rightElement.appendChild(rightTextNode);

rightElement.onclick = () => {
    window.location = nextUrl.html_url
}

document.body.append(leftElement)
document.body.append(rightElement)

fetch("https://api.github.com/repos/diffgram/diffgram/issues?per_page=100")
    .then((response) => response.json())
    .then((data) => {
        const withPRsRemoved = data.filter(item => !item.html_url.includes('/pull/'))
        const currentIssueNumber = window.location.pathname.split('/issues/')[1]
        const currentItem = withPRsRemoved.find(item => item.number === parseInt(currentIssueNumber))

        const indexOfCurrentIssue = withPRsRemoved.indexOf(currentItem)

        nextUrl = withPRsRemoved[indexOfCurrentIssue + 1]
        prevUrl = withPRsRemoved[indexOfCurrentIssue - 1]
    });
