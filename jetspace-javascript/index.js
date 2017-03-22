// change image js
function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "https://media.giphy.com/media/vrKUtJNMtB3Y4/giphy.gif"
    } else {
        pic = "https://s-media-cache-ak0.pinimg.com/originals/3a/88/ce/3a88ce0038c1b6da069e0332a44dcd08.gif"


    }

    document.getElementById('myImage').src = pic;
}
