console.log('content.js loaded');
function processElement(element) {
    if (element === null) {
        return;
    }
    const newElement = document.createElement('span');
    newElement.textContent = "-" + element.title + "~";
    element.parentElement.insertBefore(newElement, element);
}
function processAllElements() {
    document.querySelectorAll('relative-time[tense="past"]').forEach(processElement);
}
processAllElements();

function addLocationObserver(callback) {
    const config = { attributes: false, childList: true, subtree: false }
    const observer = new MutationObserver(callback)
    observer.observe(document.body, config)
}

addLocationObserver(processAllElements)
