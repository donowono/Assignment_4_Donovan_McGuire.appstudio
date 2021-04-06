
btnDisplay.onclick=function(s){
    console.log(s)
    query = "SELECT `name` FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=djm42254&query=" + query)
    if (req.status == 200){
    results = JSON.parse(req.responseText)
    if (results.length == 0)
        drpDwnEmployee.value = `There are no employees`
    else {
  for(i = 0; i < results.length; i++)
      drpDwnEmployee.addItem(results[i])
      }
    }
}

drpDwnEmployee.onclick=function(s){
    query = "DELETE FROM customer WHERE `name` = '" + s + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=djm42254&query=" + query)
}

btnRefresh.onclick=function(){
  drpDwnEmployee.clear()
  }
