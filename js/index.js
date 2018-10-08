//Event listeners para chamarem as funções assim que os elementos são clicados
document.getElementById("a1").addEventListener("click", a1, true);
document.getElementById("a2").addEventListener("click", a2, true);
document.getElementById("a3").addEventListener("click", a3, true);
document.getElementById("b1").addEventListener("click", b1, true);
document.getElementById("b2").addEventListener("click", b2, true);
document.getElementById("b3").addEventListener("click", b3, true);
document.getElementById("c1").addEventListener("click", c1, true);
document.getElementById("c2").addEventListener("click", c2, true);
document.getElementById("c3").addEventListener("click", c3, true);

//getter e setter para o turno 0 para x e turno 1 para O
var turno = {
    atual: 0,
    get: function() {
        return this.atual;
    },
    set: function(val) {
        this.atual = val;
    }
}

//arrays com as coordenadas para jogo ganho
/* 123
456
789 */
var jogo = [
    [
        1, 2, 3
    ],
    [
        4, 5, 6
    ],
    [
        7, 8, 9
    ],
    [
        1, 4, 7
    ],
    [
        2, 5, 8
    ],
    [
        3, 6, 9
    ],
    [
        1, 5, 9
    ],
    [
        3, 5, 7
    ]
];

//checa se algum jogador ganhou ou empatou
function checar(jogador) {
    var cont = 0;
    // varre a matriz com os possíveis jogos ganhos
    for (var j = 0; j < jogo.length; j++) {

        for (var w = 0; w < jogo[j].length; w++) {

            for (var i = 0; i < jogador.length; i++) {

                if (jogo[j][w] === jogador[i]) {
                    cont++;
                    //se o vetor do jogador tiver 3 acertos o jogador ganhou
                    if (cont === 3 && turno.get() === 1) {
                        //alerta o jogador, reseta o jogo e os vetores de posições
                        alert("X Ganhou!!!");
                        resetar();

                    } else if (cont === 3 && turno.get() === 0) {
                        alert("O Ganhou!!!");
                        resetar();

                    }
                }
            }

        }
        cont = 0;
    }
    //checa se todas as posições estão preenchidas sem ganhador
    if (x.length + o.length === 9) {
        alert("Deu Velha!!!");
        resetar();

    }

}

//arrays com as coordenadas conquistadas
var x = [];
var o = [];

//reseta as peças nos quadrantes
function resetar() {
    document.getElementById("a1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    x=[];
    o=[];
    turno.set(0);

}

function a1() {

    //checa se o quadrante já foi populado
    if (document.getElementById("a1").innerHTML=== "") {
        //checa se o turno é do X
        if (turno.get() === 0) {
            //adiciona o elemento x ao quadrante
            document.getElementById("a1").innerHTML = ' <img src="../img/x.png" alt=""> ';
            //modifica o turno para o próximo
            turno.set(1);
            //acrescenta a posição conquistada no vetor
            x.push(1);
            //chama a função de checar se ganhou o jogo
            checar(x);

        } else if (turno.get() === 1) {
            document.getElementById("a1").innerHTML = '<img src="../img/o.png" alt="">';
            turno.set(0);
            o.push(1);
            checar(o);
        }

    }

}
function a2() {

    if (document.getElementById("a2").innerHTML === "") {

        if (turno.get() === 0) {
            document.getElementById("a2").innerHTML = ' <img src="../img/x.png" alt=""> ';
            turno.set(1);
            x.push(2);
            checar(x);
        } else if (turno.get() === 1) {
            document.getElementById("a2").innerHTML = '<img src="../img/o.png" alt="">';
            turno.set(0);
            o.push(2);
            checar(o);
        }
    }
}

function a3() {

    if (document.getElementById("a3").innerHTML=== "") {

        if (turno.get() === 0) {
            document.getElementById("a3").innerHTML = ' <img src="../img/x.png" alt=""> ';
            turno.set(1);
            x.push(3);
            checar(x);
        } else if (turno.get() === 1) {
            document.getElementById("a3").innerHTML = '<img src="../img/o.png" alt="">';
            turno.set(0);
            o.push(3);
            checar(o);
        }
    }
}
function b1() {
    if (document.getElementById("b1").innerHTML=== "") {
        if (turno.get() === 0) {
            document.getElementById("b1").innerHTML = ' <img src="../img/x.png" alt=""> ';
            turno.set(1);
            x.push(4);
            checar(x);
        } else if (turno.get() === 1) {
            document.getElementById("b1").innerHTML = '<img src="../img/o.png" alt="">';
            turno.set(0);
            o.push(4);
            checar(o);
        }
    }

}
function b2() {
    if (document.getElementById("b2").innerHTML=== "") {
        if (turno.get() === 0) {
            document.getElementById("b2").innerHTML = ' <img src="../img/x.png" alt=""> ';
            turno.set(1);
            x.push(5);
        } else if (turno.get() === 1) {
            checar(x);
            document.getElementById("b2").innerHTML = '<img src="../img/o.png" alt="">';
            turno.set(0);
            o.push(5);
            checar(o);
        }
    }

}
function b3() {
    if (document.getElementById("b3").innerHTML=== "") {
        if (turno.get() === 0) {
            document.getElementById("b3").innerHTML = ' <img src="../img/x.png" alt=""> ';
            turno.set(1);
            x.push(6);
            checar(x);
        } else if (turno.get() === 1) {
            document.getElementById("b3").innerHTML = '<img src="../img/o.png" alt="">';
            turno.set(0);
            o.push(6);
            checar(o);
        }
    }
}

function c1() {
    if (document.getElementById("c1").innerHTML=== "") {
        if (turno.get() === 0) {
            document.getElementById("c1").innerHTML = ' <img src="../img/x.png" alt=""> ';
            turno.set(1);
            x.push(7);
            checar(x);
        } else if (turno.get() === 1) {
            document.getElementById("c1").innerHTML = '<img src="../img/o.png" alt="">';
            turno.set(0);
            o.push(7);
            checar(o);
        }
    }
}
function c2() {
    if (document.getElementById("c2").innerHTML=== "") {
        if (turno.get() === 0) {
            document.getElementById("c2").innerHTML = ' <img src="../img/x.png" alt=""> ';
            turno.set(1);
            x.push(8);
            checar(x);
        } else if (turno.get() === 1) {
            document.getElementById("c2").innerHTML = '<img src="../img/o.png" alt="">';
            turno.set(0);
            o.push(8);
            checar(o);
        }
    }

}
function c3() {
    if (document.getElementById("c3").innerHTML=== "") {
        if (turno.get() === 0) {
            document.getElementById("c3").innerHTML = ' <img src="../img/x.png" alt=""> ';
            turno.set(1);
            x.push(9);
            checar(x);
        } else if (turno.get() === 1) {
            document.getElementById("c3").innerHTML = '<img src="../img/o.png" alt="">';
            turno.set(0);
            o.push(9);
            checar(o);
        }
    }
}
