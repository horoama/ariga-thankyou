//todo:さすがに汚すぎる。奈緒そう
function add_voice_row(tbody){
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML = "<audio src=" + voice.url + " controls></audio>";
    tr.appendChild(td)

    var td = document.createElement('td');
    var selects = document.createElement('select');
    selects.name = "idol_name";
    $.getJSON("idols.json", function(data){
            for(idol of data["idols"]){
                var option = document.createElement('option');
                option.setAttribute('value', idol)
                option.innerHTML = idol;
                selects.appendChild(option)
            }
    });

    td.appendChild(selects)
    tr.appendChild(td)

    var td = document.createElement('td');
    td.innerHTML = "<input type=\"text\" size=\"50\" maxlength=\"100\" name=\"text\" value=\"\" placeholder=\"テキスト\">";
    tr.appendChild(td)

    var td = document.createElement('td');
    td.innerHTML = voice.url;
    tr.appendChild(td)

    tbody.appendChild(tr)
}

var stored = JSON.parse(localStorage.getItem("voices"));

var vt = document.getElementById('vt');
var tbody =  vt.appendChild(document.createElement('tbody'));

var reload_button = document.getElementById('reload');
reload_button.onclick = function(){
    location.reload()
};
if (stored != null ){
    for (voice  of stored){
        add_voice_row(tbody)
    }
}

