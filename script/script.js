const form = document.getElementById('form-contacts')
const contacts = []
let linhas = ''

form.addEventListener('submit', function (e) {
    e.preventDefault()

    newContact()
    displayTable()
})

function newContact() {
    const inputName = document.getElementById('name')
    const inputPhone = document.getElementById('phone')
    const inputEmail = document.getElementById('email')

    // Adicionando ao array como objetos
    contacts.push({ name: inputName.value, phone: inputPhone.value, email: inputEmail.value })

    // Limpar os inputs após adicionar
    inputName.value = ''
    inputPhone.value = ''
    inputEmail.value = ''

    // Ordenar os contatos pelo nome em ordem alfabética
    contacts.sort((a, b) => a.name.localeCompare(b.name))
}

function displayTable() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = "" // Limpar tabela antes de atualizar

    // Gerar linhas ordenadas
    contacts.forEach(contact => {
        let linha = '<tr>';
        linha += `<td>${contact.name}</td>`;
        linha += `<td>${contact.phone}</td>`;
        linha += `<td>${contact.email}</td>`;
        linha += '</tr>';
        corpoTabela.innerHTML += linha;
    })
}