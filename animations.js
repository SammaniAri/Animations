function clickBox() {
    let box = document.getElementById('box1');
    box.classList.add('box-active');
    }
    
    let box = document.getElementById('box1');
    box.addEventListener('click', clickBox);


    function animate() {
        let figure = document.getElementById('myFigure');
        figure.classList.add('figure-animated');
        }
        let figure = document.getElementById('myFigure');
        figure.addEventlistener('click', animate);