function shuffleContent(players) {
  if(players.length < 1) {
    return;
  }
  const player = players.item(0);
  const playerParent = player.parentNode;
  const trackList = document.getElementById("track_table");
  const merchList = document.getElementsByClassName("tralbumCommands")?.item(0);

  playerParent.insertBefore(trackList, merchList);
}

shuffleContent(document.getElementsByClassName("inline_player"));
