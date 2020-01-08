function U(dob){
    for(var i=0;i<dob.length;i++){
        fname=dob[i].name.first;
        lname=dob[i].name.last;
        img=dob[i].picture.large;
        email=dob[i].email;
        addperson(fname,lname,img,email);
        //addSingleData(dob[i])
    }
}

/*function addSingleData(dob){
    fname=dob.name.first;
    lname=dob.name.last;
    img=dob.picture.large;
    email=dob.email;
    addperson(fname,lname,img,email);
}*/
function addperson(frst,lst,avatar,mail)
{
      //creating card
      const card = document.createElement('div')
      card.setAttribute('class','card')
      //card.setAttribute('id','tcard')
      //creating image
      if(avatar)
      {
      img=document.createElement('img')
      img.src=avatar;
      img.setAttribute('class','img')

      card.appendChild(img)
      }
      else{
          console.log("no image found")
          const na=document.createElement('div')
          na.textContent=frst[0]+lst[0]
          na.setAttribute('class','na')
          card.appendChild(na)
      }
      //creating another div called details for info
      const details=document.createElement('div')
      details.setAttribute('class','details')

      const info_name=document.createElement('p')
      info_name.textContent=frst+" "+lst;
      info_name.setAttribute('class','info_name')
      
      const email=document.createElement('p')
      email.textContent=mail;
      email.setAttribute('class','email')
      //appending childs to parent div
      details.appendChild(info_name)
      details.appendChild(email)
      card.appendChild(details)
      document.getElementById('root').appendChild(card)
      //app.appendChild(card)
}
module.exports={addperson}