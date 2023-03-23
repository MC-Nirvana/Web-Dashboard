window.onload = function () {
    setInterval(updateClock, 1000);
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const timeString = `${hours}:${minutes}:${seconds}`;
        const hourDigit = document.querySelector('.hour');
        const minuteDigit = document.querySelector('.minute');
        const secondDigit = document.querySelector('.second');
        const clock = document.querySelector(".clock");
        clock.textContent = timeString;

        updateDigit(hourDigit, hours);
        updateDigit(minuteDigit, minutes);
        updateDigit(secondDigit, seconds);
    }

    function updateDigit(digitElement, value) {
        const tens = Math.floor(value / 10);
        const ones = value % 10;

        digitElement.innerHTML = `
    <span class="top">${tens}</span>
    <span class="bottom">${ones}</span>
  `;

        const topSpan = digitElement.querySelector('.top');
        const bottomSpan = digitElement.querySelector('.bottom');

        if (topSpan.innerHTML !== bottomSpan.innerHTML) {
            topSpan.classList.add('flip');
            bottomSpan.classList.add('flip');

            setTimeout(() => {
                topSpan.classList.remove('flip');
                bottomSpan.classList.remove('flip');
            }, 500);
        }
    }
}