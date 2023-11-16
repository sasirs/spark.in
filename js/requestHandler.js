function getFormValues(id) {
  var params = "";
  const form = document.getElementById(id);
  const formData = new FormData(form);

  for (var pair of formData.entries()) {
    params += pair[0] + "=" + pair[1] + "&";
  }
  params = params.slice(0, -1);
  return params;
}

function getRequestTo(url, requestType, callback) {
  //console.log("getRequestTo");
  var url = url;

  $.ajax({
    type: requestType,
    url: url,
    success: function (userData) {
      if (!url.includes("json")) alert(userData);
      callback(userData);
    },
    error: function (xhr, status, error) {
      callback(status, error);
    },
  });
}

function resetForm(id) {
  const form = document.getElementById(id);
  form.reset();
}
