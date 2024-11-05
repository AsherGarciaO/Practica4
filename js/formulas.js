

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