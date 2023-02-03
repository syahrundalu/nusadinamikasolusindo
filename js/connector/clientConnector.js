fetch("js/database/client.json")
    .then(response => response.json())
    .then(data => {
        let output = "";
        data.clients.forEach(function(client) {
        output +=
            '<a class="text-center d-block outline-0 p-3"><img class="d-unset img-fluid" src="'+client.src +'" alt="client-logo"></a>'
            ;
        });
        document.querySelector(".client-logo-slider").innerHTML = output;
    });
    