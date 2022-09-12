// !scroll anchor links fixed__________________________________
var switchView = function (hash = location.hash, adjust = 80) {
    // *change this or top-bottom adjust "adjust = 80"
    try {
        var elem = document.querySelector(hash);
        var elemRect = elem.getBoundingClientRect(),
            bodyRect = document.body.getBoundingClientRect(),
            offset = elemRect.top - bodyRect.top;
        window.scroll({
            top: offset - adjust,
            behavior: 'smooth'
        })
    } catch (DOMException) {
        location.hash = "";
    }
}

document.addEventListener('DOMContentLoaded', () => { switchView() });
window.onhashchange = () => { switchView() }

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.onclick = (e) => {
        var target = e.target;
        while (target.nodeName.toLowerCase() != "a") {
            target = target.parentNode
        }
        e.preventDefault()
        switchView(target.attributes.href.value)
    };
});

