function possibleFromSides()
{
  let a = [...document.getElementsByClassName('possible'),
          ...document.getElementsByClassName('sbottom'),
          ...document.getElementsByClassName('stop'),
          ...document.getElementsByClassName('sleft'),
          ...document.getElementsByClassName('sright')];

  for(let x of a)
  {
    if(x.id[0] - 0 > 1 && document.getElementById('' + (x.id[0] - 1) + x.id[1]).classList.contains('possible')) x.classList.add('sbottom')
    else x.classList.remove('sbottom');
    if(x.id[0] - 0 < 8 && document.getElementById('' + (x.id[0] - 0 + 1) + x.id[1]).classList.contains('possible')) x.classList.add('stop')
    else x.classList.remove('stop');
    if(x.id[1] - 0 > 1 && document.getElementById('' + x.id[0] + (x.id[1] - 1)).classList.contains('possible')) x.classList.add('sleft')
    else x.classList.remove('sleft');
    if(x.id[1] - 0 < 8 && document.getElementById('' + x.id[0] + (x.id[1] - 0 + 1)).classList.contains('possible')) x.classList.add('sright')
    else x.classList.remove('sright');
  }
}

function pawnClick(y, x, checkIfCanMove = false)
{
  let k = localStorage["player"] == "white" ? 1 : -1;

  if(document.getElementById("" + (y + 1 * k) + x).classList.contains("empty"))
  {
    if(isNotCheck(y, x, (y + 1 * k), x))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + (y + 1 * k) + x).classList.add("possible");
    }

    if((y == '2' && k > 0 || y == '7' && k < 0) && document.getElementById("" + (y + 2 * k) + x).classList.contains("empty"))
      if(isNotCheck(y, x, (y + 2 * k), x))
      {
        if(checkIfCanMove) return true
        else document.getElementById("" + (y + 2 * k) + x).classList.add("possible");
      }
  }

  if(x < 8 && document.getElementById("" + (y + 1 * k) + (x + 1)).classList.contains(localStorage["!player"] + 'F'))
    if(isNotCheck(y, x, (y + 1 * k), (x + 1)))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + (y + 1 * k) + (x + 1)).classList.add("possible");
    }

  if(x > 1 && document.getElementById("" + (y + 1 * k) + (x - 1)).classList.contains(localStorage["!player"] + 'F'))
    if(isNotCheck(y, x, (y + 1 * k), (x - 1)))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + (y + 1 * k) + (x - 1)).classList.add("possible");
    }

  if(localStorage["history"].length > 0)
  {
    let his = localStorage["history"];
    let len = his.length;
    let c = (his[len - 1] == '+' || his[len - 1] == '#' ? 1 : 0);
    let s = his.substr(len - 6 - c, len);

    if(s[0] == ' ') //if the last move was a pawn move and not the first move
    {
      if(localStorage["player"] == "white" && y == 5)
      {
        if(s[2] == '7' && s[5] == '5')
        {
          if(x - 0 > 1 && s[1] == localStorage["dtol"][x - 2])
          {
            if(isNotCheck(y, x, (y + 1), (x - 1)))
            {
              if(checkIfCanMove) return true
              else document.getElementById("" + (y + 1) + (x - 1)).classList.add("possible");
            }
          }
          else if(x - 0 < 8 && s[1] == localStorage["dtol"][x - 0])
          {
            if(isNotCheck(y, x, (y + 1), (x + 1)))
            {
              if(checkIfCanMove) return true
              else document.getElementById("" + (y + 1) + (x + 1)).classList.add("possible");
            }
          }
        }
      }
      else if(localStorage["player"] == "black" && y == 4)
      {
        if(s[2] == '2' && s[5] == '4')
        {
          if(x - 0 > 1 && s[1] == localStorage["dtol"][x - 2])
          {
            if(isNotCheck(y, x, (y - 1), (x - 1)))
            {
              if(checkIfCanMove) return true
              else document.getElementById("" + (y - 1) + (x - 1)).classList.add("possible");
            }
          }
          else if(x - 0 < 8 && s[1] == localStorage["dtol"][x - 0])
          {
            if(isNotCheck(y, x, (y - 1), (x + 1)))
            {
              if(checkIfCanMove) return true
              else document.getElementById("" + (y - 1) + (x + 1)).classList.add("possible");
            }
          }
        }
      }
    }
  }

  if(checkIfCanMove)
    return false
  else possibleFromSides();
}

