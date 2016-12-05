function doitu() {
  var words= ["ド","イ","ツ","の","ト","リ"],
    wordsStr= words.toString(),
    doitunotori= _.range(words.length),
    i= 0;

    $("pre").empty();

  do
  {
    var bakatare= _.sample(words);
    $("pre").append(bakatare);
    i=(i+1)|0;

    var temp= _.rest(doitunotori);
    temp.push(bakatare);
    doitunotori= temp;

  }while(doitunotori.toString()!==wordsStr);

  $("pre").append("\n\n");

  var totsuzennnodoitu= ["＿人人人人人人人人＿\n","＞　ドイツのトリ　＜\n","￣Y^Y^Y^Y^Y^Y^Y￣\n"];
  jQuery.each(totsuzennnodoitu, function(){
    $("pre").append(this);
  });

  $("pre").append("\nあなたは"+i+"羽目にドイツのトリを発見しました。");

};
