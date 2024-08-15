function formValidation() {
  let inputweight = document.getElementById("input-weight").value;
  let inputheightcm = document.getElementById("input-height").value;
  let resultBMI = document.getElementById("BMI");

  console.log(`masukkan BB anda: ${inputweight}`);
  console.log(`masukkan TB anda: ${inputheightcm}`);

  if (inputweight == "" || inputheightcm == "") {
    alert("masukkan nilai TB dan BB anda");
  }

  if (inputweight > 0 && inputheightcm > 0) {
    const inputheightm = inputheightcm / 100; // ubah satuan cm ke m
    const resultBMI = inputweight / (inputheightm * inputheightm);
    let category = "";

    if (resultBMI < 18.5) {
      category = "sangat kurus";
    } else if (resultBMI < 24.9) {
      category = "ideal";
    } else if (resultBMI < 29.9) {
      category = "gemuk";
    } else {
      category = "obesitas";
    }

    resultBMI.innerHTML = `nilai BMI anda adalah ${resultBMI.toFixed(
      2
    )} - ${category}`;
  } else {
    resultBMI.innerHTML = "masukkan nilai TB dan BB anda.";
  }
}

function reset() {
  document.getElementById("input-weight").reset;
  document.getElementById("input-height").reset;
}
