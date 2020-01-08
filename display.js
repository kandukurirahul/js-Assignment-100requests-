function U(dob,app){
    for(var i=0;i<dob.length;i++){
        console.log(dob)
        
        const card = document.createElement('div')
        card.setAttribute('class','card')
        app.appendChild(card)

        const details=document.createElement('div')
        details.setAttribute('class','details')
        app.appendChild(details);
        img=dob[i].picture.large;
        addimage(img,details)
        
        fname=dob[i].name.first;
        addfirstname(fname,details)
        
        lname=dob[i].name.last;
        addlastname(lname,details)
        
        email=dob[i].email;
        addemail(email,details)
        
        gender=dob[i].gender;
        addgender(gender,details)
        
        card.appendChild(details)
        //addperson(fname,lname,img,email);
        //addSingleData(dob[i])
        
    }
}
function addimage(avatar,info)
{
    if(avatar)
      {
      img=document.createElement('img')
      img.src=avatar;
      img.setAttribute('class','img')
      info.appendChild(img)
      }
      else{
          console.log("no image found")
          const na=document.createElement('div')
          na.textContent=frst[0]+lst[0]
          na.setAttribute('class','na')
          info.appendChild(na)
      }
}
function addfirstname(frstname,info)
{
    const info_fname=document.createElement('p')
    info_fname.textContent=frstname;
    info_fname.setAttribute('class','info_fname')
    info.appendChild(info_fname)
}
function addlastname(lstname,info)
{
    const info_lname=document.createElement('p')
    info_lname.textContent=lstname
    info_lname.setAttribute('class','info_lname')
    info.appendChild(info_lname)
}
function addemail(mail,info)
{
    const email=document.createElement('p')
    email.textContent=mail;
    email.setAttribute('class','email')
    info.appendChild(email)
}
function addgender(gend,info)
{
    const g=document.createElement('p')
    g.textContent=gend
    g.setAttribute('class','g')
    info.appendChild(g)
}
module.exports={addimage,addfirstname,addlastname,addemail,addgender}