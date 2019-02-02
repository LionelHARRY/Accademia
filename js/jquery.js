

//Check window width
//$(document).ready(function() {
    // Optimalisation: Store the references outside the event handler:
    //var $window = $(window);
    //var detached = false;
    //var title;

    //function checkWidth() {
        //var width = $window.width();

        //if (width < 400) {
            //detached = true;

            //title = $(".title").detach();
            //document.getElementById("logo")[0].className = "col-xs-6";
            //document.getElementById("social")[0].className = "col-xs-6";
        //}

        //if((width > 400)  && (detached == true)){
            //$("#nav-row").prepend(title);
            //document.getElementById("logo")[0].className = "col-xs-4";
            //document.getElementById("title")[0].className = "col-xs-4";
            //document.getElementById("social")[0].className = "col-xs-4";
        //}
    //}
    // Execute on load
    //checkWidth();
    // Bind event listener
    //$(window).resize(checkWidth);
//});

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

//$(".btn-file-form").click(function(){
//    $(".main-content").hide();
//    $(".formulaire").show();
//});
