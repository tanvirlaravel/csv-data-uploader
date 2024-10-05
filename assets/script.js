jQuery(document).ready(function () {
  jQuery('#frm-cvs-upload').on('submit', function (event) {
    event.preventDefault();

    var formData = new FormData(this.value);

    jQuery.ajax({
      url: cdu_object.ajax_url,
      data: formData,
      dataType: 'json',
      method: 'POST',
      processData: false,
      contentType: false,
      success: function (response) {
        console.log(response);
      },
    });
  });
});
