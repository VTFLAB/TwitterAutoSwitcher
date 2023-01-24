window.addEventListener("load", main, false);

async function main() {
  // Twitterのフォロー中タブ (2023/01/20時点)
  const tabSelectName =
    "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div.css-1dbjc4n.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div.css-1dbjc4n.r-1e5uvyk.r-5zmot > div:nth-child(2) > nav > div > div.css-1dbjc4n.r-1adg3ll.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1udh08x > div > div:nth-child(2) > a";
  // 対象がアクティブになるまで待機してから切り替え実行
  await waitForElement(tabSelectName);
}

async function waitForElement(tabSelectName) {
  await new Promise((resolve) => {
    const interval = setInterval(() => {
      // 対象(フォロー中タブ aタグ)
      const target = document.querySelector(tabSelectName);
      // 要素が見つからない場合を考慮
      if (!target) return;
      // 対象のスタイル
      const elementStyle = window.getComputedStyle(target);
      // 対象が存在していて、かつポインタイベントがnone以外の場合
      if (target && elementStyle.pointerEvents !== "none") {
        // 解除
        clearInterval(interval);
        // タブ切り替え
        target.click();
        resolve();
      }
    }, 1000);
  });
}
