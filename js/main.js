console.log("JS file connected");

const vectorGraphic = document.querySelector('#grapefruitsvg');

function logThisId(){
    console.log(this);
    console.log('this fruits decent', this.id);
}

vectorGraphic.addEventListener('click', logThisId); 