const {addimage,addfirstname,addlastname,addemail,addgender}=require('./display');
test('Testing image',function(){
    expect(document.getElementsByClassName('img')).toBeTruthy()
});
test('Testing addfirstname',function(){
    frstname="rahul"
    const info=document.createElement('div')
    addfirstname(frstname,info)
    expect(document.getElementsByClassName('info_fname')).toBeTruthy()
});
test('Testing addlastname',function(){
    lstname="kandukuri"
    const info=document.createElement('div')
    addlastname(lstname,info)
    expect(document.getElementsByClassName('info_lname')).toBeTruthy()
});
test('Testing addemail',function(){
    email="kandukuri@gmail.com"
    const info=document.createElement('div')
    addemail(email,info)
    expect(document.getElementsByClassName('email')).toBeTruthy()
});
test('Testing addgender',function(){
    gend="male"
    const info=document.createElement('div')
    addgender(lstname,info)
    expect(document.getElementsByClassName('gender')).toBeTruthy()
});