function knightClick(y, x, checkIfCanMove = false)
{
  if(y < 7 && x > 1 && (document.getElementById("" + (y + 2) + (x - 1)).classList.contains(localStorage["!player"] + 'F') || document.getElementById("" + (y + 2) + (x - 1)).classList.contains("empty")))
    if(isNotCheck(y, x, (y + 2), (x - 1)))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + (y + 2) + (x - 1)).classList.add("possible");
    }

  if(y < 7 && x < 8 && (document.getElementById("" + (y + 2) + (x + 1)).classList.contains(localStorage["!player"] + 'F') || document.getElementById("" + (y + 2) + (x + 1)).classList.contains("empty")))
    if(isNotCheck(y, x, (y + 2), (x + 1)))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + (y + 2) + (x + 1)).classList.add("possible");
    }

  if(y < 8 && x > 2 && (document.getElementById("" + (y + 1) + (x - 2)).classList.contains(localStorage["!player"] + 'F') || document.getElementById("" + (y + 1) + (x - 2)).classList.contains("empty")))
    if(isNotCheck(y, x, (y + 1), (x - 2)))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + (y + 1) + (x - 2)).classList.add("possible");
    }

  if(y < 8 && x < 7 && (document.getElementById("" + (y + 1) + (x + 2)).classList.contains(localStorage["!player"] + 'F') || document.getElementById("" + (y + 1) + (x + 2)).classList.contains("empty")))
    if(isNotCheck(y, x, (y + 1), (x + 2)))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + (y + 1) + (x + 2)).classList.add("possible");
    }

  if(y > 2 && x > 1 && (document.getElementById("" + (y - 2) + (x - 1)).classList.contains(localStorage["!player"] + 'F') || document.getElementById("" + (y - 2) + (x - 1)).classList.contains("empty")))
    if(isNotCheck(y, x, (y - 2), (x - 1)))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + (y - 2) + (x - 1)).classList.add("possible");
    }

  if(y > 2 && x < 8 && (document.getElementById("" + (y - 2) + (x + 1)).classList.contains(localStorage["!player"] + 'F') || document.getElementById("" + (y - 2) + (x + 1)).classList.contains("empty")))
    if(isNotCheck(y, x, (y - 2), (x + 1)))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + (y - 2) + (x + 1)).classList.add("possible");
    }

  if(y > 1 && x > 2 && (document.getElementById("" + (y - 1) + (x - 2)).classList.contains(localStorage["!player"] + 'F') || document.getElementById("" + (y - 1) + (x - 2)).classList.contains("empty")))
    if(isNotCheck(y, x, (y - 1), (x - 2)))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + (y - 1) + (x - 2)).classList.add("possible");
    }

  if(y > 1 && x < 7 && (document.getElementById("" + (y - 1) + (x + 2)).classList.contains(localStorage["!player"] + 'F') || document.getElementById("" + (y - 1) + (x + 2)).classList.contains("empty")))
    if(isNotCheck(y, x, (y - 1), (x + 2)))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + (y - 1) + (x + 2)).classList.add("possible");
    }

    if(checkIfCanMove)
      return false
    else possibleFromSides();
}

function rookClick(y, x, checkIfCanMove = false)
{
  for(let i = x - 1; i > 0; --i)
  {
    if(document.getElementById("" + y + i).classList.contains(localStorage["player"] + 'F')) break;
    if(document.getElementById("" + y + i).classList.contains(localStorage["!player"] + 'F'))
    {
      if(isNotCheck(y, x, y, i))
      {
        if(checkIfCanMove) return true
        else document.getElementById("" + y + i).classList.add("possible");
      }
      break;
    }
    if(isNotCheck(y, x, y, i))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + y + i).classList.add("possible");
    }
  }

  for(let i = x + 1; i < 9; ++i)
  {
    if(document.getElementById("" + y + i).classList.contains(localStorage["player"] + 'F')) break;
    if(document.getElementById("" + y + i).classList.contains(localStorage["!player"] + 'F'))
    {
      if(isNotCheck(y, x, y, i))
      {
        if(checkIfCanMove) return true
        else document.getElementById("" + y + i).classList.add("possible");
      }
      break;
    }
    if(isNotCheck(y, x, y, i))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + y + i).classList.add("possible");
    }
  }

  for(let i = y - 1; i > 0; --i)
  {
    if(document.getElementById("" + i + x).classList.contains(localStorage["player"] + 'F')) break;
    if(document.getElementById("" + i + x).classList.contains(localStorage["!player"] + 'F'))
    {
      if(isNotCheck(y, x, i, x))
      {
        if(checkIfCanMove) return true
        else document.getElementById("" + i + x).classList.add("possible");
      }
      break;
    }
    if(isNotCheck(y, x, i, x))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + i + x).classList.add("possible");
    }
  }

  for(let i = y + 1; i < 9; ++i)
  {
    if(document.getElementById("" + i + x).classList.contains(localStorage["player"] + 'F')) break;
    if(document.getElementById("" + i + x).classList.contains(localStorage["!player"] + 'F'))
    {
      if(isNotCheck(y, x, i, x))
      {
        if(checkIfCanMove) return true
        else document.getElementById("" + i + x).classList.add("possible");
      }
      break;
    }
    if(isNotCheck(y, x, i, x))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + i + x).classList.add("possible");
    }
  }

  if(checkIfCanMove)
    return false
  else possibleFromSides();
}

function bishopClick(y, x, checkIfCanMove = false)
{
  for(let i = x - 1, j = y - 1; i > 0 && j > 0; --i, --j)
  {
    if(document.getElementById("" + j + i).classList.contains(localStorage["player"] + 'F')) break;
    if(document.getElementById("" + j + i).classList.contains(localStorage["!player"] + 'F'))
    {
      if(isNotCheck(y, x, j, i))
      {
        if(checkIfCanMove) return true
        else document.getElementById("" + j + i).classList.add("possible");
      }
      break;
    }
    if(isNotCheck(y, x, j, i))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + j + i).classList.add("possible");
    }
  }

  for(let i = x + 1, j = y + 1; i < 9 && j < 9; ++i, ++j)
  {
    if(document.getElementById("" + j + i).classList.contains(localStorage["player"] + 'F')) break;
    if(document.getElementById("" + j + i).classList.contains(localStorage["!player"] + 'F'))
    {
      if(isNotCheck(y, x, j, i))
      {
        if(checkIfCanMove) return true
        else document.getElementById("" + j + i).classList.add("possible");
      }
      break;
    }
    if(isNotCheck(y, x, j, i))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + j + i).classList.add("possible");
    }
  }

  for(let i = x - 1, j = y + 1; i > 0 && j < 9; --i, ++j)
  {
    if(document.getElementById("" + j + i).classList.contains(localStorage["player"] + 'F')) break;
    if(document.getElementById("" + j + i).classList.contains(localStorage["!player"] + 'F'))
    {
      if(isNotCheck(y, x, j, i))
      {
        if(checkIfCanMove) return true
        else document.getElementById("" + j + i).classList.add("possible");
      }
      break;
    }
    if(isNotCheck(y, x, j, i))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + j + i).classList.add("possible");
    }
  }

  for(let i = x + 1, j = y - 1; i < 9 && j > 0; ++i, --j)
  {
    if(document.getElementById("" + j + i).classList.contains(localStorage["player"] + 'F')) break;
    if(document.getElementById("" + j + i).classList.contains(localStorage["!player"] + 'F'))
    {
      if(isNotCheck(y, x, j, i))
      {
        if(checkIfCanMove) return true
        else document.getElementById("" + j + i).classList.add("possible");
      }
      break;
    }
    if(isNotCheck(y, x, j, i))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + j + i).classList.add("possible");
    }
  }

  return false;
}

