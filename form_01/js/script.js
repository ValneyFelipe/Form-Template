// Selecionando o elemento <body> do HTML e atribuindo à variável "corpo"
let corpo = document.querySelector('body')

// Adicionando o conteúdo retornado pela função divMain() ao elemento <body>
corpo.appendChild(divMain())

// Definindo a função "divMain()"
function divMain(){
    // Criando o elemento <main>
    const main = document.createElement('main')

    // Criando o elemento <div> com o ID "form-container"
    const formContainer = document.createElement('div')
    formContainer.id = 'form-container'


    // Adicionando o conteúdo retornado pela função "form()" ao elemento <div>
    formContainer.appendChild(form())

    // Adicionando o elemento <div> ao elemento <main>
    main.appendChild(formContainer)

    // Retornando o elemento <main>
    return main;
}

function form(){
    // Criando o elemento <form>
    const formulario = document.createElement('form')

    // Obtendo o conteúdo retornado pelas funções FirstGroupContent() e SecondGroupContent()
    let firstContent = FirstGroupContent()
    let secondContent = SecondGroupContent()

    // Adicionando o conteúdo retornado pelas funções ao elemento <form>
    formulario.appendChild(firstContent)
    formulario.appendChild(secondContent)

    // Retornando o elemento <form>
    return formulario;
}

// Função que cria o conteúdo do primeiro grupo de formulário
function FirstGroupContent(){
    // Criação do título
    let title1 = document.createElement('span')
    title1.classList.add('title')
    let title_Text = document.createTextNode('Send us a message')
    title1.appendChild(title_Text)


    // Criação da div container do primeiro grupo
    let divFirstGroupContainer = document.createElement('div')
    divFirstGroupContainer.classList.add('group-1')

    ///////////////////////////////////////////////////////////////////
    
    // Criação da div para o campo de nome
    let divName = document.createElement('div')
    divName.classList.add('box-name')

    let labelName = document.createElement('label')
    labelName.htmlFor = 'name'
    labelName.innerText = 'Name'

    let inputName = document.createElement('input')
    inputName.type = 'text'
    inputName.name = 'name'
    inputName.id = 'name'
    inputName.className = 'name'

    divName.appendChild(labelName)
    divName.appendChild(inputName)

    ///////////////////////////////////////////////////////////////////

    // Criação da div para o campo de e-mail
    let divEmail = document.createElement('div')
    divEmail.classList.add('box-email')
    
    let labelEmail = document.createElement('label')
    labelEmail.htmlFor = 'email'
    labelEmail.innerText = 'email'


    let inputEmail = document.createElement('input')
    inputEmail.type = 'text'
    inputEmail.name = 'email'
    inputEmail.id = 'email'
    inputEmail.className = 'email'

    divEmail.appendChild(labelEmail)
    divEmail.appendChild(inputEmail)


    //////////////////////////////////////////////////////////////////


    // Criação da div para o campo de assunto
    let divSubject = document.createElement('div')
    divSubject.classList.add('box-subject')
    
    let labelSubject = document.createElement('label')
    labelSubject.htmlFor = 'subject'
    labelSubject.innerText = 'subject'

    let inputSubject = document.createElement('input')
    inputSubject.type = 'text'
    inputSubject.name = 'subject'
    inputSubject.id = 'subject'
    inputSubject.className = 'subject'
    

    divSubject.appendChild(labelSubject)
    divSubject.appendChild(inputSubject)

    //////////////////////////////////////////////////////////////////


    //TextArea
    // Criação da div para o campo de mensagem
    let divTextArea = document.createElement('div')
    divTextArea.id = 'box-textarea'

    let labelMsg = document.createElement('label')
    labelMsg.htmlFor = 'msg'
    labelMsg.innerText = 'Message'

    let textArea = document.createElement('textarea')
    textArea.name = 'msg'
    textArea.id = 'msg'
    textArea.classList.add('textarea')
    textArea.classList.add('message')

    divTextArea.appendChild(labelMsg)
    divTextArea.appendChild(textArea)

    // Criação do button para o formulario
   let button = document.createElement('button')
   button.type = 'submit'
   button.classList.add('btn')
   button.innerText = 'send message'


   // Adicionando todos os elementos na div container do primeiro grupo 
   divFirstGroupContainer.appendChild(title1)
   divFirstGroupContainer.appendChild(divName)
   divFirstGroupContainer.appendChild(divEmail)
   divFirstGroupContainer.appendChild(divSubject)
   divFirstGroupContainer.appendChild(divTextArea)
   divFirstGroupContainer.appendChild(button)


   // Retornando a div container do primeiro grupo
   return divFirstGroupContainer;
}

function SecondGroupContent(){
    let divSecondGroupContainer = document.createElement('div')
    divSecondGroupContainer.classList.add('group-2')

    let h3 = document.createElement('h3')
    h3.innerText = 'Contact Us'

    let h4 = document.createElement('h4')
    h4.innerText = `we're open for anny suggestion or just to have a chat`

    /////////////////////////////////////////////////////////////////////////////


    let divAdress = document.createElement('div')
    divAdress.classList.add('adress-content')

    let imgAdress = document.createElement('img')
    imgAdress.src = 'imgs/location-dot-solid.svg'
    //imgAdress.classList.add = 'adress-img'

    let spanAdress = document.createElement('span')
    spanAdress.innerText = 'Adress: endereço X, rua B, cep: 29595 - 459'

    divAdress.appendChild(imgAdress)
    divAdress.appendChild(spanAdress)

    ////////////////////////////////////////////////////////////////////


    let divPhone = document.createElement('div')
    divPhone.classList.add('phone-content')

    let imgPhone = document.createElement('img')
    imgPhone.src = 'imgs/phone-solid.svg'

    let spanPhone = document.createElement('span')
    spanPhone.innerText = 'phone: (11) 8 9848 - 3987'

    divPhone.appendChild(imgPhone)
    divPhone.appendChild(spanPhone)


    ////////////////////////////////////////////////////////////////

    let divEmail = document.createElement('div')
    divEmail.classList.add('email-content')

    let imgEmail = document.createElement('img')
    imgEmail.src = 'imgs/envelope-solid.svg'

    let spanEmail = document.createElement('span')
    spanEmail.innerText = 'E-mail: nomeDoEmail@email.com'

    divEmail.appendChild(imgEmail)
    divEmail.appendChild(spanEmail)

    ////////////////////////////////////////////////////////////////////////


    let divWebsite = document.createElement('div')
    divWebsite.classList.add('website-content')

    let imgWebsite = document.createElement('img')
    imgWebsite.src = 'imgs/globe-solid.svg'

    let spanWebsite = document.createElement('span')
    spanWebsite.innerText = 'website: nomeDoSite.com.br'

    divWebsite.appendChild(imgWebsite)
    divWebsite.appendChild(spanWebsite)

    /////////////////////////////////////////////////////////////////////////
    divSecondGroupContainer.appendChild(h3)
    divSecondGroupContainer.appendChild(h4)
    divSecondGroupContainer.appendChild(divAdress)
    divSecondGroupContainer.appendChild(divPhone)
    divSecondGroupContainer.appendChild(divEmail)
    divSecondGroupContainer.appendChild(divWebsite)

    ///////////

    return divSecondGroupContainer;
}