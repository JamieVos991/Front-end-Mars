var indexValue = 1;
showVid(indexValue);

function side_slide(e){
    showVid(indexValue += e);
}

function showVid(e) {
    var i;
    const vid = document.querySelectorAll('.video');

    if(e >vid.length) {
        indexValue = 1
    }

    if(e < 1) {
        indexValue = vid.length
    }

    for(i = 0; i < vid.length; i++) {
        vid[i].style.display = "none";
    }

    vid[indexValue-1].style.display = "block";
}