function kingClick(y, x, checkIfCanMove = false)
{
  if(x > 1 && y > 1 && (document.getElementById("" + (y - 1) + (x - 1)).classList.contains("empty") || document.getElementById("" + (y - 1) + (x - 1)).classList.contains(localStorage["!player"] + 'F')))
    if(isNotCheck(y, x, (y - 1), (x - 1)))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + (y - 1) + (x - 1)).classList.add("possible");
    }

  if(y > 1 && (document.getElementById("" + (y - 1) + x).classList.contains("empty") || document.getElementById("" + (y - 1) + x).classList.contains(localStorage["!player"] + 'F')))
    if(isNotCheck(y, x, (y - 1), x))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + (y - 1) + x).classList.add("possible");
    }

  if(x < 8 && y > 1 && (document.getElementById("" + (y - 1) + (x + 1)).classList.contains("empty") || document.getElementById("" + (y - 1) + (x + 1)).classList.contains(localStorage["!player"] + 'F')))
    if(isNotCheck(y, x, (y - 1), (x + 1)))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + (y - 1) + (x + 1)).classList.add("possible");
    }

  if(x > 1 && (document.getElementById("" + y + (x - 1)).classList.contains("empty") || document.getElementById("" + y + (x - 1)).classList.contains(localStorage["!player"] + 'F')))
  {
    if(isNotCheck(y, x, y, (x - 1)))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + y + (x - 1)).classList.add("possible");
    }

    if(localStorage["history"].length > 0)
    {
      if(!localStorage["history"].includes('. K') && localStorage["player"] == "white")
      {
        if(document.getElementById("" + y + (x - 1)).classList.contains("empty") && document.getElementById("" + y + (x - 2)).classList.contains("empty") && document.getElementById("" + y + (x - 3)).classList.contains("empty") && localStorage["rook_1w_moved"] == "false" && document.getElementById("" + y + 1).classList.contains("rook"))
          if(isNotCheck(y, x, y, x) && isNotCheck(y, x, y, (x - 1)) && isNotCheck(y, x, y, (x - 2)))
          {
            if(checkIfCanMove) return true
            else document.getElementById("" + y + (x - 2)).classList.add("possible");
          }
      }
      else if(!localStorage["history"].includes('; K') && localStorage["player"] == "black")
      {
        if(document.getElementById("" + y + (x - 1)).classList.contains("empty") && document.getElementById("" + y + (x - 2)).classList.contains("empty") && document.getElementById("" + y + (x - 3)).classList.contains("empty") && localStorage["rook_1b_moved"] == "false" && document.getElementById("" + y + 1).classList.contains("rook"))
          if(isNotCheck(y, x, y, x) && isNotCheck(y, x, y, (x - 1)) && isNotCheck(y, x, y, (x - 2)))
          if(isNotCheck(y, x, y, (x + 1)))
          {
            if(checkIfCanMove) return true
            else document.getElementById("" + y + (x - 2)).classList.add("possible");
          }
      }
    }
  }

  if(x < 8 && (document.getElementById("" + y + (x + 1)).classList.contains("empty") || document.getElementById("" + y + (x + 1)).classList.contains(localStorage["!player"] + 'F')))
  {
    if(isNotCheck(y, x, y, (x + 1)))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + y + (x + 1)).classList.add("possible");
    }

    if(localStorage["history"].length > 0)
    {
      if(!localStorage["history"].includes('. K') && localStorage["player"] == "white")
      {
        if(document.getElementById("" + y + (x + 1)).classList.contains("empty") && document.getElementById("" + y + (x + 2)).classList.contains("empty") && localStorage["rook_2w_moved"] == "false" && document.getElementById("" + y + 8).classList.contains("rook"))
          if(isNotCheck(y, x, y, x) && isNotCheck(y, x, y, (x + 1)) && isNotCheck(y, x, y, (x + 2)))
          {
            if(checkIfCanMove) return true
            else document.getElementById("" + y + (x + 2)).classList.add("possible");
          }
      }
      else if(!localStorage["history"].includes('; K') && localStorage["player"] == "black")
      {
        if(document.getElementById("" + y + (x + 1)).classList.contains("empty") && document.getElementById("" + y + (x + 2)).classList.contains("empty") && localStorage["rook_2b_moved"] == "false" && document.getElementById("" + y + 8).classList.contains("rook"))
          if(isNotCheck(y, x, y, x) && isNotCheck(y, x, y, (x + 1)) && isNotCheck(y, x, y, (x + 2)))
          {
            if(checkIfCanMove) return true
            else document.getElementById("" + y + (x + 2)).classList.add("possible");
          }
      }
    }
  }

  if(x > 1 && y < 8 && (document.getElementById("" + (y + 1) + (x - 1)).classList.contains("empty") || document.getElementById("" + (y + 1) + (x - 1)).classList.contains(localStorage["!player"] + 'F')))
    if(isNotCheck(y, x, (y + 1), (x - 1)))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + (y + 1) + (x - 1)).classList.add("possible");
    }

  if(y < 8 && (document.getElementById("" + (y + 1) + x).classList.contains("empty") || document.getElementById("" + (y + 1) + x).classList.contains(localStorage["!player"] + 'F')))
    if(isNotCheck(y, x, (y + 1), x))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + (y + 1) + x).classList.add("possible");
    }

  if(x < 8 && y < 8 && (document.getElementById("" + (y + 1) + (x + 1)).classList.contains("empty") || document.getElementById("" + (y + 1) + (x + 1)).classList.contains(localStorage["!player"] + 'F')))
    if(isNotCheck(y, x, (y + 1), (x + 1)))
    {
      if(checkIfCanMove) return true
      else document.getElementById("" + (y + 1) + (x + 1)).classList.add("possible");
    }

  if(checkIfCanMove)
    return false
  else possibleFromSides();
}

