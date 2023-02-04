$("form").on("submit", (e) =>{
  e.preventDefault();
  const $title = $("#title").val();
  const $rate = $("#rate").val();

  
  $("#list").append(`<p>${$title}  ${$rate} <button id="remove">  remove</button></p>`);
  $("#title").val("");
  $("#rate").val("");
})

$("#list").on("click", "#remove", (e) =>{
  e.preventDefault();
  e.target.parentElement.remove();
})
