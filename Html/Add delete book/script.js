document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector("#book-list ul");
  const forms = document.forms;
  list.addEventListener("click", function (e) {
    if (e.target.className === "delete") {
      const li = e.target.parentElement;
      list.removeChild(li);
    }
  });
  const addForm = forms["Add-book"];
  addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value.trim();
    if (value === "") return;
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");
    bookName.textContent = value;
    deleteBtn.textContent = "delete";
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    addForm.querySelector('input[type="text"]').value = "";
  });
});
