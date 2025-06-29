function get() {

  let input = document.getElementById("pattern").value.toUpperCase();
  let n = 8;
  let result = "";
  let i, j;

  if (input.length === 0 || input.length > 10) {
    document.getElementById("output").innerText = "Please enter 1 to 10 letters only";
    return;
  }

  function getpattern(letter) {
    let pattern = [];
    for (i = 0; i <= n; i++) pattern[i] = "";

    switch (letter) {
      case 'A':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {
            if (j == 0 && !(i == 0) || j == n && !(i == 0) || i == (n / 2) || i == 0 && !(j == 0) && !(j == n)) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;


      case 'B':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {

            if (i == 0 && !(j == n) || i == n && !(j == n) || j == n && !(i == n) && !(i == 0) && !(i == 4) || j == 1 || i == (n / 2) && !(j == 0) && !(j == n)) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;

      case 'C':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {
            if (i == 0 && !(j == 0) || i == n && !(j == 0) || j == 0 && !(i == 0) && !(i == n)) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;

      case 'D':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {
            if (i == 0 && !(j == n) || i == n && !(j == n) || j == 2 || ((j == n) && !(i == n) && !(i == 0))) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'E':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {
            if (i == 0 || i == n || j == 0 || i == (n / 2)) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'F':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {
            if (i == 0 || j == 0 || i == (n / 2)) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'G':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {

            if (i == 0 || j == 0 || i == n || i == (n / 2) && j > 4 || j == n && i > 3) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'H':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {
            if (j == 0 || j == n || i == (n / 2)) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }

        break;
      case 'I':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {
            if (i == 0 || i == n || j == (n / 2)) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'J':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {

            if (i == 0 || j == (n / 2) || i == n && j < 5 || j == 0 && i > 4) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }

        break;
      case 'K':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {
            if (j == 0 || j == (i - 3) || j == (n - i - 3)) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'L':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {
            if (j == 0 || i == n) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'M':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {

            if (j == 0 || j == n || j == i && !(i > 4) || j == n - i && !(i > 4)) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'N':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {
            if (j == 0 || j == n || j == i) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'O':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {
            if (i == 0 && j > 0 && j < n || j == 0 && i > 0 && i < n || j == n && i > 0 && i < n || i == n && j > 0 && j < n) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'P':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {


            if (i == 0 && j < n || j == n && !(i > 4) && i > 0 && i < (n / 2) || j == 0 || i == (n / 2) && j < n) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'Q':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {

            if (i == 0 && j > 0 && j < n || i == (n - 1) && j > 0 && j < n || j == 0 && i > 0 && i < n - 1 || j == n && i > 0 && i < (n - 1) || i >= (n - 3) && j == i) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'R':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {
            if (i == 0 && !(j == n) && !(j == n - 1) || j == 0 || j == n && !(i == 0) && !(i == 4) && !(i == 5) || i == (n / 2) && !(j == n) && !(j == n - 1) && !(i == 5) || i == 5 && !(j == 1) && !(j == 2) && !(j == 3) && !(j == 4) && !(j == 5) && !(j == 6) && !(j == n)) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'S':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {

            if (i == 0 && j > 0 || j == 0 && (i < 4) && i > 0 || i == (n / 2) && j < n && j > 0 || j == n && (i > 4) && i < n || i == n && j < n) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'T':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {
            if (i == 0 || j == (n / 2)) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'U':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {
            if (j == 0 && !(i == n) || j == n && !(i == n) || i == n && !(j == 0) && !(j == n)) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'V':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= 2 * n; j++) {
            if (j == i || j == (2 * n - i)) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'W':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {

            if (j == 0 || j == n || j == i && !(i < 5) || j == (n - i) && !(i < 4)) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'X':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {

            if (j == i || j == (n - i)) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'Y':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {

            if (j == (n - i) || j == i && !(i > 4)) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      case 'Z':
        for (i = 0; i <= n; i++) {
          for (j = 0; j <= n; j++) {
            if (i == 0 || i == n || j == (n - i)) {
              pattern[i] += "*";
            } else {
              pattern[i] += " ";
            }
          }
          pattern[i] += "   ";
        }
        break;
      default:
        for (i = 0; i <= n; i++) {
          pattern[i] = "Invalid";
        }
    }

    return pattern;
  }

  let allpattern = [];
  for (let char of input) {
    allpattern.push(getpattern(char));
  }

  for (i = 0; i <= n; i++) {
    for (let p of allpattern) {
      result += p[i] + " ";
    }
    result += "\n";
  }

  document.getElementById("output").innerText = result;

}


function download() {
  const content = document.getElementById("output").innerText;
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "pattern.txt";
  a.click();
  URL.revokeObjectURL(url);
}