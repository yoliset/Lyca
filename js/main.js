// Array con las imagenes que se iran mostrando en la web

    var imagenes=new Array(
        'img/imagen/1.jpg',
        'img/imagen/2.jpg',
        
    );
    //Funcion para cambiar la imagen
    function rotarImagenes()
    {
        // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
        var index=Math.floor((Math.random()*imagenes.length));
 
        // cambiamos la imagen
       document.getElementById("imagen").src=imagenes[index];
    }
    //Función que se ejecuta una vez cargada la página
    onload=function()
    {
        // Cargamos una imagen aleatoria
        rotarImagenes();
 
        // Indicamos que cada 2 segundos cambie la imagen
        setInterval(rotarImagenes,2000);
    }

    
    
    (function(e,t,n){var r=e();e.fn.dropdownHover=function(n){r=r.add(this.parent());return this.each(function(){var s=e(this),o=s.parent(),u={delay:200,instantlyCloseOthers:!0},a={delay:e(this).data("delay"),instantlyCloseOthers:e(this).data("close-others")},f=e.extend(!0,{},u,n,a),l;o.hover(function(e){if(!o.hasClass("open")&&!s.is(e.target))return!0;if(i){f.instantlyCloseOthers===!0&&r.removeClass("open");t.clearTimeout(l);o.addClass("open")}},function(){i&&(l=t.setTimeout(function(){o.removeClass("open")},f.delay))});s.hover(function(){if(i){f.instantlyCloseOthers===!0&&r.removeClass("open");t.clearTimeout(l);o.addClass("open")}});o.find(".dropdown-submenu").each(function(){var n=e(this),r;n.hover(function(){if(i){t.clearTimeout(r);n.children(".dropdown-menu").show();n.siblings().children(".dropdown-menu").hide()}},function(){var e=n.children(".dropdown-menu");i?r=t.setTimeout(function(){e.hide()},f.delay):e.hide()})})})};var i=!1,s={hits:0,x:null,y:null};e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover();e(document).mousemove(function(t){s.hits++;if(s.hits>20||Math.abs(t.pageX-s.x)+Math.abs(t.pageY-s.y)<4){e(this).unbind(t);i=!0}else{s.x=t.pageX;s.y=t.pageY}})});var o=".dropdown-submenu:hover>.dropdown-menu{display:none}",u=document.createElement("style");u.type="text/css";u.styleSheet?u.styleSheet.cssText=o:u.appendChild(document.createTextNode(o));e("head")[0].appendChild(u)})(jQuery,this);