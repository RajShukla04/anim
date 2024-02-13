const aud = new Audio("mera_wala_sardar.m4a")
const heading = document.getElementById("heading")
const playl = () => {
    
    aud.play()
    heading.innerHTML = "hey babes &#128158;"
    heading.classList.add("lol")
    
}
const pause = () => {
    aud.pause()
    heading.innerHTML = "don't pause it"
    heading.classList.remove("lol")
}