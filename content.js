console.log('content.js loaded');
function processElement(element) {
    const newElement = document.createElement('div');
    newElement.textContent = element.title;
    newElement.style.display = 'inline-block';
    element.parentElement.insertBefore(newElement, element);
    element.remove();
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
