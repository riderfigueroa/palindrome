
function isPalindrome(str) {
  const clean = str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  const reversed = clean.split('').reverse().join('');
  return clean === reversed;
}

document.getElementById("check-btn").addEventListener("click", () => {
  const input = document.getElementById("text-input").value;
  const result = document.getElementById("result");

  if (!input) {
    alert("Please input a value.");
    return;
  }

  if (isPalindrome(input)) {
    result.textContent = `${input} is a palindrome.`;
  } else {
    result.textContent = `${input} is not a palindrome.`;
  }
});
