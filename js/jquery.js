

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
$("#buttons", ".row").click(function(){
  event.stopPropagation();
});

//Dossier element clicked
$("#dossier").click(function(){
  if($(".formulaire").css('display') == 'none'){
    $(".main-content").hide();
    $(".inscription").hide();
    $(".logement").hide();
    $(".formulaire").show();

    //Rename the title
    document.getElementsById("title").innerHTML = "Accademia | Formulaire";
  }
});

//Inscription element clicked
$("#inscription").click(function(){
  if($(".inscription").css('display') == 'none'){
    $(".main-content").hide();
    $(".formulaire").hide();
    $(".logement").hide();
    $(".inscription").show();

    //Rename the title
    document.getElementsById("title").innerHTML = "Accademia | Inscription";
  }
});

//Logement element clicked
$("#logement").click(function(){
  if($(".logement").css('display') == 'none'){
    $(".main-content").hide();
    $(".formulaire").hide();
    $(".inscription").hide();
    $(".logement").show();

    //Rename the title
    document.getElementsById("title").innerHTML = "Accademia | Logement";
  }
});

//$(".btn-file-form").click(function(){
//    $(".main-content").hide();
//    $(".formulaire").show();
//});
