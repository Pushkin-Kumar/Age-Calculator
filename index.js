const calculateBtn = document.getElementById("btn");
const birthdayEle = document.getElementById("dob");
const result = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEle.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    result.innerText = `Your Age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}
function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if (
    month < 0 ||
    (month == 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}

calculateBtn.addEventListener("click", calculateAge);
