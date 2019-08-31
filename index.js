module.exports = {
    ok,
    info,
    error,
    aviso
};

function ok(mensaje) {
    const estilos = 'color: white; background-color: green, display: block';
    mostrarLog(mensaje, estilos);
}

function info(mensaje) {
    const estilos = 'color: white; background-color: blue, display: block';
    mostrarLog(mensaje, estilos);
}

function error(mensaje) {
    const estilos = 'color: white; background-color: red, display: block';
    mostrarLog(mensaje, estilos);
}

function aviso(mensaje) {
    const estilos = 'color: white; background-color: orange, display: block';
    mostrarLog(mensaje, estilos);
}

function mostrarLog(mensaje, estilos) {
    console.log('%c%s', estilos, mensaje);
}