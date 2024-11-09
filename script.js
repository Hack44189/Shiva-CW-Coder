let swapCount = 0;

    document.getElementById('yesButton').onclick = handleClick;
    document.getElementById('noButton').onclick = handleClick;

    function handleClick(event) {
        event.preventDefault(); // Prevent the default action (navigation)
        
        swapButtons(); // Swap the buttons
        showHeart(event.clientX, event.clientY); // Show heart animation at the click position
    }

    function swapButtons() {
        swapCount++;

        let yesButton = document.getElementById('yesButton');
        let noButton = document.getElementById('noButton');

        // Swap the text
        let tempText = yesButton.innerText;
        yesButton.innerText = noButton.innerText;
        noButton.innerText = tempText;

        // Swap the links
        let tempHref = yesButton.href;
        yesButton.href = noButton.href;
        noButton.href = tempHref;

        // Show the new button after 5 swaps
        if (swapCount === 5) {
            document.getElementById('newButton').style.display = 'inline-block';
        }
    }

    function showHeart(x, y) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerText = '❤️';
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        document.body.appendChild(heart);

        // Remove the heart after the animation ends
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    