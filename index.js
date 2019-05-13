var i=0;
var txt= "hello, this is an animation";
var speed = 150;

const type = () => {
    document.getElementById('type').textContent+=txt.charAt(i);
    i++;
    setTimeout(type,speed)
};

type();