function StartBt(event){
  event.preventDefault(); // クリック直後にページ飛ばないようにする

  const audio = new Audio("RPG_Start.mp3");
  audio.play();

  //再生が終わったら次のページ
  audio.onended = ()=>{
    window.location.href="play.html";
  }
}