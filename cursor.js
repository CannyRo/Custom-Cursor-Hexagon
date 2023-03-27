console.log("Javascript is ON");

const app = {
    init : function(){
        console.log("INIT")

        // const cursor = document.getElementById("cursor_container");
        // document.addEventListener("mousemove", ({clientX, clientY}) => {
        //     let positionX = clientX - 8;
        //     let positionY = clientY - 8;
        //     cursor.style.transform = "translate("+positionX+"px, "+positionY+"px)";
        // });

        const pointer = document.getElementById("pointer");
        const hexagone = document.getElementById("cursor_container");
        document.addEventListener("mousemove", ({clientX, clientY}) => {
            let pointer_positionX = clientX-2.5;
            let pointer_positionY = clientY-2.5;

            let hexagone_positionX = clientX-7;
            let hexagone_positionY = clientY-8;
            pointer.style.transform = "translate("+pointer_positionX+"px, "+pointer_positionY+"px) rotate(90deg)";
            hexagone.style.transform = "translate("+hexagone_positionX+"px, "+hexagone_positionY+"px)";
        });

    },
}
document.addEventListener("DOMContentLoaded", app.init)