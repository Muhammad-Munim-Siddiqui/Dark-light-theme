var color = true
function changeTheme() {
    var body = document.getElementById('body')
    var btnBack = document.getElementById('btn')
    var btnColor = document.getElementById('btn')
    var name = document.getElementById('btn')
    if(color === true){
        body.style.backgroundColor = "black";
        btnBack.style.backgroundColor = 'white';
        btnColor.style.color = 'black'
        name.textContent = 'Day';
        color = false;
    }else if(color === false){
        body.style.backgroundColor = "white";
        btnBack.style.backgroundColor = 'black';
        btnColor.style.color = 'white';
        name.textContent = 'Night';
        color = true;
    }
}