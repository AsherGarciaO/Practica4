function getValue(id){
    return parseFloat(document.getElementById(id).value);
}

function agregarEventos(...ids){
    ids.forEach(item =>{
        if(item !== "calcular"){
            document.getElementById(item).addEventListener('change', ()=>{
                iniciar();
            });
        }
        else{
            document.getElementById(item).addEventListener('click', ()=>{
                iniciar();
            });
        }
    });
};

function simular(resultados){
    let plano = document.getElementById("plano");
    let objeto = document.getElementById("objeto");
    let flecha = document.getElementById("flecha");
    let fNeta1 = resultados.f - resultados.peso*sen(resultados.angulo) - resultados.f1;
    let fNeta2 = resultados.f - resultados.peso*sen(resultados.angulo) - resultados.f2;
    let fNeta3 = resultados.f - resultados.peso*sen(resultados.angulo) - resultados.f3;
    let resultado = {r1: fNeta1 > 0, r2: fNeta2 > 0, r3: fNeta3 > 0, f1: fNeta1, f2: fNeta2, f3: fNeta3};

    plano.style.transform = `rotate(${-resultados.angulo}deg)`;
    console.log(fNeta1);
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
    document.getElementById("rCF1").textContent = `Coeficiente de Fricción 1: ${(results.r1)?"Sí":"No"}. Fuerza Neta (Reflejada): ${(results.f1>=0)?results.f1+" N":"No válido"}`;
    document.getElementById("rCF2").textContent = `Coeficiente de Fricción 2: ${(results.r2)?"Sí":"No"}. Fuerza Neta (Reflejada): ${(results.f2>=0)?results.f2+" N":"No válido"}`;
    document.getElementById("rCF3").textContent = `Coeficiente de Fricción 3: ${(results.r3)?"Sí":"No"}. Fuerza Neta (Reflejada): ${(results.f3>=0)?results.f3+" N":"No válido"}`;
}

function iniciar(){
    actualizarResultados(simular(calcularFuerzas(getValue("peso"), getValue("cFriccion1"), getValue("cFriccion2"), getValue("cFriccion3"), getValue("angulo"), getValue("fuerza"))));
}