const entradaTexto = document.getElementById('entrada_texto');
const campoTextoEImagem = document.getElementById('campo_texto_e_imagem');

function criptografar() {
    let texto = entradaTexto.value;
    let textoCriptografado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    campoTextoEImagem.innerHTML = '<textarea readonly id="saida_texto">' + textoCriptografado + '</textarea>' +
        '<button onclick="copiar()" class="container_botao_copiar" id="botao_copiar">Copiar</button>';
    document.getElementById('descriptografar').disabled = false;
}

function descriptografar() {
    let texto = entradaTexto.value;
    let textoDescriptografado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    campoTextoEImagem.innerHTML = '<textarea readonly id="saida_texto">' + textoDescriptografado + '</textarea>' + '<button onclick="copiar()" class="container_botao_copiar" id="botao_copiar">Copiar</button>';
}

function copiar() {
    let textoCopiado = document.getElementById('saida_texto');
    textoCopiado.select();

    try {
        document.execCommand('copy');
        let botaoCopiar = document.getElementById('botao_copiar');
        botaoCopiar.textContent = 'Copiado';

        setTimeout(() => {
            botaoCopiar.textContent = 'Copiar';
        }, 2000);
    } catch (err) {
        console.error('Erro ao copiar texto: ', err);
    }
}
