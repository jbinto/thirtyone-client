# TODO

* BUG: storing `playerJoined` locally leads to consistency problems. e.g. player joins, server reboots, now it won't let you join again. to fix it, add gamestates to the server for WAITING_FOR_PLAYERS where startGame just isn't possible

* server: filter cards per websocket

* frontend: draw button, draw discard button
* frontend: discard 1/2/3/4 button
* frontend: show it's other player's turn

* frontend: knock button
* frontend: 31 screen
* frontend: settle knock scren

...that's it
