

txtInstructions2.onchange=function(){
  txtinstructions2.value = `Pick your favorite name!`
  
}

drpDwnFavNames.onshow=function(){
  for(i = 0; i < selBabyNames.length; i++)
      drpDwnFavNames.addItem(selBabyNames[i])
}

drpDwnFavNames.onclick=function(s){
  lblName.value = `Your favorite baby name is ${s}`
  imgBaby.hidden = False
}