function queenClick(y, x, checkIfCanMove = false)
{
  let b = bishopClick(y, x, checkIfCanMove);
  let r = rookClick(y, x, checkIfCanMove);

  return b || r;
}

function isNotCheck(yFrom, xFrom, yTo, xTo, isEnemy = false)
{
  let selected = document.getElementById("" + yFrom + xFrom);
  let colorF = isEnemy ? (selected.classList.contains("whiteF") ? "blackF" : "whiteF") : (selected.classList.contains("whiteF") ? "whiteF" : "blackF");
  let notColorF = isEnemy ? (selected.classList.contains("whiteF") ? "whiteF" : "blackF") : (selected.classList.contains("whiteF") ? "blackF" : "whiteF");
  let king = document.getElementsByClassName("king")[0].classList.contains(colorF) ? document.getElementsByClassName("king")[0] : document.getElementsByClassName("king")[1];
  let isKingsMove = king.id == "" + yFrom + xFrom;

  let x = isKingsMove ? xTo : (king.id[1] - 0);
  let y = isKingsMove ? yTo : (king.id[0] - 0);

  if(y < 7 && x > 1 && (document.getElementById("" + (y + 2) + (x - 1)).classList.contains(notColorF) && document.getElementById("" + (y + 2) + (x - 1)).classList.contains("knight") || isEnemy && (y + 2) == yTo && (x - 1) == xTo && selected.classList.contains("knight")))
    return false;

  if(y < 7 && x < 8 && (document.getElementById("" + (y + 2) + (x + 1)).classList.contains(notColorF) && document.getElementById("" + (y + 2) + (x + 1)).classList.contains("knight") || isEnemy && (y + 2) == yTo && (x + 1) == xTo && selected.classList.contains("knight")))
    return false;

  if(y < 8 && x > 2 && (document.getElementById("" + (y + 1) + (x - 2)).classList.contains(notColorF) && document.getElementById("" + (y + 1) + (x - 2)).classList.contains("knight") || isEnemy && (y + 1) == yTo && (x - 2) == xTo && selected.classList.contains("knight")))
    return false;

  if(y < 8 && x < 7 && (document.getElementById("" + (y + 1) + (x + 2)).classList.contains(notColorF) && document.getElementById("" + (y + 1) + (x + 2)).classList.contains("knight") || isEnemy && (y + 1) == yTo && (x + 2) == xTo && selected.classList.contains("knight")))
    return false;

  if(y > 2 && x > 1 && (document.getElementById("" + (y - 2) + (x - 1)).classList.contains(notColorF) && document.getElementById("" + (y - 2) + (x - 1)).classList.contains("knight") || isEnemy && (y - 2) == yTo && (x - 1) == xTo && selected.classList.contains("knight")))
    return false;

  if(y > 2 && x < 8 && (document.getElementById("" + (y - 2) + (x + 1)).classList.contains(notColorF) && document.getElementById("" + (y - 2) + (x + 1)).classList.contains("knight") || isEnemy && (y - 2) == yTo && (x + 1) == xTo && selected.classList.contains("knight")))
    return false;

  if(y > 1 && x > 2 && (document.getElementById("" + (y - 1) + (x - 2)).classList.contains(notColorF) && document.getElementById("" + (y - 1) + (x - 2)).classList.contains("knight") || isEnemy && (y - 1) == yTo && (x - 2) == xTo && selected.classList.contains("knight")))
    return false;

  if(y > 1 && x < 7 && (document.getElementById("" + (y - 1) + (x + 2)).classList.contains(notColorF) && document.getElementById("" + (y - 1) + (x + 2)).classList.contains("knight") || isEnemy && (y - 1) == yTo && (x + 2) == xTo && selected.classList.contains("knight")))
    return false;

  if(colorF == "whiteF")
  {
    if(y < 8)
    {
      if(x > 1)
      {
        if(document.getElementById("" + (y + 1) + (x - 1)).classList.contains(notColorF) && document.getElementById("" + (y + 1) + (x - 1)).classList.contains("pawn") || isEnemy && (y + 1) == yTo && (x - 1) == xTo && selected.classList.contains("pawn")) return false;
      }

      if(x < 8)
      {
        if(document.getElementById("" + (y + 1) + (x + 1)).classList.contains(notColorF) && document.getElementById("" + (y + 1) + (x + 1)).classList.contains("pawn") || isEnemy && (y + 1) == yTo && (x + 1) == xTo && selected.classList.contains("pawn")) return false;
      }
    }
  }

  if(colorF == "blackF")
  {
    if(y > 1)
    {
      if(x > 1)
      {
        if(document.getElementById("" + (y - 1) + (x - 1)).classList.contains(notColorF) && document.getElementById("" + (y - 1) + (x - 1)).classList.contains("pawn") || isEnemy && (y - 1) == yTo && (x - 1) == xTo && selected.classList.contains("pawn")) return false;
      }

      if(x < 8)
      {
        if(document.getElementById("" + (y - 1) + (x + 1)).classList.contains(notColorF) && document.getElementById("" + (y - 1) + (x + 1)).classList.contains("pawn") || isEnemy && (y - 1) == yTo && (x + 1) == xTo && selected.classList.contains("pawn")) return false;
      }
    }
  }

  for(let i = x - 1, j = y - 1; i > 0 && j > 0; --i, --j)
  {
    if(!(isEnemy && i == xTo && j == yTo) && document.getElementById("" + j + i).classList.contains(colorF) && (i != xFrom || j != yFrom) || !isEnemy && i == xTo && j == yTo) break;
    if(document.getElementById("" + j + i).classList.contains(notColorF) || isEnemy && i == xTo && j == yTo)
    {
      if((document.getElementById("" + j + i).classList.contains("king") && i == x - 1 && j == y - 1) || document.getElementById("" + j + i).classList.contains("bishop") || document.getElementById("" + j + i).classList.contains("queen") || isEnemy && i == xTo && j == yTo && (selected.classList.contains("bishop") || selected.classList.contains("queen"))) return false;
      break;
    }
  }

  for(let i = x + 1, j = y + 1; i < 9 && j < 9; ++i, ++j)
  {
    if(!(isEnemy && i == xTo && j == yTo) && document.getElementById("" + j + i).classList.contains(colorF) && (i != xFrom || j != yFrom) || !isEnemy && i == xTo && j == yTo) break;
    if(document.getElementById("" + j + i).classList.contains(notColorF) || isEnemy && i == xTo && j == yTo)
    {
      if((document.getElementById("" + j + i).classList.contains("king") && i == x + 1 && j == y + 1) || document.getElementById("" + j + i).classList.contains("bishop") || document.getElementById("" + j + i).classList.contains("queen") || isEnemy && i == xTo && j == yTo && (selected.classList.contains("bishop") || selected.classList.contains("queen"))) return false;
      break;
    }
  }

  for(let i = x - 1, j = y + 1; i > 0 && j < 9; --i, ++j)
  {
    if(!(isEnemy && i == xTo && j == yTo) && document.getElementById("" + j + i).classList.contains(colorF) && (i != xFrom || j != yFrom) || !isEnemy && i == xTo && j == yTo) break;
    if(document.getElementById("" + j + i).classList.contains(notColorF) || isEnemy && i == xTo && j == yTo)
    {
      if((document.getElementById("" + j + i).classList.contains("king") && i == x - 1 && j == y + 1) || document.getElementById("" + j + i).classList.contains("bishop") || document.getElementById("" + j + i).classList.contains("queen") || isEnemy && i == xTo && j == yTo && (selected.classList.contains("bishop") || selected.classList.contains("queen"))) return false;
      break;
    }
  }

  for(let i = x + 1, j = y - 1; i < 9 && j > 0; ++i, --j)
  {
    if(!(isEnemy && i == xTo && j == yTo) && document.getElementById("" + j + i).classList.contains(colorF) && (i != xFrom || j != yFrom) || !isEnemy && i == xTo && j == yTo) break;
    if(document.getElementById("" + j + i).classList.contains(notColorF) || isEnemy && i == xTo && j == yTo)
    {
      if((document.getElementById("" + j + i).classList.contains("king") && i == x + 1 && j == y - 1) || document.getElementById("" + j + i).classList.contains("bishop") || document.getElementById("" + j + i).classList.contains("queen") || isEnemy && i == xTo && j == yTo && (selected.classList.contains("bishop") || selected.classList.contains("queen"))) return false;
      break;
    }
  }

  for(let i = x - 1; i > 0; --i)
  {
    if(!(isEnemy && i == xTo && y == yTo) && document.getElementById("" + y + i).classList.contains(colorF) && (i != xFrom || y != yFrom) || !isEnemy && i == xTo && y == yTo) break;
    if(document.getElementById("" + y + i).classList.contains(notColorF) || isEnemy && i == xTo && y == yTo)
    {
      if((document.getElementById("" + y + i).classList.contains("king") && i == x - 1) || document.getElementById("" + y + i).classList.contains("rook") || document.getElementById("" + y + i).classList.contains("queen") || isEnemy && i == xTo && y == yTo && (selected.classList.contains("rook") || selected.classList.contains("queen"))) return false;
      break;
    }
  }

  for(let i = x + 1; i < 9; ++i)
  {
    if(!(isEnemy && i == xTo && y == yTo) && document.getElementById("" + y + i).classList.contains(colorF) && (i != xFrom || y != yFrom) || !isEnemy && i == xTo && y == yTo) break;
    if(document.getElementById("" + y + i).classList.contains(notColorF) || isEnemy && i == xTo && y == yTo)
    {
      if((document.getElementById("" + y + i).classList.contains("king") && i == x + 1) || document.getElementById("" + y + i).classList.contains("rook") || document.getElementById("" + y + i).classList.contains("queen") || isEnemy && i == xTo && y == yTo && (selected.classList.contains("rook") || selected.classList.contains("queen"))) return false;
      break;
    }
  }

  for(let i = y - 1; i > 0; --i)
  {
    if(!(isEnemy && x == xTo && i == yTo) && document.getElementById("" + i + x).classList.contains(colorF) && (x != xFrom || i != yFrom) || !isEnemy && x == xTo && i == yTo) break;
    if(document.getElementById("" + i + x).classList.contains(notColorF) || isEnemy && x == xTo && i == yTo)
    {
      if((document.getElementById("" + i + x).classList.contains("king") && i == y - 1) || document.getElementById("" + i + x).classList.contains("rook") || document.getElementById("" + i + x).classList.contains("queen") || isEnemy && x == xTo && i == yTo && (selected.classList.contains("rook") || selected.classList.contains("queen"))) return false;
      break;
    }
  }

  for(let i = y + 1; i < 9; ++i)
  {
    if(!(isEnemy && x == xTo && i == yTo) && document.getElementById("" + i + x).classList.contains(colorF) && (x != xFrom || i != yFrom) || !isEnemy && x == xTo && i == yTo) break;
    if(document.getElementById("" + i + x).classList.contains(notColorF) || isEnemy && x == xTo && i == yTo)
    {
      if((document.getElementById("" + i + x).classList.contains("king") && i == y + 1) || document.getElementById("" + i + x).classList.contains("rook") || document.getElementById("" + i + x).classList.contains("queen") || isEnemy && x == xTo && i == yTo && (selected.classList.contains("rook") || selected.classList.contains("queen"))) return false;
      break;
    }
  }

  return true;
}

