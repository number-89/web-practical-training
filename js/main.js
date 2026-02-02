// //aboutページ

// // ボタンの動きを管理する変数
// let positionX = 0
// let positionY = 0;
// let moveX = true;
// let moveStep = 10;

// const tickEvent = function(){
//     // console.log(`${tickX}秒経過`);
    
//     if(moveX)
//     {
//         // ボタンのX座標を変える

//         positionX += moveStep;
//         // 画面外に出ないように調整
//         if(positionX >= window.innerWidth - aboutBtn.offsetWidth - 10 || positionX <= 0)
//         {
//             moveX = !moveX;
//         }
//     } else {
//         // ボタンのY座標を変える
//         positionY += moveStep;

//         // 画面外に出ないよう方向転換
//         if(positionY >= window.innerHeight - aboutBtn.offsetHeight - 75 || positionY <= 0)
//         {
//             moveX = !moveX;
//             moveStep *= -1;
//         }
//     }
//     aboutBtn.style.translate = `${positionX}px ${positionY}px`;

// }

// const aboutBtn = document.querySelector("#test-btn");
// let timerStarted = false;

// aboutBtn.addEventListener("mouseover", () => {
//     //タイマーを起動する(重複しないようにbool型で状態保持)
//     if(!timerStarted){
//         this.setInterval(tickEvent, 25);
//         timerStarted = true;
//     }
// });


// ハンバーガーメニュー
// 要素の取得
const openBtn = document.querySelector("#menu-open"); // 開くボタン
const closeBtn = document.querySelector("#menu-close"); // 閉じるボタン
const menuPanel = document.querySelector("#menu-panel"); // パネル全体
const menuLists = document.querySelectorAll(".menu-list li"); // リスト配列


// メニュー全体で使いまわすtimingOptions
const menuOptions = {
    duration: 1400, // アニメーション時間
    easing: "ease", // アニメーション加速度
    fill: "forwards" // アニメーション終了状態
};

// メニューを開く処理
openBtn.addEventListener("click", () =>{
    menuPanel.animate(
        {
            translate: ["100vw", 0] // 横移動
        },
        menuOptions
    );

    // リストの内容を一つずつ表示
    menuLists.forEach((menuList, index) => {
        menuList.animate(
            {
                opacity: [0, 1], // 不透明度
                translate: ["0 2rem", 0]// 縦移動　フォントサイズの2倍の位置から原点
            },
            {
                duration: 2400, // アニメーション時間
                delay: index * 500, // 上から順に表示
                easing: "ease",
                fill: "forwards"
            }
        );
    });
});

// メニューを閉じる処理
closeBtn.addEventListener("click", () =>{
    menuPanel.animate(
        {
            translate: [0, "100vw"]
        },
        menuOptions
    );

    // リストの内容を一つずつ表示
    menuLists.forEach((menuList) => {
        menuList.animate(
            {
                opacity: [1, 0], // 不透明度
                translate:[0, "0 2rem"]
            },
            {
                duration: 1000, // アニメーション時間
                fill: "forwards"
            }
        );
    });
});