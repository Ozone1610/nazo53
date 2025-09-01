function checkAnswer(nextPage, correctAnswers, enableSpecial = false) {
  const userAnswer = document.getElementById('answer').value.trim();
  const message = document.getElementById("message");
  const normalized = userAnswer.toLowerCase();

  if (enableSpecial) {
    const specialWrongAnswers = [
      'January', 'ジャニュアリー','じゃにゅありー',
      'February','フェブラリー','ふぇぶらりー',
      'March','マーチ','まーち',
      'April','エイプリル','えいぷりる',
      'May','メイ','めい',
      'June','ジュン','じゅん',
      'July','ジュライ','じゅらい',
      'August','オーガスト','おーがすと',
      'October','オクトーバー','おくとーばー',
      'Nobember','ノベンバー','ノーベンバー','のべんばー','のーべんばー',
      'December','ディセンバー','でぃせんばー'
    ];
    if (specialWrongAnswers.includes(userAnswer)) {
      message.textContent = "今は9月だよ。";
      return;
    }
  }

  if (correctAnswers.some(ans => ans.toLowerCase() === normalized)) {
    window.location.href = nextPage;
  } else {
    message.textContent = "間違っているようだ。";
  }
}

// ----- モーダル機能 -----
function initModal() {
  const modal = document.getElementById("hintModal");
  const btn = document.getElementById("hintBtn");
  const span = document.querySelector(".close");

  if (!modal || !btn || !span) return; // ページによって存在しない場合もある

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// ページ読み込み時にモーダル初期化
window.addEventListener("DOMContentLoaded", initModal);
