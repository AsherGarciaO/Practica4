let primero = "Hule", segundo = "Hule", tipo = "estatica", cf = 1.5;

function getValue(id){
    return parseFloat(document.getElementById(id).value);
}

function agregarEventos(...ids){
    let tags1 = document.getElementById("1").getElementsByClassName("option");
    let tags2 = document.getElementById("2").getElementsByClassName("option");

    ids.forEach(item =>{
        document.getElementById(item).addEventListener('change', ()=>{
            iniciar();
        });
    });

    document.getElementById("est").addEventListener('click', ()=>{
        tipo = "estatica";
        document.getElementById("msjTipo").textContent = "Tipo de Coeficiente de Fricción: Estática";
        establecerCoeficiente();
    });

    document.getElementById("din").addEventListener('click', ()=>{
        tipo = "dinamica";
        document.getElementById("msjTipo").textContent = "Tipo de Coeficiente de Fricción: Dinámica";
        establecerCoeficiente();
    });
    
    for(let i = 0; i < tags1.length; i++){
        tags1[i].addEventListener('click', ()=>{
            document.getElementById("msj1").textContent = `Material del Plano: ${tags1[i].textContent}`;
            primero = tags1[i].textContent;
            establecerCoeficiente();
            iniciar();
        });
    }

    for(let i = 0; i < tags2.length; i++){
        tags2[i].addEventListener('click', ()=>{
            document.getElementById("msj2").textContent = `Material del Objeto: ${tags2[i].textContent}`;
            segundo = tags2[i].textContent;
            establecerCoeficiente();
            iniciar();
        });
    }

};

function simular(resultados){
    let plano = document.getElementById("plano");
    let objeto = document.getElementById("objeto");
    let flecha = document.getElementById("flecha");
    let fNeta1 = resultados.f - resultados.peso*sen(resultados.angulo) - resultados.f1;
    let resultado = {r1: fNeta1 > 0, f1: fNeta1, angulo: resultados.angulo, MC: resultados.angulo >= arctan(cf)};

    plano.style.transform = `rotate(${-resultados.angulo}deg)`;
    
    if (fNeta1 > 0) {
        objeto.style.left = "100px";
    } 
    else {
        objeto.style.left = "50px";
    }

    if (fNeta1 > 0) {
        flecha.style.width = `${Math.min(100, Math.max(20, resultados.f))}px`;
        flecha.style.transform = `rotate(${-resultados.angulo/30}deg)`;
    } 
    else {
        flecha.style.width = "0px";
    }

    return resultado;
}

function actualizarResultados(results){
    document.getElementById("rCF1").textContent = `${(results.MC)?"El ángulo es crítico" : "El ángulo NO es crítico"}`;
    if(!results.MC){
        document.getElementById("rCF1").style.color = "#ff0000";
    }
    else{
        document.getElementById("rCF1").style.color = "#ff00ff";
    }
}

function iniciar(){
    actualizarResultados(simular(calcularFuerzas(getValue("peso"), cf, getValue("angulo"), getValue("fuerza"))));
}

function establecerCoeficiente() {
    if ((primero === "Hule" && segundo === "Hule") || (primero === "Hule" && segundo === "Hule")) {
        cf = (tipo === "estatica") ? 1.5 : 1.0;
    }
    else if ((primero === "Hule" && segundo === "Concreto") || (primero === "Concreto" && segundo === "Hule")) {
        cf = (tipo === "estatica") ? 1.0 : 0.8;
    }
    else if ((primero === "Hule" && segundo === "Acero") || (primero === "Acero" && segundo === "Hule")) {
        cf = (tipo === "estatica") ? 0.6 : 0.5;
    }
    else if ((primero === "Hule" && segundo === "Vidrio") || (primero === "Vidrio" && segundo === "Hule")) {
        cf = (tipo === "estatica") ? 1.0 : 0.7;
    }
    else if ((primero === "Hule" && segundo === "Cobre") || (primero === "Cobre" && segundo === "Hule")) {
        cf = (tipo === "estatica") ? 0.7 : 0.5;
    }
    else if ((primero === "Hule" && segundo === "Madera") || (primero === "Madera" && segundo === "Hule")) {
        cf = (tipo === "estatica") ? 0.9 : 0.7;
    }
    else if ((primero === "Concreto" && segundo === "Concreto")) {
        cf = (tipo === "estatica") ? 1.0 : 0.7;
    }
    else if ((primero === "Concreto" && segundo === "Acero") || (primero === "Acero" && segundo === "Concreto")) {
        cf = (tipo === "estatica") ? 0.6 : 0.5;
    }
    else if ((primero === "Concreto" && segundo === "Vidrio") || (primero === "Vidrio" && segundo === "Concreto")) {
        cf = (tipo === "estatica") ? 0.7 : 0.5;
    }
    else if ((primero === "Concreto" && segundo === "Cobre") || (primero === "Cobre" && segundo === "Concreto")) {
        cf = (tipo === "estatica") ? 0.4 : 0.3;
    }
    else if ((primero === "Concreto" && segundo === "Madera") || (primero === "Madera" && segundo === "Concreto")) {
        cf = (tipo === "estatica") ? 0.6 : 0.4;
    }
    else if ((primero === "Acero" && segundo === "Acero")) {
        cf = (tipo === "estatica") ? 0.74 : 0.57;
    }
    else if ((primero === "Acero" && segundo === "Vidrio") || (primero === "Vidrio" && segundo === "Acero")) {
        cf = (tipo === "estatica") ? 0.5 : 0.4;
    }
    else if ((primero === "Acero" && segundo === "Cobre") || (primero === "Cobre" && segundo === "Acero")) {
        cf = (tipo === "estatica") ? 0.5 : 0.4;
    }
    else if ((primero === "Acero" && segundo === "Madera") || (primero === "Madera" && segundo === "Acero")) {
        cf = (tipo === "estatica") ? 0.5 : 0.4;
    }
    else if ((primero === "Vidrio" && segundo === "Vidrio")) {
        cf = (tipo === "estatica") ? 0.9 : 0.4;
    }
    else if ((primero === "Vidrio" && segundo === "Cobre") || (primero === "Cobre" && segundo === "Vidrio")) {
        cf = (tipo === "estatica") ? 0.5 : 0.3;
    }
    else if ((primero === "Vidrio" && segundo === "Madera") || (primero === "Madera" && segundo === "Vidrio")) {
        cf = (tipo === "estatica") ? 0.4 : 0.3;
    }
    else if ((primero === "Cobre" && segundo === "Cobre")) {
        cf = (tipo === "estatica") ? 0.5 : 0.4;
    }
    else if ((primero === "Cobre" && segundo === "Madera") || (primero === "Madera" && segundo === "Cobre")) {
        cf = (tipo === "estatica") ? 0.3 : 0.2;
    }
    else if ((primero === "Madera" && segundo === "Madera")) {
        cf = (tipo === "estatica") ? 0.5 : 0.3;
    }
    
    document.getElementById("msjCF").textContent = "Coeficiente de Fricción: "+cf;
    document.getElementById("mina").textContent = "Ángulo Crítico Mínimo: "+arctan(cf)+"°";
}