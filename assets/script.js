jQuery(document).ready(function () {
  jQuery('#frm-cvs-upload').on('submit', function (event) {
    event.preventDefault();

    var formData = new FormData(this);
    console.log("formData", formData);

    jQuery.ajax({
      url: cdu_object.ajax_url,
      data: formData,
      dataType: 'json',
      method: 'POST',
      processData: false,
      contentType: false,
      cache: false,
      enctype: 'multipart/form-data',
      // url: `${window.location.origin}/wp-admin/admin-ajax.php`,
      // data: formData,
     
     
      
      // data: {
      //   action: 'cdu_submit_form_data', // the action to fire in the server
      //   data: formData, // any JS object
      // },
      // complete: function (response) {
      //   console.log(JSON.parse(response.responseText).data);
      // },
      success: function (response) {
        console.log(response);
      },
    });
  });
});

// $.ajax({
//   method: 'post',
//   processData: false,
//   contentType: false,
//   cache: false,
//   data: myformData,
//   enctype: 'multipart/form-data',
//   url: 'include/ajax.php',
//   success: function (response) {
//       $("#subform").html(response).delay(4000).hide(1); 
//   }
// });

// jQuery(document).ready(function () {
//   jQuery('#frm-cvs-upload').on('submit', function (event) {
//     event.preventDefault();

//     // Prepare FormData
//     var formData = new FormData(this);
//     formData.append('action', 'cdu_submit_form_data'); // Add the action to formData

//     jQuery.ajax({
//       url: `${window.location.origin}/wp-admin/admin-ajax.php`,
//       method: 'POST',
//       data: formData,
//       processData: false, // Prevent jQuery from processing data
//       contentType: false, // Prevent jQuery from setting content type
//       dataType: 'json',
//       success: function (response) {
//         if (response.success) {
//           console.log(response.data);
//         } else {
//           console.log('Error: ', response.message);
//         }
//       },
//       error: function (xhr, status, error) {
//         console.log('AJAX Error: ', error);
//       },
//     });
//   });
// });
