

var parentElement = document.getElementById('ochreTableBody');
var url = "https://ochre.lib.uchicago.edu/ochre?uuid=accd571b-bae3-4d42-93d9-58b65ec79300";



function loadXML(){
  XMLrequest(url);
  console.log('loadXML -- OK');
};

function XMLrequest(link){
  var connect = new XMLHttpRequest();
  connect.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        listTexts(this.responseXML);
    }
  };
  connect.open("GET", link, true);
  connect.send();
  console.log('XMLrequest -- OK');
}

function listTexts(sourceXML){
    document.getElementById('projectTitle').innerText = sourceXML.getElementsByTagName('metadata')[0].children[1].innerHTML;
    document.getElementById('setTitle').innerText = sourceXML.getElementsByTagName('set')[0].children[3].children[0].innerHTML;
    document.getElementById('setDescription').innerText = sourceXML.getElementsByTagName('set')[0].children[4].innerHTML;
    var licenseText = document.getElementById('license');
    licenseText.innerText = sourceXML.getElementsByTagName('availability')[0].children[0].innerHTML;
    licenseText.setAttribute('href', sourceXML.getElementsByTagName('availability')[0].children[0].attributes[0].nodeValue);

  console.log(sourceXML);
  var textList = sourceXML.getElementsByTagName('text');
  console.log(textList);
  for (i=0; i < textList.length; i++) {
    //create one row per item
    var tr = document.createElement('tr');
    tr.setAttribute('class','ochreTableRows');
    tr.setAttribute('id','row_'+i);
    document.getElementById('ochreTableBody').appendChild(tr);
    //populate the cells in the row
    var td = document.createElement('td');
    td.setAttribute('id','td_name_'+i);
    td.textContent = textList[i].children[0].children[0].innerHTML;
    document.getElementById('row_'+i).appendChild(td);
    var td2 = document.createElement('td');
    td2.setAttribute('id','td_desc_'+i);
    td2.textContent = textList[i].children[3].innerHTML;
    document.getElementById('row_' + i).appendChild(td2);
  };
}