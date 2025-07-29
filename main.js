let localStream;
let remoteStream;
let peerConnection;


let init = async() =>{


    // 使用瀏覽器 API 取得使用者的媒體裝置（這裡只開啟攝影機，不開啟麥克風）
    localStream = await navigator.mediaDevices.getUserMedia({video:true, audio:false})


    // 把取得的本地串流（localStream）設定到 HTML 中 id 為 "user-1" 的 video 元素
    // 這樣就可以在畫面上看到自己的影像
    document.getElementById("user-1").srcObject = localStream;
}






let createOffer = async() => {

    peerConnection = new RTCPeerConnection()

    remoteStream = new MediaStream(
    document.getElementById("user-2").srcObject = remoteStream
    )
}





// 呼叫 init 函數，啟動視訊串流
init();
