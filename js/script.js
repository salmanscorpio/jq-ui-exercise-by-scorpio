$(document).ready(function() {

  /* ===========================================
     DARK MODE TOGGLE
  ============================================ */
  $("#darkModeToggle").click(function() {
    $("body").toggleClass("dark-mode");
  });

  /* ===========================================
     DRAGGABLE
  ============================================ */
  $("#draggable, #serviceDraggable").draggable({
    revert: "invalid",
    cursor: "move"
  });

  /* ===========================================
     DROPPABLE
  ============================================ */
  $("#droppable, #serviceDroppable").droppable({
    accept: ".box",
    classes: {
      "ui-droppable-active": "ui-state-highlight",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
      $(this).addClass("success").html("Dropped!");
    }
  });

  /* ===========================================
     RESIZABLE
  ============================================ */
  $("#resizable, #serviceResizable").resizable({
    animate: true,
    ghost: true
  });

  /* ===========================================
     ADD / REMOVE CLASS
  ============================================ */
  $("#toggleClassBtn").click(function() {
    $("#classBox").toggleClass("ui-state-highlight");
  });

  /* ===========================================
     POSITION EXAMPLE
  ============================================ */
  $("#positionBtn").click(function() {
    $("#positionBox").position({
      my: "left top",
      at: "right+50 top+50",
      of: $(this),
      collision: "fit"
    });
  });

  /* ===========================================
     EFFECT
  ============================================ */
  $("#effectBtn").click(function() {
    $("#effectBox").effect("bounce", {times:3}, 800);
  });

  /* ===========================================
     HIDE / SHOW
  ============================================ */
  $("#hideBtn").click(function() {
    $("#hideBox").toggle("slide", {direction: "up"}, 600);
  });

  /* ===========================================
     SLIDER
  ============================================ */
  $("#slider, #serviceSlider").slider({
    range: "min",
    value: 50,
    min: 0,
    max: 100,
    slide: function(event, ui) {
      $(this).next("p").remove();
      $(this).after("<p>Value: " + ui.value + "</p>");
    }
  });

  /* ===========================================
     PROGRESSBAR
  ============================================ */
  $("#serviceProgress, #progressbar").progressbar({
    value: 70
  });

  /* ===========================================
     SPINNER
  ============================================ */
  $("#spinner").spinner({
    min: 0,
    max: 100,
    step: 1
  });

  /* ===========================================
     DATEPICKER
  ============================================ */
  $("#datepicker, #serviceDatepicker").datepicker({
    showAnim: "slideDown",
    changeMonth: true,
    changeYear: true
  });

  /* ===========================================
     TOOLTIP
  ============================================ */
  $(document).tooltip({
    track: true
  });

  /* ===========================================
     TABS
  ============================================ */
  $("#tabs, #tabsAbout").tabs();

  /* ===========================================
     ACCORDION
  ============================================ */
  $("#accordion, #accordionAbout").accordion({
    collapsible: true,
    heightStyle: "content"
  });

  /* ===========================================
     AUTOCOMPLETE
  ============================================ */
  var services = ["Web Design", "Web Development", "UI/UX Design", "SEO", "jQuery UI"];
  $("#autocomplete, #serviceAutocomplete").autocomplete({
    source: services
  });

  /* ===========================================
     MENU
  ============================================ */
  $("#menu").menu();

  /* ===========================================
     SELECTMENU
  ============================================ */
  $("#selectmenu").selectmenu();

  /* ===========================================
     BUTTON WIDGET
  ============================================ */
  $("#buttonExample").button();

  /* ===========================================
     FORM VALIDATION
  ============================================ */
  $("#contactForm").submit(function(e) {
    e.preventDefault();
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();
    var valid = true;

    if(name === "") {
      alert("Name is required!");
      valid = false;
    }
    else if(email === "" || !validateEmail(email)) {
      alert("Valid email is required!");
      valid = false;
    }
    else if(message === "") {
      alert("Message cannot be empty!");
      valid = false;
    }

    if(valid) {
      $("#contactDialog").dialog({
        modal: true,
        buttons: {
          "Close": function() {
            $(this).dialog("close");
          }
        }
      });
      // Clear form
      $("#contactForm")[0].reset();
    }
  });

  /* ===========================================
     EMAIL VALIDATION FUNCTION
  ============================================ */
  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

});