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


        // var color = true;
        // function changeTheme() {
        //     var body = document.getElementById('body');
        //     var btn = document.getElementById('btn');

        //     if (color === true) {
        //         body.style.backgroundColor = "black";
        //         btn.style.backgroundColor = 'white';
        //         btn.style.color = 'black';
        //         btn.textContent = '🌚 Entering Spooky Night Mode!';
        //         alert("Whoa! You’ve entered the dark side. Bring snacks.");
        //         color = false;
        //     } else {
        //         body.style.backgroundColor = "white";
        //         btn.style.backgroundColor = 'black';
        //         btn.style.color = 'white';
        //         btn.textContent = '☀️ Welcome to Bright-ville!';
        //         alert("Ahhh, back to the light! Sunglasses on, please.");
        //         color = true;
        //     }
        // }


        // var color = true;
        // function changeTheme() {
        //     var body = document.getElementById('body');
        //     var btn = document.getElementById('btn');

        //     if (color === true) {
        //         body.style.backgroundColor = "black";
        //         btn.style.backgroundColor = 'white';
        //         btn.style.color = 'black';
        //         btn.textContent = '🌚 Welcome to the Bat Cave!';
        //         alert("🔦 Uh-oh, it’s dark! Don’t trip over anything... especially your dignity.");
        //         console.log("Dark mode activated: Bat-Signal is incoming...");
        //         color = false;
        //     } else {
        //         body.style.backgroundColor = "white";
        //         btn.style.backgroundColor = 'black';
        //         btn.style.color = 'white';
        //         btn.textContent = '☀️ Prepare for Blinding Light!';
        //         alert("😎 Whoa, the sun is back! You might need SPF 100 for this.");
        //         console.log("Day mode activated: Sunglasses on, everyone!");
        //         color = true;
        //     }
        // }