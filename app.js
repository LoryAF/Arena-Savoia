<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Inter:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="img/aaa.png" type="image/x-icon">
    <title>Arena Savóia</title>
</head>

<body>
    <div class="container">
        <div class="container__conteudo">
            <div class="container__informacoes">
                <div class="container__texto">
                    <h1>Sorteador<span class="container__texto-azul"> do Torneio</span></h1>

                    <div class="container__campo">
                        <label class="texto__paragrafo">Quantidade de duplas</label>
                        <input class="container__input" id="quantidade" type="number" min="1">
                    </div>

                    <div class="container__campo">
                        <label class="texto__paragrafo">Quantos Biônicos</label>
                        <input class="container__input" id="bionicos" type="number" min="0">
                    </div>
                    
                    <div class="container__campo">
                        <label class="texto__paragrafo">Do número</label>
                        <input class="container__input" id="de" type="number" min="1">
                    </div>
                    
                    <div class="container__campo">
                        <label class="texto__paragrafo">Até o número</label>
                        <input class="container__input" id="ate" type="number" min="1">
                    </div>
                </div>
                
                <div class="chute container__botoes">
                    <button onclick="sortear()" id="btn-sortear" class="container__botao">Sortear</button>
                    <button onclick="reiniciar()" id="btn-reiniciar" class="container__botao-desabilitado" >Reiniciar</button>
                </div>

                <div class="container__texto" id="resultado">
                    <label class="texto__paragrafo">Duplas sorteadas:  nenhum até agora</label>
                </div>
            </div>

            <img src="./img/aaa.png" alt="Uma pessoa com capacete de astronauta" class="container__imagem-pessoa" />
        </div>
    </div>

    <script src="app.js" defer></script>
</body>

</html>
