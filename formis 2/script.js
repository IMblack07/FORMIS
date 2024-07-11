function botaoLog(){
    let NomeLog = document.getElementById('nome_login').value
    let senhaLog =  document.getElementById('senha_login').value
    let manterlogado = document.getElementById('manterlogado') 

   
    if(manterlogado.checked){
        alert('Seu nome é: '+ NomeLog + '\n' + 'sua senha é: ' + senhaLog )
        window.location.href='telaInicial.html'
        }
    else{
        alert('você não vai ficar logado.')
    }
}


function botaoCad(){
    let nome_cad = document.getElementById('nome_cad').value
    let email_cad = document.getElementById('email_cad').value
    let senha_cad = document.getElementById('senha_cad').value
    let estado_civil = document.querySelector("input[name='estado_civil']:checked").value
    let aceitarTermos = document.getElementById('aceitarTermos') 

   
    if(aceitarTermos.checked){
        alert('Seu nome é: ' + nome_cad + '\n' + 'seu email é: ' + email_cad + '\n' + 'Modo de contato: ' + estado_civil)
        window.location.href='telaInicial.html'
        }
    else{
        alert('você não aceitou os termos.')
    } 
}

function botaoVolt(){

    window.location.href='cadastro.html'
}