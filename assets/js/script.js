jQuery(document).ready(function(){
	var e = new Date,
	        a = e.getDate(),
	        t = e.getMonth(),
	        o = e.getFullYear();
	        t = t + 1;
	    document.getElementById("date-label").innerHTML = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"][e.getDay()] + ", " + a + "/" + t + "/" + o, $(".js-tilt").tilt({
	        glare: !0,
	        maxGlare: .5,
	        scale: 1.2
	    });

});