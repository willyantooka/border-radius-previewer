# Border-Radius-Previewer

Ferramenta para visualizar e gerar CSS de `border-radius`, feita com HTML, CSS e JavaScript puro.

🔗 **[Ver online](https://willyantooka.github.io/border-radius-previewer/)**

## O que faz

- Mostra uma caixa com `border-radius` aplicado
- Permite alterar os 4 cantos (superior esquerdo, superior direito, inferior direito e inferior esquerdo)
- Atualiza a forma em tempo real enquanto o usuário digita
- Exibe o CSS resultante na tela
- Copia o CSS para a área de transferência com um clique

## Recurso bônus

Permite alterar os **8 valores** do `border-radius`: o raio horizontal e o raio vertical de cada canto. Com valores diferentes no mesmo canto, a curva vira uma elipse, o que permite criar formas mais complexas. O CSS gerado usa a sintaxe com barra:

```css
border-radius: 0px 0px 100px 0px / 0px 0px 20px 0px;
```

## Tecnologias

- HTML
- CSS
- JavaScript (sem bibliotecas)

## O que pratiquei neste projeto

- Ler valores de campos com `getElementById` e `.value`
- Reagir a mudanças com o evento `oninput`
- Alterar estilos com `element.style.borderRadius`
- Montar strings de CSS com os valores digitados
- Copiar texto com `navigator.clipboard.writeText`
- Separar o projeto em `index.html`, `style.css` e `script.js`

## Como rodar

1. Baixe ou clone o repositório
2. Abra o arquivo `index.html` no navegador

## Autor

Feito por Willyan como parte do meu aprendizado em desenvolvimento web.
