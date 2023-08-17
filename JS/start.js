document.addEventListener("DOMContentLoaded", start);

function start()
{
  localStorage["history"] = "";
  localStorage["player"] = "white";
  localStorage["!player"] = "black";
  localStorage["move"] = 0;
  localStorage["result"] = "";
  localStorage["dtol"] = "abcdefgh";
  localStorage["rook_1w_moved"] = "false";
  localStorage["rook_2w_moved"] = "false";
  localStorage["rook_1b_moved"] = "false";
  localStorage["rook_2b_moved"] = "false";
  localStorage["choice"] = "";
  localStorage["choiceColor"] = "";
  // localStorage["recs"] = "";
  // localStorage["moveInRecs"] = "";

  document.getElementById('history').innerText = "";
  document.getElementById("result").style.display = "none";

  for(let i = 1; i < 9; ++i)
    for(let j = 1; j < 9; ++j)
    {
      document.getElementById('' + i + j).classList.remove("pawn");
      document.getElementById('' + i + j).classList.remove("knight");
      document.getElementById('' + i + j).classList.remove("bishop");
      document.getElementById('' + i + j).classList.remove("queen");
      document.getElementById('' + i + j).classList.remove("king");
      document.getElementById('' + i + j).classList.remove("rook");
      document.getElementById('' + i + j).classList.remove("whiteF");
      document.getElementById('' + i + j).classList.remove("blackF");
      document.getElementById('' + i + j).classList.remove("choice");
      document.getElementById('' + i + j).classList.remove("selected");
      document.getElementById('' + i + j).classList.add("empty");
    }

  document.getElementById('11').classList.add("rook", "whiteF");
  document.getElementById('11').classList.remove("empty");
  document.getElementById('18').classList.add("rook", "whiteF");
  document.getElementById('18').classList.remove("empty");
  document.getElementById('81').classList.add("rook", "blackF");
  document.getElementById('81').classList.remove("empty");
  document.getElementById('88').classList.add("rook", "blackF");
  document.getElementById('88').classList.remove("empty");

  document.getElementById('12').classList.add("knight", "whiteF");
  document.getElementById('12').classList.remove("empty");
  document.getElementById('17').classList.add("knight", "whiteF");
  document.getElementById('17').classList.remove("empty");
  document.getElementById('82').classList.add("knight", "blackF");
  document.getElementById('82').classList.remove("empty");
  document.getElementById('87').classList.add("knight", "blackF");
  document.getElementById('87').classList.remove("empty");

  document.getElementById('13').classList.add("bishop", "whiteF");
  document.getElementById('13').classList.remove("empty");
  document.getElementById('16').classList.add("bishop", "whiteF");
  document.getElementById('16').classList.remove("empty");
  document.getElementById('83').classList.add("bishop", "blackF");
  document.getElementById('83').classList.remove("empty");
  document.getElementById('86').classList.add("bishop", "blackF");
  document.getElementById('86').classList.remove("empty");

  document.getElementById('14').classList.add("queen", "whiteF");
  document.getElementById('14').classList.remove("empty");
  document.getElementById('15').classList.add("king", "whiteF");
  document.getElementById('15').classList.remove("empty");
  document.getElementById('84').classList.add("queen", "blackF");
  document.getElementById('84').classList.remove("empty");
  document.getElementById('85').classList.add("king", "blackF");
  document.getElementById('85').classList.remove("empty");

  for(let i = '1'; i < '9'; ++i)
  {
    document.getElementById('2' + i).classList.add("pawn", "whiteF");
    document.getElementById('2' + i).classList.remove("empty");
    document.getElementById('7' + i).classList.add("pawn", "blackF");
    document.getElementById('7' + i).classList.remove("empty");
  }
}
