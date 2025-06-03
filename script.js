const timeline = document.getElementById('timeline');
const markets = document.querySelectorAll('.market');

function updateView(value) {
  markets.forEach(market => {
    const desc = market.querySelector('.description');
    const images = market.querySelectorAll('.market-img');

    // 切換描述
    const pastText = desc.getAttribute('data-past');
    const presentText = desc.getAttribute('data-present');
    desc.textContent = value === "1" ? pastText : presentText;

    // 切換圖片
    images[0].classList.toggle('hidden', value !== "1");
    images[1].classList.toggle('hidden', value === "1");
  });
}

// 初始顯示
updateView(timeline.value);

// 監聽時間軸變化
timeline.addEventListener('input', (e) => {
  updateView(e.target.value);
});




