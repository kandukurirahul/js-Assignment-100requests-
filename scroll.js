


/*const card=document.createElement('div')
card.setAttribute('id',card)
document.body.appendChild(card)*/


function load()
{
  var request = new XMLHttpRequest()
  url='https://randomuser.me/api/?results=100';
  console.log(url)
  request.open('GET',url, true)
  // const h=document.createElement('h1')
  // h.setAttribute('id','header')
  // h.textContent="Contact Details"
  // document.body.appendChild(h)
  request.onload = function() {
  var jsondata = JSON.parse(this.response)
  const app=document.createElement('div')
  app.setAttribute('id','root')
  document.body.appendChild(app)
 
    var data=jsondata["results"]
    console.log(data.length)
    if(data.length>0){
      fetch(data,app)
    }
    else
    {
      alert("Reached end of file")
    }
  }
  request.send()

}  
window.onscroll = function() {
    
    var offset = window.scrollY + window.innerHeight;
    var height = document.body.scrollHeight ;
    //console.log(window.scrollY+" "+window.innerHeight+" "+document.body.offsetHeight)
    if (offset >= height) {
        load()
    }
  }
