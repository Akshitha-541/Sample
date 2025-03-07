
function changeBackgroundColor() {
    const colors = ['#ffcccb', '#f0f8ff', '#d3ffd3', '#ffebcd', '#ffde00'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
