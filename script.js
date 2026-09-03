// 1. Cálculo dos Problemas da Regra de Cobrança C(x) = 60x + 40

// Problema Direto: Dado o número de dias (x), calcula o custo (C)
function resolverDireto() {
    const diasInput = document.getElementById('dias-input').value;
    const resElement = document.getElementById('res-direto');
    
    if (diasInput === '' || diasInput <= 0) {
        resElement.innerText = "Por favor, insira um número válido de dias!";
        return;
    }
    
    const x = parseFloat(diasInput);
    const C = 60 * x + 40;
    resElement.innerText = `Custo Total: R$ ${C.toFixed(2).replace('.', ',')}`;
}

// Problema Inverso: Dado o custo (C), calcula a quantidade de dias (x)
function resolverInverso() {
    const custoInput = document.getElementById('custo-input').value;
    const resElement = document.getElementById('res-inverso');
    
    if (custoInput === '' || custoInput < 40) {
        resElement.innerText = "O valor mínimo é R$ 40,00 (taxa fixa)!";
        return;
    }
    
    const C = parseFloat(custoInput);
    const x = (C - 40) / 60;
    resElement.innerText = `Tempo de Aluguel: ${x.toFixed(1)} dias`;
}

// 2. Sistema de Drag & Drop para os Stickers Arrastáveis
document.addEventListener('DOMContentLoaded', () => {
    const stickers = document.querySelectorAll('.draggable-sticker');
    
    stickers.forEach(sticker => {
        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;

        function startDrag(e) {
            isDragging = true;
            sticker.style.cursor = 'grabbing';
            
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            
            const rect = sticker.getBoundingClientRect();
            offsetX = clientX - rect.left;
            offsetY = clientY - rect.top;
        }

        function moveDrag(e) {
            if (!isDragging) return;
            
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            
            sticker.style.left = `${clientX - offsetX}px`;
            sticker.style.top = `${clientY - offsetY}px`;
        }

        function stopDrag() {
            isDragging = false;
            sticker.style.cursor = 'grab';
        }

        // Eventos de Mouse
        sticker.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', moveDrag);
        document.addEventListener('mouseup', stopDrag);

        // Eventos de Toque (Mobile/Touchscreen)
        sticker.addEventListener('touchstart', startDrag);
        document.addEventListener('touchmove', moveDrag);
        document.addEventListener('touchend', stopDrag);
    });
});
