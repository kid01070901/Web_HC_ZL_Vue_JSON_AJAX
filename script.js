new Vue({
    el: "#content",
    data: {
        datas: null
    },
    // 所有元素顯示後執行一次
    mounted() {
        // 新增 XML 物件
        var xhr = new XMLHttpRequest();
        // 開啟並指定 API 網址
        xhr.open("GET", "https://data.tycg.gov.tw/api/v1/rest/datastore/a7db5f95-ac1c-4597-8bf5-c5be0e57ae5f?format=json");
        // 傳送要求
        xhr.send();
    }
});

console.log("!!!");