let babyNames = ["Charlie", "Wendy", "Howard", "Annie", "Chris", "Sunny", "Pat", "Wilma", "Jared", "Maggie", "Max", "Sarah", "Kate", "Grace", "James", "John", "Brayden", "Claire", "Abby", "Dono"]
let newBabyNames = []

txtInstructions.onchange = function(){
    txtInstructions.value = `Pick 5 names from the list and click submit when finished`
}
selBabyNames.onshow=function(){
  for (i = 0; i < babyNames.length; i++)
      selBabyNames.addItem(babyNames[i])
}

selBabyNames.onclick=function(s){
  for(i = 0; i < selBabyNames.text.length; i++)
      newBabyNames.push(selBabyNames.text[i])
}
btnDone.onclick=function(){
  ChangeForm(favBabyNames)
}