const input = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", () => {
  const text = input.value.trim(); // 余分な空白カット
  if (text === "") return; // から文字は追加しない

  // <li>～</li> を作る
  const li = document.createElement("li");
  li.textContent = text;

  // リストに入れる
  taskList.appendChild(li);

  // 入力欄をリセット
  input.value = "";
});
