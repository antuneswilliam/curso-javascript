// 4.3 Utilizando axios
axios.get('https://api.github.com/users/antuneswilliam')
    .then(function(response) {
        console.log(response.data.avatar_url);
    })
    .catch(function(error) {
        console.warn(error);        
    });

/*
// 4.2 Promises
var minhaPromise = function() {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/antuneswilliam');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4){
                if (xhr.status ===200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);        
    });

*/

/*
// 4.1 Requisições AJAX
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/antuneswilliam');
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
        
    }
}
*/