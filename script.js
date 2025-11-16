const input = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", () => {
  const text = input.value.trim(); // 余分な空白カット
  if (text === "") return; // から文字は追加しない

  // <li>～</li> を作る
  const li = document.createElement("li");

  //テキスト表示部分
  const span=document.createElement("span");
  span.textContent=text;
  
  const delBtn=document.createElement("button");
  delBtn.textContent="x";
  delBtn.style.marginLeft="8px";
  delBtn.addEventListener("click",()=>{
    li.remove();//リストから削除
  });

  // リストに入れる
  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  // 入力欄をリセット
  input.value = "";
});
