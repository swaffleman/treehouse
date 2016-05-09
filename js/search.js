var search;
var message2 = '';

function search2 () {
  for (i = 0; i < students.length; i += 1) {
    
    if ( search.toUpperCase()===students[i].Name.toUpperCase()) {
    message2 += '<p>Student name: ' + students[i].Name + '</p>';
    message2 += '<p>Track: ' + students[i].Track + '</p>';
    message2 += '<p>Achievements: ' + students[i].Achievements + '</p>';
    message2 += '<p>Points: ' + students[i].Points + '</p>';
     
} 
  }
}

while (true) {
  search = prompt("Please type the name of a student or type 'quit' to exit.");
  search2();
  print(message2);
   if( search.toLowerCase() === 'quit') {
    break;
  } else {
   alert('Sorry, no one of that name.'); 
  }
  
}
 
  


  
    
    
  
    