// Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Novas funcionalidades
const openCloseGeneratorButton = document.querySelector("#open-generate-password")
const generatePasswordContainer = document.querySelector("#generate-options")
const lengthInput = document.querySelector("#length")
const lettersInput = document.querySelector("#letters")
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")
const copyPasswordButton = document.querySelector("#copy-password")
const alertaSenhorDiv = document.querySelector("#alerta-senha")


// Funções
// Letras, Números e Símbolos

const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString()
}

const getSymbol = () => {
    const symbols = "(){}[]=<>/,.!@#$%¨&*()_-+=:;?|"
    return symbols[Math.floor(Math.random() * symbols.length)]
}


const generatePassword = (getLetterLowerCase, 
    getLetterUpperCase, 
    getNumber, 
    getSymbol
) => {
    let password = ""

    // Segunda versão
    const passwordLength = +lengthInput.value

    // esse array será preenchido (lowercase, letters, numbers etc)
    // à medida que o usuário escolher as opções
    const generators = []
    if(lettersInput.checked) {
        generators.push(getLetterLowerCase, getLetterUpperCase)
    }

    if(numbersInput.checked) {
        generators.push(getNumber)
    }

    if(symbolsInput.checked) {
        generators.push(getSymbol)
    } 
     

    if (generators.length === 0) {
        return
    }
    
    console.log(generators.length)

    for(i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
            const randomValue =
            generators[Math.floor(Math.random() * generators.length)]()
                 password += randomValue 
        })
    }
        password = password.slice(0, passwordLength)  // solução do professor
        generatedPasswordElement.style.display = "block"
        generatedPasswordElement.querySelector("h4").innerText = password
}


// Eventos
generatePasswordButton.addEventListener("click", (e) => {
    e.preventDefault()

    generatePassword(getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    )
})

openCloseGeneratorButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide")
})

symbolsInput.addEventListener("click", ()=> { // coloquei a opção de só gerar senhas se tiver símbolos
    if(!symbolsInput.checked) {
        alertaSenhorDiv.style.display = "block"
        document.getElementById("generate-password").disabled = true
    } else {
        alertaSenhorDiv.style.display = "none"
        document.getElementById("generate-password").disabled = false
    }
})

copyPasswordButton.addEventListener("click", (e) => {
    e.preventDefault()

    const password = generatedPasswordElement.querySelector("h4").innerText

    navigator.clipboard.writeText(password).then(() => {
        copyPasswordButton.innerText = "Senha copiada com sucesso mesmo!"

        setTimeout(() => {
            copyPasswordButton.innerText = "Copiar"
        }, 2000)
    })
})

