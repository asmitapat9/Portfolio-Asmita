// Modal-Section
// Loading Modal
$(function() {
  $("#myModal").modal();
});

//  $(document).ready(function(){
// 	$("#contactForm").submit(function(event){
//     swal("Thank You for responding!", "We will get in touch with you as soon as possible!!", "success");
// 	});
// });

// Modal-submit
function myFunction() {
  swal("Thank You for responding!", "We will get in touch with you as soon as possible!!", "success");
}


// Contact-Submission
$("#basic-form").click(function() {
  form.submit();
});
