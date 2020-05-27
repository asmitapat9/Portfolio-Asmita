// Modal-Section
// Loading Modal after a delay of 3seconds.
setTimeout(function() {
    $('#myModal').modal();
}, 3000);
// $(function() {
//   $("#myModal").modal();
// });


// Modal-submit
function myFunction() {
  swal("Thank You for responding!", "We will get in touch with you as soon as possible!!", "success");
}


// Contact-Submission
$("#basic-form").click(function() {
  form.submit();
});

//Redirecting to index.html page after button click on success.html page
function pageRedirect() {
      window.location.href = "index.html";
}