function isCheck(yFrom, xFrom, yTo, xTo)
{
  return !isNotCheck(yFrom, xFrom, yTo, xTo, true);
}

function isStaleMate(yFrom, xFrom, yTo, xTo) //MATE IS AFTER MOVE AND NOT BEFORE
{
  let nobodyCanMove = true;
  let playerF = document.getElementById("" + yTo + xTo).classList.contains("whiteF") ? "blackF" : "whiteF";

  for(x of document.getElementsByClassName("pawn"))
    if(x.classList.contains(playerF))
      if(pawnClick(x.id[0] - 0, x.id[1] - 0, true))
      {
        nobodyCanMove = false;
        break;
      }

  if(nobodyCanMove)
    for(x of document.getElementsByClassName("bishop"))
      if(x.classList.contains(playerF))
        if(bishopClick(x.id[0] - 0, x.id[1] - 0, true))
        {
          nobodyCanMove = false;
          break;
        }

  if(nobodyCanMove)
    for(x of document.getElementsByClassName("knight"))
      if(x.classList.contains(playerF))
        if(knightClick(x.id[0] - 0, x.id[1] - 0, true))
        {
          nobodyCanMove = false;
          break;
        }

  if(nobodyCanMove)
    for(x of document.getElementsByClassName("rook"))
      if(x.classList.contains(playerF))
        if(rookClick(x.id[0] - 0, x.id[1] - 0, true))
        {
          nobodyCanMove = false;
          break;
        }

  if(nobodyCanMove)
    for(x of document.getElementsByClassName("queen"))
      if(x.classList.contains(playerF))
        if(queenClick(x.id[0] - 0, x.id[1] - 0, true))
        {
          nobodyCanMove = false;
          break;
        }

  if(nobodyCanMove)
    for(x of document.getElementsByClassName("king"))
      if(x.classList.contains(playerF))
        if(kingClick(x.id[0] - 0, x.id[1] - 0, true))
        {
          console.log(x.id[0] - 0, x.id[1] - 0);
          nobodyCanMove = false;
          break;
        }

  return nobodyCanMove;
}

