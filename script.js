const toastBox = document.getElementById("toastBox");
const buttons = document.querySelectorAll(".buttons button");

function showToast(e) {
    const toast = document.createElement("div");
    toast.classList.add("toast");

    if (e.target.innerHTML === "Success") {
        toast.innerHTML = `<i class="fa-solid fa-thumbs-up" style="color: green" ></i>Successfully Submitted</span>`;
        toast.classList.add("success");
    } else if (e.target.innerHTML === `Error`) {
        toast.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color: red"></i>Please Correct The Errors</span>`;
        toast.classList.add("error");
    } else if (e.target.innerHTML === "Invalid") {
        toast.innerHTML = `<i class="fa-solid fa-circle-exclamation invalid" style="color: orange"></i>Invalid Submission</span>`;
        toast.classList.add("invalid");
    }


    toastBox.appendChild(toast);


    setTimeout(() => {
        toast.remove();
    }, 6000);

}


buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        showToast(e);
    });
});