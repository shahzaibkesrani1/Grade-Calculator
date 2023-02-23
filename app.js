function result(){
    let a = document.querySelector("#computer").value
    let b = document.querySelector("#math").value
    let c = document.querySelector("#english").value
    let d = document.querySelector("#html").value
    let e = document.querySelector("#css").value

    let to = parseInt(a) + parseFloat(b) + parseFloat(c) +  parseFloat(d) + parseFloat(e)
    let per = (to * 100) /500
    if (per >= 90){
document.querySelector(".gra").innerHTML = "Grade:" + "A+";
    }else if(per >=80){
        document.querySelector(".gra").innerHTML ="Grade:" + "A"
    }else if (per>=70){
document.querySelector(".gra").innerHTML = "Grade:" +"B+"
    }else if(per>=60){
        document.querySelector(".gra").innerHTML ="Grade:" + "B"
    } else if (per>=50){
document.querySelector(".gra").innerHTML = "Grade:" +"C+"
    } else if (per>=40){
        document.querySelector(".gra").innerHTML ="Grade:" + "c"
    }else if (per>=30){
        document
        .querySelector(".gra").innerHTML = "Grade:" + "D"
    } else {
        document.querySelector(".gra").innerHTML = "Sorry You Are Fail"
    }
    document.querySelector(".to").innerHTML = "Total Marks are :" + " " + to;
    document.querySelector(".per").innerHTML = per
    if(per>=30){
        document.querySelector(".result h2").innerHTML = "You Pass"
    }else{
    document.querySelector(".result h2").innerHTML = "You Fail"

}
} 