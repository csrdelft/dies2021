import './assets/style.scss'

window.addEventListener('load', function () {
    document.getElementById("player").innerHTML =
        `<iframe src="${process.env.VUE_APP_VIDEO}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
});
