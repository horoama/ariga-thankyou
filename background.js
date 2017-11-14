chrome.webRequest.onCompleted.addListener(
    function (details) {
            var fileUrl = details.url;
            save_url(fileUrl)
            console.log(fileUrl)
    },
    {urls: ["*://cdn.bn765.com/*.m4a*"]}
);


//localStorageに保存
function save_url(url){
    var stored = JSON.parse(localStorage.getItem("voices"));
    var uniqFlag = true;
    //重複チェック
    if(stored != null){
        for(v of stored){
            if(v.url == url){
                uniqFlag = false;
                break;
            }
        }
    }else{
        stored = [];
    }

    if (uniqFlag == true){
        var voice = {url: url, idol: "", text: ""}
        stored.push(voice);
        stored = $.uniqueSort(stored);
        localStorage.setItem("voices",JSON.stringify(stored))
    }
}
