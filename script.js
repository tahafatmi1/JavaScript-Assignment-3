 var temp = prompt("Enter the temperature in Celsius")
if (temp>30) {alert("It's a hot day")
    
} else { alert("The weather is moderate")
    }

function processForm() {
    var subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
    var subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
    var subject3 = parseFloat(prompt("Enter marks for Subject 3:"));


    var totalMarks = subject1 + subject2 + subject3;
    var percentage = (totalMarks / 300) * 100;


    document.write('<table>');
    document.write('<tr><th>Subject</th><th>Marks</th></tr>');
    document.write('<tr><td>Subject 1</td><td>' + subject1 + '</td></tr>');
    document.write('<tr><td>Subject 2</td><td>' + subject2 + '</td></tr>');
    document.write('<tr><td>Subject 3</td><td>' + subject3 + '</td></tr>');
    document.write('<tr><th>Total</th><th>' + totalMarks + '</th></tr>');
    document.write('<tr><th>Percentage</th><th>' + percentage.toFixed(2) + '%</th></tr>');
   
    document.write('</table>');
}


processForm();
