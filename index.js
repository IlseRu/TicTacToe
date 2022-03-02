let turno = false;
let victoria = false;
let contador = 0;
let turnoX = document.getElementById("turnoX");
let turnoO = document.getElementById("turnoO");
turnoX.style.backgroundColor = "black";

const handleClick = (event) => {
    //const target = event.target
    //console.log(target)
    const {id} = event.target;
    const div = document.getElementById(id);

    if (div.innerText === "" && victoria === false){
        div.innerText = turno ? "O": "X"; 

        if (div.innerText == "X") {
            turnoX.style.backgroundColor = "purple";
            turnoO.style.backgroundColor = "black";
        
        } else {
            turnoX.style.backgroundColor = "black";
            turnoO.style.backgroundColor = "purple";

        } 

        verificarVictoria();
        turno= !turno;
    }

};

const verificarVictoria = () => {

    contador++;

    const div1= document.getElementById(1);
    const div2= document.getElementById(2);
    const div3= document.getElementById(3);
    const div4= document.getElementById(4);
    const div5= document.getElementById(5);
    const div6= document.getElementById(6);
    const div7= document.getElementById(7);
    const div8= document.getElementById(8);
    const div9= document.getElementById(9);
    
    const forma1 = div1.innerText === div2.innerText && 
    div1.innerText === div3.innerText && div1.innerText 
    !== "";

    const forma2= div2.innerText === div5.innerText && 
    div2.innerText === div8.innerText && div2.innerText !== "";

    const forma3 = div3.innerText=== div6.innerText &&
    div3.innerText === div9.innerText && div3.innerText !== "";

    const forma4 = div4.innerText === div5.innerText &&
    div4.innerText === div6.innerText && div4.innerText !== "";
   
    const forma5 = div1.innerText === div4.innerText && 
    div1.innerText === div7.innerText && div1.innerText !== "";
    
    const forma6 = div7.innerText === div8.innerText &&
    div7.innerText === div9.innerText && div7.innerText !== "";
    
    const forma7 = div1.innerText === div5.innerText &&
    div1.innerText === div9.innerText && div1.innerText !== "";

    const forma8 = div3.innerText === div5.innerText &&
    div3.innerText === div7.innerText && div3.innerText !== "";

    if (forma1 || 
        forma2 || 
        forma3|| 
        forma4||
        forma5||
        forma6||
        forma7|| 
        forma8
        ){


            const linea = document.getElementById("linea");

            if (forma1) {
                linea.style.height = "5px";
                linea.style.width = "450px";
                linea.style.top = "150px";
                linea.style.left = "0px";
            } else if (forma2) {
                linea.style.height = "5px";
                linea.style.width = "450px";
                linea.style.top = "315px";
                linea.style.left = "3px";
                linea.style.transform = 'rotate(270deg)';
            }  else if (forma3) {
                linea.style.height = "5px";
                linea.style.width = "450px";
                linea.style.top = "315px";
                linea.style.left = "150px";
                linea.style.transform = 'rotate(270deg)';
            }  else if (forma4) {
                linea.style.height = "5px";
                linea.style.width = "450px";
                linea.style.top = "310px";
                linea.style.left = "0px";
            }  else if (forma5) {
                linea.style.height = "450px";
                linea.style.width = "5px";
                linea.style.top = "90px";
                linea.style.left = "70px";
            }  else if (forma6) {
                linea.style.height = "5px";
                linea.style.width = "450px";
                linea.style.top = "465px";
                linea.style.left = "0px";
            }  else if (forma7) {
                linea.style.height = "620px";
                linea.style.width = "5px";
                linea.style.top = "2px";
                linea.style.left = "220px";
                linea.style.transform = 'rotate(135deg)';
            }  else if (forma8) {
                linea.style.height = "620px";
                linea.style.width = "5px";
                linea.style.top = "2px";
                linea.style.left = "220px";
                linea.style.transform = 'rotate(-135deg)';
            } 

            
        victoria = true;
        alert(`Los ganadores son las  ${turno ? "O": "X"}`)
    }else{
        if(contador === 9){
        alert("Empate")
        }
    }

};

const reload = () => {

    const div1= document.getElementById(1);
    const div2= document.getElementById(2);
    const div3= document.getElementById(3);
    const div4= document.getElementById(4);
    const div5= document.getElementById(5);
    const div6= document.getElementById(6);
    const div7= document.getElementById(7);
    const div8= document.getElementById(8);
    const div9= document.getElementById(9);

    div1.innerText = "";
    div2.innerText = "";
    div3.innerText = "";
    div4.innerText = "";
    div5.innerText = "";
    div6.innerText = "";
    div7.innerText = "";
    div8.innerText = "";
    div9.innerText = "";
    
    linea.style.height = "0px";
    linea.style.width = "0px";
    linea.style.top = "0px";
    linea.style.left = "0px";
    linea.style.transform = '';

    turnoX.style.backgroundColor = "black";
    turnoO.style.backgroundColor = "black";
    turno= false;
    victoria= false;
    contador = 0 ;
};