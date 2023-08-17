$("input[type='checkbox']").change(function(event) {
    // Get the checkbox element that triggered the change event
    var checkbox = $(event.target);
    
    // Get the label element associated with the checkbox
    var label = checkbox.closest('.list-group-item');
  
    // Check if the checkbox is checked
    if (checkbox.prop('checked')) {
      // Checkbox is checked, remove the "done" class from the label
      label.addClass('done');
    } else {
      // Checkbox is not checked, add the "done" class to the label
      label.removeClass('done');
    }
  });
  