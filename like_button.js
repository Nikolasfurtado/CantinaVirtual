function puxa() {

    {
        dayName = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
        monName = new Array("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro");
        now = new Date;
    }

    var today = document.getElementById("today");
    today.innerHTML = dayName[now.getDay()];

    var tomorrow = document.getElementById("tomorrow");
    tomorrow.innerHTML = dayName[now.getDay() + 1];



    //("Hoje é " + now.getDay() + ", " + now.getDate() + " de " + now.getMonth() + " de " + now.getFullYear());


    ////html para ajustar
    //test.innerHTML = ("<h1> Hoje é " + dayName[now.getDay()] + ", " + now.getDate() + " de " + monName[now.getMonth()] + " de " + now.getFullYear() + ". </h1>");

}