
function func(e){
    // e.preventDefault()
    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    const number=document.getElementById("number").value
    const date=document.getElementById("date").value
    const time=document.getElementById("time").value
    const obj={
      naam: name,
      ank: number,
      mail: email
    }
    const objSerialized=JSON.stringify(obj)
    localStorage.setItem(name,objSerialized)
    const divi=document.getElementById("main-div")
    const form=document.getElementById("form1")
    const para=document.createElement("p")
    para.appendChild(document.createTextNode(name+" - "+email+" - "+number))
    const button=document.createElement("button")
    button.setAttribute("type", "button")
    button.setAttribute("class", "btn btn-danger btn-sm float-right")
    button.appendChild(document.createTextNode("X"))
    para.appendChild(button)
    form.appendChild(para)
    button.addEventListener("click", deletef)
    function deletef(e){
    e.preventDefault()
    if(e.target.classList.contains("btn-danger")){
      const parent=e.target.parentElement
      form.removeChild(parent)
      localStorage.removeItem(JSON.parse(localStorage.getItem(name)))
      console.log(parent)
    }
  }

    // <button type="button" class="btn btn-danger">Danger</button>
    // console.log(name)
    // console.log(email)
    // console.log(number)
    // console.log("Booked Appointment for "+date+" at "+time)
  }

  // button.addEventListener("click", deletef)
  // function deletef(e){
  //   e.preventDefault()
  //   if(e.target.classList.contains("btn-danger")){
  //     const parent=e.target.parent
  //     div.removeElement(parent)
  //   }
  // }