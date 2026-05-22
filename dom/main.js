const title = document.getElementById("title");

console.log(title);

const button = document.querySelector("button");

button.addEventListener("click", () => {
  title.innerText = "Hello Ram";
  title.style.color = "red";
  title.style.background = "#ff000025";
  title.style.border = "1px solid black";
});

const students = ["Ram", "Shyam", "Hari", "Rohan"];

const listElement = document.getElementById("list");

for (const student of students) {
  const listItem = document.createElement("li"); // <li></li>

  listItem.innerText = student; // <li>student</li>

  listElement.appendChild(listItem); // <ul id="list"><li>student</li></ul>
}

button.addEventListener("dblclick", () => {
  //   window.alert("Hello from alert");
  window.confirm("Are you sure?");
});
