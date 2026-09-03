# 🚗✨ Projeto Locadora de Veículos - Estilo Y2K Flash Game 🏎️💖

> **Um site interativo inspirado na era de ouro dos jogos em Flash dos anos 2000, desenvolvido para apresentar o projeto escolar/acadêmico de modelagem matemática e gestão de uma Locadora de Veículos!**

---

## 📸 Sobre o Projeto

Este projeto une **Matemática Aplicada (Função Afim)** e **Desenvolvimento Web Nostálgico**. A proposta visual foi inspirada nos clássicos jogos em Flash dos anos 2000, contando com:
- Background marcante em **glitter rosa choque** ✨
- Bordas neon estilo cyber/Y2K 🌈
- **Stickers interativos** de carros arrastáveis pela tela 🚗💨
- Calculadora matemática integrada para resolver os problemas de cobrança em tempo real!

---

## 📌 As 7 Etapas do Projeto

O site organiza e apresenta detalhadamente todas as diretrizes exigidas no trabalho original:

1. **🏷️ Nome da Locadora:** Escolha de um nome criativo e marcante para a marca.
2. **🎯 Público-Alvo:** Definição do perfil dos clientes principais.
3. **🚘 Tipo de Veículos:** Categorias de veículos disponíveis na frota (econômicos, SUVs, utilitários, etc.).
4. **📱 4 Serviços do Aplicativo:**
   - 📅 **Reserva Online:** Agendamento rápido e sem filas.
   - 🛡️ **Seguro Faça Fácil:** Proteção simplificada contra imprevistos.
   - 📍 **Rastreamento do Veículo:** Monitoramento em tempo real via GPS.
   - 💬 **Atendimento 24h:** Suporte ao cliente a qualquer hora do dia.
5. **🧮 Regra de Cobrança:** Definida pela Função Linear (Afim):
   $$C = 60x + 40$$
   - **x**: quantidade de dias alugados.
   - **60**: valor da diária (R$).
   - **40**: taxa fixa de serviço/abertura de contrato (R$).
6. **📈 Gráfico da Função:** Representação gráfica da relação diária vs. custo em papel quadriculado/digital.
7. **❓ Dois Problemas (Calculadora Interativa):**
   - **Problema Direto:** Dado o número de dias ($x$), calcula o valor total a ser pago ($C$).
     - *Exemplo:* $x = 3 \text{ dias} \Rightarrow C = 60(3) + 40 = \text{R\$ } 220,00$.
   - **Problema Inverso:** Dado o valor pago ($C$), calcula a quantidade de dias ($x$).
     - *Exemplo:* $C = \text{R\$ } 220,00 \Rightarrow 220 = 60x + 40 \Rightarrow x = 3 \text{ dias}$.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica e acessível.
- **CSS3:** Estilização retro Y2K, efeitos de luz neon, layouts flexíveis/grid e fundos decorativos.
- **JavaScript (ES6+):** 
  - Cálculo dinâmico dos problemas direto e inverso da função afim.
  - Sistema de **Drag & Drop** (arrastar e soltar) para os stickers de veículos.
- **GitHub Pages:** Hospedagem gratuita e publicação rápida do site na web.

---

## 📂 Estrutura de Arquivos

```text
.
├── index.html       # Estrutura principal da página
├── style.css        # Estilos, efeito neon, glitter e layout
├── script.js        # Lógica da calculadora e movimentação dos stickers
└── README.md        # Documentação do repositório
