// result.js

window.addEventListener("load", function () {
  const resultElement = document.getElementById("result");
  const restartButton = document.getElementById("restart-button");
  const mbtiResult = localStorage.getItem("mbti_result");

  if (mbtiResult) {
    resultElement.textContent = `${mbtiResult}입니다!`;
    restartButton.textContent = "다시하기";
  } else {
    resultElement.textContent = "아직 테스트를 진행하지 않았습니다!";
    restartButton.textContent = "테스트 하러 가기";
  }
});
