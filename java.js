let isOpen = false
const addItem=()=> {
  isOpen = !isOpen
  console.log(isOpen);
  if (isOpen) {
    document.getElementById("mySidenav").style.width = "150px";
    document.getElementById("main").style.marginLeft = "150px";
    document.querySelector(".title").style.marginLeft = "120px"
    document.querySelector(".note").style.marginLeft = "120px";
  } else {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.querySelector(".title").style.marginLeft = "0px"
    document.querySelector(".note").style.marginLeft = "0px";
  }
}
const displayNote=()=>{
  wholeContent.innerHTML=""
  filterMsg.innerHTML=""
  currentUserArray.map((item,index) => {

    wholeContent.innerHTML+=`<div class="mt-3 col-lg-3 col-md-6 col-12 rounded-5">

    <div class="col-12 rounded-2" style="min-height: 50vh; background:whitesmoke;">

      <div class="card-header fw-bold bg-success text-light fs-5">${item.title}</div>

      <div class="card-body">${item.note}</div>
      
      <div class="float-end">

        <div class="d-flex float-bottom mb-auto d-block me-2" style="margin-top: 31vh;">

        <svg onclick="deleteBtn(${index})" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash-fill me-3 text-danger" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>

        <svg onclick="edit(${index})" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pen-fill text-success" viewBox="0 0 16 16">
        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
        </svg>

      </div>

      </div>

    </div>`
  })
}
let currentUserArray=[]
const addNote=()=>{
  let noteDetails={
    title:title.value,
    note:note.value
  }
  currentUserArray.push(noteDetails)
  displayNote()
  console.log(currentUserArray);
}
const textArea=()=>{
  document.querySelector(".icons").classList.remove("d-none")
}
const backgroundOption=()=>{

}
let isClick=false
const slider=()=>{
  isClick=!isClick
  if (isClick) {
    body.style.backgroundColor="pink"
  } else {
    body.style.backgroundColor="white"
  }
}

const deleteBtn=(index)=>{
  currentUserArray.splice(index,1)
  displayNote()
  console.log(index);
}
const edit=(index)=>{
  console.log(index);
  function OpenBootstrapPopup() {
    $("#simpleModal").modal('show');
  }
  OpenBootstrapPopup()
  localStorage.setItem("index", index)
  let getStoreIndex = localStorage.getItem("index")
  let findClickIndex=currentUserArray.find((item,index)=> index == getStoreIndex)
  console.log(findClickIndex);
  noteTitle.value=`${findClickIndex.title}`
  noteText.innerText=`${findClickIndex.note}`
}

const update=()=>{
  let getStoreIndex = localStorage.getItem("index")
  let findClickIndex=currentUserArray.find((item,index)=> index == getStoreIndex)
  console.log(findClickIndex);
  updateDetails={
    title:noteTitle.value,
    note:noteText.value
  }
  currentUserArray.splice(getStoreIndex ,1,updateDetails)
  console.log(currentUserArray);
  displayNote()
  console.log(updateDetails);
}

const search=()=>{
  if ( wholeContent.innerHTML=="") {
    filterMsg.innerHTML="No matches found"
  } else {
    let text=search.value 
    currentUserArray.find((item,index)=> {
      wholeContent.innerHTML=`<div class="mt-3 col-lg-3 col-md-6 col-12 rounded-5">
      <div class="col-12 rounded-2" style="min-height: 50vh; background:whitesmoke;">
        <div class="card-header fw-bold bg-danger text-light fs-5">${item.title}</div>
        <div class="card-body">${item.note}</div>
        <div class="float-end">
          <div class="d-flex float-bottom mb-auto d-block me-2" style="margin-top: 31vh;">
          <img src="delete.png" alt="" class="me-5 rounded-2" onclick="deleteBtn(${index})">
          <img src="edit.png" alt="" class="rounded-2" onclick="edit(${index})">
        </div>
        </div>
      </div>`
    })
    
  }
  // for(let s of filterNote){
  //   console.log(s);
  // }

}


 





  