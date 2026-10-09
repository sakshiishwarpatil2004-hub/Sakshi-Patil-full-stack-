const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const rollNo = document.getElementById("rollNo").value.trim();
    const course = document.getElementById("course").value.trim();

    const subject1 = Number(document.getElementById("subject1").value);
    const subject2 = Number(document.getElementById("subject2").value);
    const subject3 = Number(document.getElementById("subject3").value);

    if (
        name === "" ||
        rollNo === "" ||
        course === "" ||
        document.getElementById("subject1").value === "" ||
        document.getElementById("subject2").value === "" ||
        document.getElementById("subject3").value === ""
    ) {
        alert("Please fill all the fields.");
        return;
    }

    if (
        subject1 < 0 || subject1 > 100 ||
        subject2 < 0 || subject2 > 100 ||
        subject3 < 0 || subject3 > 100
    ) {
        alert("Marks must be between 0 and 100.");
        return;
    }

    const total = subject1 + subject2 + subject3;
    const percentage = total / 3;

    let status;

    if (subject1 >= 35 && subject2 >= 35 && subject3 >= 35) {
        status = "Pass";
    } else {
        status = "Fail";
    }

    const student = {
        name: name,
        rollNo: rollNo,
        course: course,
        marks: {
            subject1: subject1,
            subject2: subject2,
            subject3: subject3
        },
        total: total,
        percentage: percentage.toFixed(2),
        status: status
    };

    const studentJSON = JSON.stringify(student);

    localStorage.setItem("studentResult", studentJSON);

    document.getElementById("resultName").textContent = student.name;
    document.getElementById("resultRoll").textContent = student.rollNo;
    document.getElementById("resultCourse").textContent = student.course;
    document.getElementById("resultTotal").textContent = total + " / 300";
    document.getElementById("resultPercentage").textContent = percentage.toFixed(2) + "%";

    const statusElement = document.getElementById("resultStatus");
    statusElement.textContent = status;

    if (status === "Pass") {
        statusElement.className = "pass";
    } else {
        statusElement.className = "fail";
    }

    document.getElementById("resultBox").style.display = "block";

    console.log("Student Object:", student);
    console.log("Student JSON:", studentJSON);
});
