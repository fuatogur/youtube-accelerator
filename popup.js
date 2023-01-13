const input = document.getElementById('input')
const button = document.getElementById('button')

button.addEventListener('click', async () => {
    chrome.scripting.executeScript({
        target: {tabId: (await chrome.tabs.query({active: true, currentWindow: true}))[0].id},
        func: speedUp,
        args: [input.value]
    }, () => {
    })
})

function speedUp(value) {
    document.querySelector('video').playbackRate = value
}
