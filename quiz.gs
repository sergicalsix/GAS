function myFunction() {
  // spreadSheetオブジェクトを取得
  let spreadSheetByActive = SpreadsheetApp.getActive()
  let sheetByActive = spreadSheetByActive.getActiveSheet()

  let ans1 = 235
  let ans2 = 542
 
  // user
  let user = sheetByActive.getRange("B2:B30").getValues()
  let score1 = sheetByActive.getRange("C2:C30").getValues()
  let score2 = sheetByActive.getRange("D2:D30").getValues()

  let score = [];
  
  for(var i=0;i<29;i++){  //列のループ
    if (score1[i] < 0){
      score.push([1000000,'hoge'])
    }
    else{
      s1 = Math.abs(score1[i] - ans1)
      s2 = Math.abs(score2[i] - ans2)
      score.push([user[i][0],  s1+s2, [score1[i][0],s1], [score2[i][0],s2]])
    }
  }
  score.sort(function(a, b){
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    return 0;
  });

  Logger.log("順位:[名前,獲得スコア,合計の誤差,1問目の回答と誤差,2問目の回答と誤差]")
  let score_ = 0;
  for(var i=0;i<29;i++){  //列のループ
    if (i<5){
      score_ = 5-i
    }
    if (i<30){
      Logger.log("%s位 %s点 : %s", (i+1).toString(),score_.toString(),score[i])
    } 
    score_ = 0
  }
  let rank_user = [];
  for(var i=0;i<29;i++){  //列のループ
    rank_user.push(score[i][0])
  }
  Logger.log(rank_user)



  
  
}
