$(document).ready(function () {  
    $('ul.nav-list').addClass('open').slideToggle('200');
    $('#nav-menu').click(function () {        
        if (($('ul.nav-list').hasClass('open'))) {
            $('ul.nav-list').removeClass('open');
        } else {
            $('ul.nav-list').addClass('open');
        }
    });
});

document.getElementById("home").onmouseover = function () {
    document.getElementById("txthome").style.display = "block";
};
document.getElementById("home").onmouseout = function () {
    document.getElementById("txthome").style.display = "none";
};
document.getElementById("aula1").onmouseover = function () {
    document.getElementById("txtaula1").style.display = "block";
};
document.getElementById("aula1").onmouseout = function () {
    document.getElementById("txtaula1").style.display = "none";
};
document.getElementById("aula2").onmouseover = function () {
    document.getElementById("txtaula2").style.display = "block";
};
document.getElementById("aula2").onmouseout = function () {
    document.getElementById("txtaula2").style.display = "none";
};
document.getElementById("aula3").onmouseover = function () {
    document.getElementById("txtaula3").style.display = "block";
};
document.getElementById("aula3").onmouseout = function () {
    document.getElementById("txtaula3").style.display = "none";
};
document.getElementById("aula4").onmouseover = function () {
    document.getElementById("txtaula4").style.display = "block";
    document.getElementById("txtaula4").style.color = "#CD0074";
    document.getElementById("ico4").style.color = "#CD0074";
};
document.getElementById("aula4").onmouseout = function () {
    document.getElementById("txtaula4").style.display = "none";
    document.getElementById("ico4").style.color = "#fff";
};
document.getElementById("entrar").onmouseover = function () {
    document.getElementById("txtentrar").style.display = "block";
};
document.getElementById("entrar").onmouseout = function () {
    document.getElementById("txtentrar").style.display = "none";
};
document.getElementById("sair").onmouseover = function () {
    document.getElementById("txtsair").style.display = "block";
};
document.getElementById("sair").onmouseout = function () {
    document.getElementById("txtsair").style.display = "none";
};
document.getElementById("bg1").onclick = function () {
    var bg1 = document.getElementById("bg1");
    bg1.setAttribute('src', "assets/1.1.png");
    document.getElementById('conteudo1').style.display = "block";
}
document.getElementById("bg2").onclick = function () {
    var bg1 = document.getElementById("bg2");
    bg1.setAttribute('src', "assets/2.2.png");
    document.getElementById('conteudo2').style.display = "block";
}
document.getElementById("bg3").onclick = function () {
    var bg1 = document.getElementById("bg3");
    bg1.setAttribute('src', "assets/3.3.png");
    document.getElementById('conteudo3').style.display = "block";
}
document.getElementById("bg4").onclick = function () {
    var bg1 = document.getElementById("bg4");
    bg1.setAttribute('src', "assets/4.4.png");
    document.getElementById('conteudo4').style.display = "block";
}
document.getElementById("bg5").onclick = function () {
    var bg1 = document.getElementById("bg5");
    bg1.setAttribute('src', "assets/5.5.png");
    document.getElementById('conteudo5').style.display = "block";
}

//script do carousel
var slideIndex = 1;
var aux = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        aux = 1;
    }
    if (n < 1) {
        aux = slides.length
    }
    console.log(slideIndex);
    if (slideIndex == 1) {
        var txt1 = document.getElementById("txt1").innerHTML;
        document.getElementById("txt").innerHTML = txt1;
    } else if (slideIndex == 2) {
        var txt2 = document.getElementById("txt2").innerHTML;
        document.getElementById("txt").innerHTML = txt2;
    } else if (slideIndex == 3) {
        var txt3 = document.getElementById("txt3").innerHTML;
        document.getElementById("txt").innerHTML = txt3;
    } else if (slideIndex == 4) {
        var txt4 = document.getElementById("txt4").innerHTML;
        document.getElementById("txt").innerHTML = txt4;
    } else if (slideIndex == 5) {
        var txt5 = document.getElementById("txt5").innerHTML;
        document.getElementById("txt").innerHTML = txt5;
        document.getElementById("sessao2").style.display = "block";
    }
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}

document.getElementById("painel").onmouseover = function () {
    document.getElementById("hidden").style.display = "block";
};
document.getElementById("footer").onmouseout = function () {
    document.getElementById("hidden").style.display = "none";
};



