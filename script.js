const input = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

//これで配列ができるらしい。
let tasks=[];

//タスクをブラウザに保存するための関数
function saveTasks(){
  localStorage.setItem("tasks",JSON.stringify(tasks));
}

//描画
function renderTasks(){
  taskList.innerHTML="";
  tasks.forEach((task,index)=>{
     // <li>～</li> を作る
    const li =document.createElement("li");
    //テキスト表示部分
    const span=document.createElement("span");
    span.textContent=task;
    //ｘボタンの作成
    const delBtn=document.createElement("button");
    delBtn.textContent="x";
    delBtn.style.marginLeft="8px";

    delBtn.addEventListener("click",()=>{
      tasks.splice(index,1);//配列から削除
      saveTasks();//保存
      renderTasks();//再描画
    });

    // リストに入れる
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

  });
}

//初回ロード時に復元
window.addEventListener("DOMContentLoaded",()=>{
  const data =localStorage.getItem("tasks");
  if(data){
    tasks=JSON.parse(data);
    renderTasks();
  }
});

addButton.addEventListener("click", () => {
  const text = input.value.trim(); // 余分な空白カット
  if (text === "") return; // から文字は追加しない

  tasks.push(text);
  saveTasks();
  renderTasks();
  // 入力欄をリセット
  input.value = "";
});
