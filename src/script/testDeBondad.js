function testResults(){
    let q1 = Number(document.getElementById('generoso').value);
    let q2 = Number(document.getElementById('ayuda').value);
    let q3 = - Number(document.getElementById('pelea').value);
    let q4 = Number(document.getElementById('obediencia').value);
    let result = (q1+q2+q3+q4)/4;
    if (result<1){
        console.log("Has sido un niño malo");
    }else{
        console.log("Has sido un niño bueno");
        document.getElementById("goodKid").style.display = "block";
        document.getElementById("sendTestBondad").style.display = "none";
    }

}