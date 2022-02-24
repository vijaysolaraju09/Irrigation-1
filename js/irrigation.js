let hiddenMenu=document.getElementById("hideMenu")
let menuIconEl=document.getElementById("menuIcon")
let cancelIconEl=document.getElementById("cancelIcon")
let headerEl=document.getElementById("header")
function showMenu() {
    hiddenMenu.style.display="flex"
    cancelIconEl.style.display="block"
    headerEl.style.display="none"
}
function hideMenu() {
    hiddenMenu.style.display="none"
    cancelIconEl.style.display="none"
    headerEl.style.display="block"
}