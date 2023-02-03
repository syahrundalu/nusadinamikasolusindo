fetch("js/database/galery.json")
    .then(response => response.json())
    .then(data => {
        let output = "";
        data.images.forEach(function(image) {
        output +=
            '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 portfolio-item transition '+image.filter +' data-category='+ image.filter +'">'
            +
            '<div class="single-portfolio portfolio-wrap">' +
                '<a>' +
                    '<img src="' +
                    image.src +'" alt="Image" class="img-fluid">' +

                    '<div class="contents">' +
                    '<h3>' +
                    image.tittle +
                    '</h3>' +

                    '<div class="cat">' + image.kategori +
                    '</div>' +
                    '</div>' +
                '</a>' +
            '</div>'+'</div>';
        });
        document.querySelector(".portfolio-container").innerHTML = output;
    });
    