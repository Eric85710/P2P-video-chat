let localStream;
let remoteStream;
let peerConnection;


const servers = {
    iceServers:[
        {
            urls:["stun:stun1.1.google.com:19302", "stun:stun2.1.google.com:19302"]
        }
    ]
}

    // get the cam and show it on screen
let init = async() =>{


    // 使用瀏覽器 API 取得使用者的媒體裝置（這裡只開啟攝影機，不開啟麥克風）
    localStream = await navigator.mediaDevices.getUserMedia({video:true, audio:false})


    // 把取得的本地串流（localStream）設定到 HTML 中 id 為 "user-1" 的 video 元素
    // 這樣就可以在畫面上看到自己的影像
    document.getElementById("user-1").srcObject = localStream;


    createOffer()
}





    // 建立一個 async 函式，負責創建 WebRTC offer，發起端會呼叫這個函式
let createOffer = async() => {

    peerConnection = new RTCPeerConnection(servers)

    // 建立一個空的 MediaStream，準備拿來裝「對方傳過來」的影像/音訊串流
    remoteStream = new MediaStream()

    // 把這個空的 remoteStream 放到 id="user-2" 的 <video> 元素上（先準備好）
    document.getElementById("user-2").srcObject = remoteStream

    // 向瀏覽器要求創建一個 offer（SDP：描述本地端的能力與媒體格式）
    let offer = await peerConnection.createOffer()

    // 這是建立 WebRTC 連線的第一步（之後會把這個 offer 傳給遠端對等）
    await peerConnection.setLocalDescription(offer)


    console.log("offer:", offer)
    
}





// 呼叫 init 函數，啟動視訊串流
init();
