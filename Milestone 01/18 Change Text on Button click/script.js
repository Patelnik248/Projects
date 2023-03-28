const btn = document.querySelector("#btn");

function toggleHeading() {
    const heading = document.getElementById('heading');
    if (heading.innerText === 'The most affordable learning platform.') {
      heading.innerText = 'PW Skills';
    } else {
      heading.innerText = 'The most affordable learning platform.';
    }
}

btn.addEventListener("click",toggleHeading);