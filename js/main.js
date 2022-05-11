// 要素を取得する
const addBtn = document.getElementById('add')

// ローカルストレージからデータを取得する

const notes = []

//3.ページ読み込み：保存データ取得表示
for(let i=0; i<localStorage.length; i++){
    const key   = localStorage.key(i);
    const value = localStorage.getItem(key);
    notes.push(key)
    const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>';
    $("#list").append(html);
}
console.log(notes);

// メモ帳追加処理を実行
if(notes) {
  notes.forEach(note => addNewNote(note))
}



// 作成ボタンのクリックイベントの登録
addBtn.addEventListener('click', () => addNewNote())

//DOMにメモ帳を追加する
function addNewNote(text = '') {
  // div要素を作成
  const note = document.createElement('div');
  // noteクラスを追加
  note.classList.add('note');
  // メモ帳を追加
  note.innerHTML = `
    <div class="tools">
      <button id="save"><i class="fas fa-check-square"></i></button>
      <button id="edit"><i class="fas fa-edit"></i></button>
      <button id="delete"><i class="fas fa-trash-alt"></i></button>
      <ul>
    </div>
    <div class="main">
      <input type="text" id="title" >
      <textarea id="memo"></textarea>
    </div>
  `
  // bodyの子要素として追加
  document.body.appendChild(note)

  const saveBtn = note.querySelector('#save')
  const deleteBtn = note.querySelector('#delete')

  // 保存のクリックイベントの登録
  saveBtn.addEventListener('click', () => {
    const key = $("#title").val();
    const value = $("#memo").val();
    localStorage.setItem(key,value);
    const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>';
    $("#list").append(html);
  });

  // 削除のクリックイベントの登録
  deleteBtn.addEventListener('click', () => {
    note.remove()
    updateLS()
  })

}




// // 操作に必要な要素を取得
// const saveBtn = note.querySelector('.save')
// const editBtn = note.querySelector('.edit')
// const deleteBtn = note.querySelector('.delete')
// const title = note.querySelector('#title')
// const contents = note.querySelector('#contents')

// // ローカルストレージからデータを取得する
// const notes = JSON.parse(localStorage.getItem('notes'))
 



//   // 新規/編集があるのでこうしている
//   textArea.value = text
//   // // markedは、HTMLに追加したプラグイン
//   // main.innerHTML = marked(text)

//   // 保存のクリックイベントの登録
//   saveBtn.addEventListener('click', () => {
//     note.updateLS()
   
//   })

//   // 削除のクリックイベントの登録
//   deleteBtn.addEventListener('click', () => {
//     note.remove()
//     updateLS()
//   })
 
//   // メモ帳編集
//   editBtn.addEventListener('click', () => {
//     main.classList.toggle('hidden')
//     textArea.classList.toggle('hidden')
//   })
//   //   // テキストエリアのイベント
//   // textArea.addEventListener('input', (e) => {
//   //   const { value } = e.target

//   //   // main.innerHTML = marked(value)

//   //   // ローカルストレージの更新
//   //   updateLS()
//   // })



// // ローカルストレージにメモ帳を保存
// function updateLS() {
//   // 要素を取得
//   const notesText = document.querySelectorAll('textarea')

//   const notes = []
//   console.log (notesText)

//   // 要素を格納
//   notesText.forEach(note => notes.push(note.value))
//   // notesという名前でローカルストレージを保存
//   localStorage.setItem('notes', JSON.stringify(notes))
// }

