var search;
var message = ''; 
var students = [
  {
    Name: 'Steve', 
    Track: 'iOS' , 
    Achievements: 565 , 
    Points: 57545 
  },
  {
    Name: 'James', 
    Track: 'Fullstack', 
    Achievements: 738 , 
    Points: 5467 
  },
  {
    Name: 'Ron', 
    Track: 'Eating' , 
    Achievements: 9456, 
    Points: 657 
  },
  {
    Name: 'Murhpy', 
    Track: 'Sleeping', 
    Achievements: 56 , 
    Points: 6789 
  },
  {
    Name: 'Wolfmother', 
    Track: 'ThebestThings', 
    Achievements: 798, 
    Points: 345
  }
];

function print(message) {
  document.getElementById('output');
  output.innerHTML = message;
}

for (var i = 0; i < students.length; i += 1) {
  message += '<p><b>Student: ' + students[i].Name + '</b></p>';
  message += '<p>Track: ' + students[i].Track + '</p>';
  message += '<p>Acheivements: ' + students[i].Achievements + '</p>';
  message += '<p>Points: ' + students[i].Points + '</p>';
  }
 
//* Here is where the print function would go with message*//
            



