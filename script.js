// 1. Calculadora Interativa da Regra de Cobrança (C = 60x + 40)

// Problema Direto: calcula o valor a pagar com base nos dias (x)
function calcularCusto() {
    const diasInput = document.getElementById('dias').value;
    const resultadoElement = document.getElementById('resultado-custo');
    
    if (diasInput === '' || diasInput < 0) {
        resultadoElement.innerText = "Digite um número de dias válido!";
        return;
    }
    
    const x = parseFloat(diasInput);
    const custo = 60 * x + 40;
    resultadoElement.innerText = `Custo Total: R$ ${custo.toFixed(2)}`;
}

// Problema Inverso: calcula os dias com base no valor pago (C)
function calcularDias() {
    const custoInput = document.getElementById('custo').value;
    const resultadoElement = document.getElementById('resultado-dias');
    
    if (custoInput === '' || custoInput < 40) {
        resultadoElement.innerText = "O valor mínimo é R$ 40,00 (taxa fixa).";
        return;
    }
    
    const C = parseFloat(custoInput);
    const dias = (C - 40) / 60;
    resultadoElement.innerText = `Dias de aluguel: ${dias.toFixed(1)} dias`;
}

// 2. Sistema de Stickers Arrastáveis (Arraste os carros pela tela)
document.addEventListener('DOMContentLoaded', () => {
    const stickers = document.querySelectorAll('.floating-sticker, .sticker, .mini-car');
    
    stickers.forEach(sticker => {
        sticker.style.cursor = 'grab';
        
        sticker.addEventListener('mousedown', (e) => {
            sticker.style.cursor = 'grabbing';
            let shiftX = e.clientX - sticker.getBoundingClientRect().left;
            let shiftY = e.clientY - sticker.getBoundingClientRect().top;

            sticker.style.position = 'absolute';
            sticker.style.zIndex = 1000;

            function moveAt(pageX, pageY) {
                sticker.style.left = pageX - shiftX + 'px';
                sticker.style.top = pageY - shiftY + 'px';
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            document.addEventListener('mousemove', onMouseMove);

            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', onMouseMove);
                sticker.style.cursor = 'grab';
            }, { once: true });
        });

        sticker.ondragstart = () => false;
    });
});
