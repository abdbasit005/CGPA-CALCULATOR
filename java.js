document.addEventListener("DOMContentLoaded", () => {
               const units = document.querySelectorAll(".unit-value");
const grades = document.querySelectorAll(".grade-value");


function calculateCGPA() {
               const cgpaDisplay = document.getElementById("cgpa-display");

               let totalQualityPoints = 0;
               let totalUnits = 0;

               units.forEach((unitSelect, index) => {
                              const unit = parseFloat(unitSelect.value);
                              const gradePoint = parseFloat(grades[index].value);


                              if (!isNaN(unit) && !isNaN(gradePoint)) {
                                             totalQualityPoints += unit * gradePoint;
                                             totalUnits += unit;
                              }
               });

               if (totalUnits > 0) {
                              const cgpa = totalQualityPoints / totalUnits;
                              cgpaDisplay.textContent = "CGPA = " + cgpa.toFixed(2);
               }
               else {
                              cgpaDisplay.textContent = "CGPA = 0.00";
               }
}


units.forEach(unit => {
               unit.addEventListener("change", calculateCGPA);
});

grades.forEach(grade => {
               grade.addEventListener("change", calculateCGPA);
});

});
