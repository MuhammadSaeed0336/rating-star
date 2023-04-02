
const stars = document.querySelectorAll('.star')
const output = document.querySelector('.output')

for(i=0; i<stars.length; i++){

    stars[i].starValue = (i+1);
    
    ['click', 'mouseover', 'mouseout'].forEach(function(e){
        stars[i].addEventListener(e, showRating);
    })
}

function showRating(e){
    let type = e.type;
    let starValue = this.starValue;

    if(type === 'click'){
        if(starValue > 1){
            output.innerHTML = "You rated this "+ starValue+" stars.";
        }
    }
    
    stars.forEach(function(ele, index){
        if(type === 'click'){
            if(index < starValue){
                ele.classList.add("orange");
            }else{
                ele.classList.remove("orange");
            }
        }

        if(type === 'mouseover'){
            if(index < starValue){
                ele.classList.add("yellow");
            }else{
                ele.classList.remove("yellow");
            }
        }

        if(type === 'mouseout'){
                ele.classList.remove("yellow");
        }
    })
}

function nextPic(){
    window.location.reload();
}