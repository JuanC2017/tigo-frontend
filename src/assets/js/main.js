$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.secciones section').hide();
    $('.secciones section:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active')
        $('.secciones section').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
});

$(document).ready(function () {
    $('ul.tabs-2 li a:first').addClass('active');
    $('.secciones2 article' ).hide();
    $('.secciones2 article:first').show();

    $('ul.tabs-2 li a').click(function () {
        $('ul.tabs-2 li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones2 article').hide();

        var activeTab2 = $(this).attr('href');
        $(activeTab2).show();
        return false;
    });
});
/*
$(document).ready(function () {
    var enlace = document.querySelector(".active");
    $('ul.tabs-2 li a').addClass('active');
    enlace.addEventListener('mouseover',function(){
        enlace.style.fontSize = "20px";
        enlace.style.color = "#05A";
        
    });
    
    
    
});




$scope.filterValue = function ($event) {
    if (isNaN(String.fromCharCode($event.keyCode))) {
        $event.preventDefault();
    }
};*/
function loadPage(){
    ListaAno();
}

function ListaAno() {
    
    var n = (new Date()).getFullYear();
    var select = document.getElementById("ano");
    for (var i = n; i >= 1900; i--)select.options.add(new Option(i,i));
};
window.onload = ListaAno;