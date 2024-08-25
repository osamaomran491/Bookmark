var siteLists;
localStorage.getItem("siteLists") == null ? (siteLists = []) : siteLists = (JSON.parse(localStorage.getItem("siteLists")));
 showLists(siteLists);
var SiteName = document.getElementById("SiteName");
var SiteURL = document.getElementById("SiteURL");
var submitButton = document.getElementById("submitButton");
function localStorageUpdate(){
    localStorage.setItem("siteLists" , JSON.stringify(siteLists))

}
function Submit() {
    if(siteLists){
     var list = {
         Name: SiteName.value,
         Link: SiteURL.value
     };
     siteLists.push(list)
     localStorageUpdate()
     showLists(siteLists);
     clearInputs();
 }
 }
 function  showLists (siteLists){
    var cartona =``
   for( var i = 0 ; i< siteLists.length; i++){

   cartona += ` <tr>
    <td>${i}</td>
    <td>${siteLists[i].newName ? siteLists[i].newName : siteLists[i].Name}</td>
    <td><button onclick="visitSite(${i})" class="btn btn-warning">Visit</button></td>
    <td><button onclick="deleteList(${i})" class="btn btn-danger">Delete</button></td>
   </tr>
`
   }
  document.getElementById("detials").innerHTML = cartona;
}
function deleteList(index){
    siteLists.splice(index,1)
    localStorageUpdate()
    showLists(siteLists);
}
function clearInputs(){
        SiteName.value= '';
        SiteURL.value= '';
}
function visitSite(index) {
    const siteURL = siteLists[index].Link;
    if (!siteURL.startsWith('http://') && !siteURL.startsWith('https://')) {
        window.open('http://' + siteURL, '_blank');
    } else {
        window.open(siteURL, '_blank');
    }
}

        