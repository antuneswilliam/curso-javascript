var listElement = document.querySelector('#app ul');
var inputText = document.querySelector('#app input');
var button = document.querySelector('#app button');

button.onclick = search;

function search() {

    listElement.innerHTML = '';
    var liElement = document.createElement('li');
    var todoText = document.createTextNode('Carregando...');
    liElement.appendChild(todoText);
    listElement.appendChild(liElement);

    setTimeout(buscar, 1000);

}

function buscar() {
    axios.get(`https://api.github.com/users/${inputText.value}/repos`)
        .then(function (response) {
            console.log(response.data);

            listElement.innerHTML = '';

            for (let index = 0; index < response.data.length; index++) {

                var liElement = document.createElement('li');

                var todoText = document.createTextNode(response.data[index].name);

                console.log(response.data[index].name);


                liElement.appendChild(todoText);

                listElement.appendChild(liElement);
            }

        })
        .catch(function (error) {
            console.warn(error);

            listElement.innerHTML = '';
            var liElement = document.createElement('li');
            var todoText = document.createTextNode('Usuário não encontrado!');
            liElement.appendChild(todoText);
            listElement.appendChild(liElement);
        });
}