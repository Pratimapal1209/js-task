const MessageElement = document.getElementById('loading-message');
let dot = '';

function Animation() {
   MessageElement.textContent = 'Loading' + dot;
    dot += '.';
    if (dot.length > 3) {
        dot = '';
    }
}

setInterval(Animation, 1000);