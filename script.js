function answer(button, correct) {
  const result = button.parentElement.querySelector(".result");

  if (correct) {
    result.textContent = "🎉 CORRECT! You remembered!";
    result.className = "result correct";
  } else {
    result.textContent = "❌ NOPE! Try again 👀";
    result.className = "result wrong";
  }
}