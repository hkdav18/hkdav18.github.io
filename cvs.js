    var na = prompt("Please enter your name and age").split(",")

var csvFileData = [];  
 csvFileData.push(na)
     
 //create a user-defined function to download CSV file   
 function download_csv_file() {  
   
     //define the heading for each row of the data  
     var csv = 'Name and Age\n';  
       
     //merge the data with CSV  
     csvFileData.forEach(function(row) {  
             csv += row.join(',');  
             csv += "\n";  
     });  
    
     //display the created CSV data on the web browser   
     document.write(csv);  
   
      
     var hiddenElement = document.createElement('a');  
     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
     hiddenElement.target = '_blank';  
       
     //provide the name for the CSV file to be downloaded  
     hiddenElement.download = 'HK.csv';  
     hiddenElement.click();  
 }  