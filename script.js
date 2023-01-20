window.addEventListener("load", main, false);

function main() {
  // Twitterのフォロー中タブ (2023/01/20時点)
  const tabSelectName =
    "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div.css-1dbjc4n.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div.css-1dbjc4n.r-1e5uvyk.r-5zmot > div:nth-child(2) > nav > div > div.css-1dbjc4n.r-1adg3ll.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1udh08x > div > div:nth-child(2) > a";

  // タイマーイベントで要素が読み込まれるまで実行を続ける
  const jsInitCheckTimer = setInterval(jsLoaded, 1000);
  function jsLoaded() {
    const target = document.querySelector(tabSelectName);
    // 対象が無い場合は何もしない
    if (target == null) return;

    //対象が見つかったらタイマー処理解除
    clearInterval(jsInitCheckTimer);
    // タブ切り替えする
    target.click();
  }
}
