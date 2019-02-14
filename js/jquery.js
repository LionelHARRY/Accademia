//Ignore parent Div
$(
  "#buttons",
  ".row",
  ".navigation",
  "#nav-row",
  "#logo",
  ".image",
  ".name",
  ".main-content",
  ".slide",
  ".carousel-inner",
  ".carousel-indicators"
).click(function(){
  event.stopPropagation();
});


//hide and show elements from clicks on slideshow
$('div.item').click(function(){
  var current = $(this).attr("id");

  if(current == "item1"){
    $(".main-content").hide();
    $(".formulaire").hide();
    $(".inscription").hide();
    $(".logement").hide();
    $(".info").show();
  }else if(current == "item2"){
    $(".main-content").hide();
    $(".formulaire").hide();
    $(".inscription").hide();
    $(".info").hide();
    $(".logement").show();
  }
  else if(current == "item3"){
    $(".main-content").hide();
    $(".formulaire").hide();
    $(".logement").hide();
    $(".info").hide();
    $(".inscription").show();
  }
});

//Dossier element clicked
$("#dossier").click(function(){
  if($(".formulaire").css('display') == 'none'){
    $(".main-content").hide();
    $(".inscription").hide();
    $(".logement").hide();
    $(".info").hide();
    $(".formulaire").show();

    //Rename the title
    document.getElementById("title").innerHTML = "Formulaire | Inscription Canada";
  }
});

//Inscription element clicked
$("#inscription").click(function(){
  if($(".inscription").css('display') == 'none'){
    $(".main-content").hide();
    $(".formulaire").hide();
    $(".logement").hide();
    $(".info").hide();
    $(".inscription").show();

    //Rename the title
    document.getElementById("title").innerHTML = "Études | Inscription Canada";
  }
});

//Logement element clicked
$("#logement").click(function(){
  if($(".logement").css('display') == 'none'){
    $(".main-content").hide();
    $(".formulaire").hide();
    $(".inscription").hide();
    $(".info").hide();
    $(".logement").show();

    //Rename the title
    document.getElementById("title").innerHTML = "Logement |  Inscription Canada";
  }
});

//Info element clicked
$("#info").click(function(){
  if($(".info").css('display') == 'none'){
    $(".main-content").hide();
    $(".formulaire").hide();
    $(".inscription").hide();
    $(".logement").hide();
    $(".info").show();

    //Rename the title
    document.getElementById("title").innerHTML = "Infos |  Inscription Canada";
  }
});

$("#btn-send").click(function(){
  if((document.getElementById("idprenom").value !="") &&
     (document.getElementById("idnom").value !="") &&
     (document.getElementById("idage").value !="") &&
     (document.getElementById("sexeFormControlSelect1").value !="") &&
     (document.getElementById("paysFormControlSelect1").value !="") &&
     (document.getElementById("idtel").value !="") &&
     (document.getElementById("idmail").value !="") &&
     (document.getElementById("idformation").value !="") &&
     (document.getElementById("niveauFormControlSelect1").value !="") &&
     (document.getElementById("niveauFormControlSelect1").value !="")){
        document.getElementById('myModal').style.display = "block";
     }
});

$(".close").click(function(){
  document.getElementById('myModal').style.display = "none";

});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById('myModal')) {
    document.getElementById('myModal').style.display = "none";
  }
}
