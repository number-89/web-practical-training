//aboutページ

// ボタンの動きを管理する変数
let positionX = 0
let positionY = 0;
let moveX = true;
let moveStep = 10;

const tickEvent = function(){
    // console.log(`${tickX}秒経過`);
    
    if(moveX)
    {
        // ボタンのX座標を変える

        positionX += moveStep;
        // 画面外に出ないように調整
        if(positionX >= window.innerWidth - aboutBtn.offsetWidth - 10 || positionX <= 0)
        {
            moveX = !moveX;
        }
    } else {
        // ボタンのY座標を変える
        positionY += moveStep;

        // 画面外に出ないよう方向転換
        if(positionY >= window.innerHeight - aboutBtn.offsetHeight - 75 || positionY <= 0)
        {
            moveX = !moveX;
            moveStep *= -1;
        }
    }
    aboutBtn.style.translate = `${positionX}px ${positionY}px`;

}

const aboutBtn = document.querySelector("#test-btn");
let timerStarted = false;

aboutBtn.addEventListener("mouseover", () => {
    //タイマーを起動する(重複しないようにbool型で状態保持)
    if(!timerStarted){
        this.setInterval(tickEvent, 25);
        timerStarted = true;
    }
});