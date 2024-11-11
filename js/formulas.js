function calcularFuerzas(peso, ff1, angulo, fuerza = 0){
    let resultados = {n: 0, f1: 0, f: 0, angulo: 0, peso: 0};

    let normal = (peso*9.81)/(2*sen(angulo));
    let fFriccion1 = ff1*normal;

    resultados.f1 = fFriccion1;
    resultados.f = fuerza;
    resultados.n = normal;
    resultados.angulo = angulo;
    resultados.peso = peso;
    
    return resultados;
}

function gradosRadianes(grados){
    return (grados * (Math.PI / 180));
}

function radianesGrados(radianes){
    return (radianes * (180 / Math.PI));
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

function arctan(cf){
    return radianesGrados(Math.atan(cf));
}