function calcularFuerzas(peso, ff1, ff2, ff3, angulo, fuerza){
    let resultados = {n: 0, f1: 0, f2:0, f3:0, f: 0, angulo: 0, peso: 0};

    let normal = (peso*9.81)/(2*sen(angulo));
    let fFriccion1 = ff1*normal;
    let fFriccion2 = ff2*normal;
    let fFriccion3 = ff3*normal;

    resultados.f1 = fFriccion1;
    resultados.f2 = fFriccion2;
    resultados.f3 = fFriccion3;
    resultados.f = fuerza;
    resultados.n = normal;
    resultados.angulo = angulo;
    resultados.peso = peso;
    
    return resultados;
}

function gradosRadianes(grados){
    return (grados * (Math.PI / 180));
}

function potencia(base, potencia){
    return Math.pow(base, potencia);
}

function sen(grados){
    return Math.sin(gradosRadianes(grados));
}

function cos(grados){
    return Math.cos(gradosRadianes(grados));
}

function tan(grados){
    return Math.tan(gradosRadianes(grados));
}