function click(y, x)
{
  let o = document.getElementById("" + y + x);

  if(document.getElementsByClassName('choice').length > 0)
  {
    if(o.classList.contains("choice"))
    {
      console.log(localStorage["choice"]);
      console.log(localStorage["choiceColor"]);
      let y0 = (localStorage["!player"] == "white" ? 8 : 1);
      let k0 = (localStorage["!player"] == "white" ? 1 : -1);

      let o0 = document.getElementById("" + y0 + x);
      let o1 = document.getElementById("" + (y0 - 1 * k0) + x);
      let o2 = document.getElementById("" + (y0 - 2 * k0) + x);
      let o3 = document.getElementById("" + (y0 - 3 * k0) + x);

      let figures = ["pawn", "knight", "bishop", "rook", "queen", "king", "empty"];
      let f = ["p", "n", "b", "r", "q", "k", "e"];

      o0.classList.remove("choice");
      o0.classList.remove("queen");
      if(o0.id == o.id) o0.classList.add("queen");

      o1.classList.remove("choice");
      o1.classList.remove("rook");
      o1.classList.add(localStorage["choice"][1]);
      for(let i = 0; i < 7; ++i)
        if(o1.classList.contains(f[i]))
        {
          o1.classList.remove(f[i]);
          o1.classList.add(figures[i]);
        }
      o1.classList.remove(localStorage["!player"] + 'F');
      o1.classList.add(localStorage["choiceColor"][1] == 'w' ? "whiteF" : (localStorage["choiceColor"][1] == 'b' ? "blackF" : "empty"));
      if(o1.id == o.id) o0.classList.add("rook");

      o2.classList.remove("choice");
      o2.classList.remove("knight");
      o2.classList.add(localStorage["choice"][2]);
      for(let i = 0; i < 7; ++i)
        if(o2.classList.contains(f[i]))
        {
          o2.classList.remove(f[i]);
          o2.classList.add(figures[i]);
        }
      o2.classList.remove(localStorage["!player"] + 'F');
      o2.classList.add(localStorage["choiceColor"][2] == 'w' ? "whiteF" : (localStorage["choiceColor"][2] == 'b' ? "blackF" : "empty"));
      if(o2.id == o.id) o0.classList.add("knight");

      o3.classList.remove("choice");
      o3.classList.remove("bishop");
      o3.classList.add(localStorage["choice"][3]);
      for(let i = 0; i < 7; ++i)
        if(o3.classList.contains(f[i]))
        {
          o3.classList.remove(f[i]);
          o3.classList.add(figures[i]);
        }
      o3.classList.remove(localStorage["!player"] + 'F');
      o3.classList.add(localStorage["choiceColor"][3] == 'w' ? "whiteF" : (localStorage["choiceColor"][3] == 'b' ? "blackF" : "empty"));
      if(o3.id == o.id) o0.classList.add("bishop");
    }

    return;
  }

  if(document.getElementsByClassName('selected').length > 0) //MOVE
  {
    let selected = document.getElementsByClassName('selected')[0];
    let ispos = o.classList.contains("possible");

    for(let i = '1'; i < '9'; ++i)
      for(let j = '1'; j < '9'; ++j)
      {
        document.getElementById('' + i + j).classList.remove("possible");
        document.getElementById('' + i + j).classList.remove("selected");
        possibleFromSides();
      }

    if(ispos)
    {
      let kill = !o.classList.contains("empty");

      let xFrom = localStorage["dtol"][selected.id[1] - 1];
      let xTo = localStorage["dtol"][x - 1];

      let f;
      if(selected.classList.contains("pawn")) f = "";
      if(selected.classList.contains("knight")) f = "N";
      if(selected.classList.contains("bishop")) f = "B";
      if(selected.classList.contains("rook")) f = "R";
      if(selected.classList.contains("queen")) f = "Q";
      if(selected.classList.contains("king")) f = "K";

      let check = isCheck(selected.id[0] - 0, selected.id[1] - 0, y, x);

      let color = o.classList.contains("white") ? "white" : "black";
      o.classList = selected.classList;
      o.classList.remove(color == "white" ? "black" : "white");
      o.classList.add(color);

      selected.classList.remove(localStorage["player"] + 'F');
      selected.classList.add("empty");

      if(selected.classList.contains("pawn"))
      {
        selected.classList.remove("pawn");

        if(y == 8 || y == 1)
        {
          let k0 = (localStorage["player"] == "white" ? 1 : -1);
          let o1 = document.getElementById("" + (y - 1 * k0) + x);
          let o2 = document.getElementById("" + (y - 2 * k0) + x);
          let o3 = document.getElementById("" + (y - 3 * k0) + x);

          let figures = ["pawn", "knight", "bishop", "rook", "queen", "king", "empty"];
          let f = ["p", "n", "b", "r", "q", "k", "e"];
          localStorage["choice"] = "";
          localStorage["choiceColor"] = "";

          o.classList.add("choice");
          for(let i = 0; i < 7; ++i)
            if(o.classList.contains(figures[i]))
            {
              o.classList.remove(figures[i]);
              localStorage["choice"] += f[i];
              localStorage["choiceColor"] += (o.classList.contains("whiteF") ? "w" : (o.classList.contains("blackF") ? "b" : "n"));
              o.classList.remove("whiteF");
              o.classList.remove("blackF");
              o.classList.add(localStorage["player"] + 'F');
              o.classList.add("queen");
              break;
            }

          o1.classList.add("choice");
          for(let i = 0; i < 7; ++i)
            if(o1.classList.contains(figures[i]))
            {
              o1.classList.remove(figures[i]);
              localStorage["choice"] += f[i];
              localStorage["choiceColor"] += (o1.classList.contains("whiteF") ? "w" : (o1.classList.contains("blackF") ? "b" : "n"));
              o1.classList.remove("whiteF");
              o1.classList.remove("blackF");
              o1.classList.add(localStorage["player"] + 'F');
              o1.classList.add("rook");
              break;
            }

          o2.classList.add("choice");
          for(let i = 0; i < 7; ++i)
            if(o2.classList.contains(figures[i]))
            {
              o2.classList.remove(figures[i]);
              localStorage["choice"] += f[i];
              localStorage["choiceColor"] += (o2.classList.contains("whiteF") ? "w" : (o2.classList.contains("blackF") ? "b" : "n"));
              o2.classList.remove("whiteF");
              o2.classList.remove("blackF");
              o2.classList.add(localStorage["player"] + 'F');
              o2.classList.add("knight");
              break;
            }

          o3.classList.add("choice");
          for(let i = 0; i < 7; ++i)
            if(o3.classList.contains(figures[i]))
            {
              o3.classList.remove(figures[i]);
              localStorage["choice"] += f[i];
              localStorage["choiceColor"] += (o3.classList.contains("whiteF") ? "w" : (o3.classList.contains("blackF") ? "b" : "n"));
              o3.classList.remove("whiteF");
              o3.classList.remove("blackF");
              o3.classList.add(localStorage["player"] + 'F');
              o3.classList.add("bishop");
              break;
            }
        }
        else if(!kill && (selected.id[1] - 0 != x - 0))
        {
          let p = document.getElementById("" + (y - 1) + x);
          p.classList.remove("pawn");
          p.classList.remove(localStorage["!player"] + 'F');
          p.classList.add("empty");
        }
      }
      else if(selected.classList.contains("knight")) selected.classList.remove("knight");
      else if(selected.classList.contains("bishop")) selected.classList.remove("bishop");
      else if(selected.classList.contains("rook")) selected.classList.remove("rook");
      else if(selected.classList.contains("queen")) selected.classList.remove("queen");
      else if(selected.classList.contains("king"))
      {
        selected.classList.remove("king");

        if(selected.id[1] == '5')
        {
          if(x == 3)
          {
            let rookFrom = document.getElementById("" + y + 1);
            let rookTo = document.getElementById("" + y + 4);

            let color0 = rookTo.classList.contains("white") ? "white" : "black";
            rookTo.classList = rookFrom.classList;
            rookTo.classList.remove(color0 == "white" ? "black" : "white");
            rookTo.classList.add(color0);

            rookFrom.classList.remove("rook");
            rookFrom.classList.remove(localStorage["player"] + 'F');
            rookFrom.classList.add("empty");
          }
          else if(x == 7)
          {
            let rookFrom = document.getElementById("" + y + 8);
            let rookTo = document.getElementById("" + y + 6);

            let color0 = rookTo.classList.contains("white") ? "white" : "black";
            rookTo.classList = rookFrom.classList;
            rookTo.classList.remove(color0 == "white" ? "black" : "white");
            rookTo.classList.add(color0);

            rookFrom.classList.remove("rook");
            rookFrom.classList.remove(localStorage["player"] + 'F');
            rookFrom.classList.add("empty");
          }
        }
      }

      let p0 = localStorage["player"];
      localStorage["player"] = localStorage["!player"];
      localStorage["!player"] = p0;

      localStorage["history"] += (localStorage["history"].length == 0 ? "" : "; ") + (localStorage["!player"] == "white" ? ++localStorage["move"] + ". " : "") + f + xFrom + selected.id[0] + (kill ? 'x' : '-') + xTo + y;

      if(check && !document.getElementsByClassName("choice").length > 0)
      {
        if(isStaleMate(selected.id[0] - 0, selected.id[1] - 0, y, x))
        {
          localStorage["history"] += '#';
          document.getElementById("result").innerText = "Результат партии: победа " + (localStorage["!player"] == "white" ? "белых" : "чёрных");
          document.getElementById("result").style.display = "grid";

          let p1 = prompt("Введите ник игрока, игравшего за " + (localStorage["!player"] == "white" ? "белых" : "чёрных") + ":", "Игрок 1");

          if(p1 != null)
          {
            let p2 = prompt("Введите ник игрока, игравшего за " + (localStorage["player"] == "white" ? "белых" : "чёрных") + ":", "Игрок 2");

            if(p2 != null)
            {
              let resRecs = p1 + " vs " + p2 + " -> 1:0 (" + localStorage["move"] + " " + (localStorage["move"] % 100 == 11 ? "ходов" : (localStorage["move"] % 10 == 1 ? "ход" : (localStorage["move"] % 10 < 5 ? "хода" : "ходов"))) + ")";
              let npos = 0;

              while(npos < localStorage["recs"].split('\n').length)
              {
                if(localStorage["move"] - 0 < localStorage["moveInRecs"].split('\n')[npos] - 0) break;
                ++npos;
              }

              let recsA = localStorage["recs"].split('\n');
              recsA.splice(npos, 0, resRecs);
              recsA.splice(10);
              localStorage["recs"] = recsA.join('\n');
              if(localStorage["recs"][0] == "\n") localStorage["recs"] = localStorage["recs"].substring(1);

              let mirA = localStorage["moveInRecs"].split('\n');
              mirA.splice(npos, 0, localStorage["move"]);
              mirA.splice(10);
              localStorage["moveInRecs"] = mirA.join("\n");
              if(localStorage["moveInRecs"][0] == "\n") localStorage["moveInRecs"] = localStorage["moveInRecs"].substring(1);
            }
          }
        }
        else
        {
          localStorage["history"] += '+';
        }
      }
      else if(isStaleMate(selected.id[0] - 0, selected.id[1] - 0, y, x) && !document.getElementsByClassName("choice").length > 0)
      {
        localStorage["history"] += '=';
        document.getElementById("result").innerText = "Результат партии: пат";
        document.getElementById("result").style.display = "grid";

        let p1 = prompt("Введите ник игрока, игравшего за белых:", "Игрок 1");

        if(p1 != null)
        {
          let p2 = prompt("Введите ник игрока, игравшего за чёрных:", "Игрок 2");

          if(p2 != null)
          {
            let resRecs = p1 + " vs " + p2 + " -> 0.5:0.5 (" + localStorage["move"] + " " + (localStorage["move"] % 100 == 11 ? "ходов" : (localStorage["move"] % 10 == 1 ? "ход" : (localStorage["move"] % 10 < 5 ? "хода" : "ходов"))) + ")";

            let recsA = localStorage["recs"].split('\n');
            recsA.splice(recsA.length, 0, resRecs);
            recsA.splice(10);
            localStorage["recs"] = recsA.join('\n');
            if(localStorage["recs"][0] == "\n") localStorage["recs"] = localStorage["recs"].substring(1);

            let mirA = localStorage["moveInRecs"].split('\n');
            mirA.splice(recsA.length, 0, localStorage["move"]);
            mirA.splice(10);
            localStorage["moveInRecs"] = mirA.join("\n");
            if(localStorage["moveInRecs"][0] == "\n") localStorage["moveInRecs"] = localStorage["moveInRecs"].substring(1);
          }
        }
      }

      let len = localStorage["history"].length;
      let n = 12 * 18;
      if(len < n) document.getElementById('history').innerText = localStorage["history"]
      else
      {
        let c = n;
        while(c < len && localStorage["history"][len - c] != ";") ++c;
        if(localStorage["history"][len - c] == ";") c -= 2;

        document.getElementById('history').innerText = localStorage["history"] = localStorage["history"].substr(len - c, len);
      }

      if(localStorage["rook_1b_moved"] == "false" && localStorage["history"].substr(len - 5).substr(0, 2) == "a8") localStorage["rook_1b_moved"] = "true";
      if(localStorage["rook_1w_moved"] == "false" && localStorage["history"].substr(len - 5).substr(0, 2) == "a1") localStorage["rook_1w_moved"] = "true";
      if(localStorage["rook_2b_moved"] == "false" && localStorage["history"].substr(len - 5).substr(0, 2) == "h8") localStorage["rook_2b_moved"] = "true";
      if(localStorage["rook_2w_moved"] == "false" && localStorage["history"].substr(len - 5).substr(0, 2) == "h1") localStorage["rook_2w_moved"] = "true";

      return;
    }
  }
                                                             //SELECT
  if(o.classList.contains("empty") || o.classList.contains(localStorage["!player"] + 'F')) return;
  o.classList.add("selected");
  if(o.classList.contains("pawn")) pawnClick(y, x);
  if(o.classList.contains("knight")) knightClick(y, x);
  if(o.classList.contains("bishop")) bishopClick(y, x);
  if(o.classList.contains("rook")) rookClick(y, x);
  if(o.classList.contains("queen")) queenClick(y, x);
  if(o.classList.contains("king")) kingClick(y, x);
}

document.addEventListener("DOMContentLoaded", function()
{
  for(let i = '1'; i < '9'; ++i)
    for(let j = '1'; j < '9'; ++j)
      document.getElementById('' + i + j).addEventListener("click", function() { click(i - 0, j - 0) });
});

/*
Обязательно (ну, почти):
Кнопка предложения ничьи
Кнопка "Сдаться"

Дополнительно:
Меню
Таймер
Подсчёт очков
Прокрутка ходов
Проигрыш по времени
Пат!
Ничья по причине недостатка фигур (K-K, K-KN, K-KB(один или несколько однопольных), KB-KB(при однопольных слонах))
Ничья по причине пешечной стены
Ничья троекратным повторением позиции (с сохранением одинаковых возможных ходов)
Ничья после 75 ходов без взятий и ходов пешкой
Ничья при закончившемся времени одного игрока и одновременной невозможности поставить мат другого игрока

Очень дополнительно:
Анализ позиции
Анализ партии
Бот
Сохранение партий
Онлайн
Темы
Разные виды шахмат
Шашки
Игра Чапаева
Своя игра
Языки
*/
