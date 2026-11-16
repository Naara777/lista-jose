# Questão 03 – Controle de Estoque

Lista de Exercício 01 – React Native · Desenvolvimento para Dispositivos Móveis (UFRA)

## Descrição
Controla a quantidade disponível de um produto, com entradas e saídas.

## Como usar
Informe o produto e a quantidade inicial, toque em **Definir estoque inicial** e use **Adicionar estoque** / **Retirar estoque**. Retiradas maiores que o disponível são bloqueadas e aparece um alerta quando restam menos de 5 unidades.

**Exemplo:** 20 unidades − 7 unidades → 13 unidades

## Tecnologias
React Native com Expo (componentes `View`, `Text`, `TextInput`, `StyleSheet` e o hook `useState`).

## Como executar
```bash
npm install
npx expo start
```
Escaneie o QR Code com o app **Expo Go** no celular (Android ou iOS).  
Também é possível colar o conteúdo de `App.js` em https://snack.expo.dev para testar no navegador.

## Capturas de tela
<!-- Adicione as imagens em uma pasta screenshots/ e descomente as linhas abaixo -->
<!-- ![Tela inicial](screenshots/tela1.png) -->
<!-- ![Resultado](screenshots/tela2.png) -->
