function inserir(){
        localStorage.proj = document.getElementById("projeto").value
        localStorage.emailP = document.getElementById("emailPro").value
        localStorage.emailI = document.getElementById("emailInv").value
        localStorage.desc = document.getElementById("descricao").value

        window.location.href = './index-projetista.html'
  }

  function buscar(){
    if(localStorage.proj == document.getElementById("projeto").value){
        document.getElementById("emailPro").value = localStorage.emailP
        document.getElementById("emailInv").value = localStorage.emailI
        document.getElementById("descricao").value = localStorage.desc
    }else{
        alert('Insira o nome do projeto corretamente')
    }
  }