let req = ""
let query = ""
let results = ""
let pw = "Bolognabaddie37!"
let netID = "djm42254"

let states = [ "AK",
                      "AL",
                      "AR",
                      "AS",
                      "AZ",
                      "CA",
                      "CO",
                      "CT",
                      "DC",
                      "DE",
                      "FL",
                      "GA",
                      "GU",
                      "HI",
                      "IA",
                      "ID",
                      "IL",
                      "IN",
                      "KS",
                      "KY",
                      "LA",
                      "MA",
                      "MD",
                      "ME",
                      "MI",
                      "MN",
                      "MO",
                      "MS",
                      "MT",
                      "NC",
                      "ND",
                      "NE",
                      "NH",
                      "NJ",
                      "NM",
                      "NV",
                      "NY",
                      "OH",
                      "OK",
                      "OR",
                      "PA",
                      "PR",
                      "RI",
                      "SC",
                      "SD",
                      "TN",
                      "TX",
                      "UT",
                      "VA",
                      "VI",
                      "VT",
                      "WA",
                      "WI",
                      "WV",
                      "WY"]


drpStates.onshow=function(){
  drpStates.clear()
  for(i = 0; i < states.length; i++)
      drpStates.addItem(states[i])
} 
    

drpStates.onclick=function(s){
    console.log(s)
    query = "SELECT `name` FROM customer WHERE `state` = '" + s + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=djm42254&query=" + query)
    if (req.status == 200){
    results = JSON.parse(req.responseText)
    if (results.length == 0)
        lstEmployee.value = `There are no employees from that state in the database`
    else {
        for (i = 0; i < results.length; i++)
            lstEmployee.addItem(results[i])
     }
    }
}