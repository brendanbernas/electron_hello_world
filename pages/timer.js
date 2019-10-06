/**
 * Simple timer that is preformed on the renderer process.
 * A better implementation would be preformed on the main process.
 */

document.getElementById("startTimer").onclick = function(event) {
  waitTimeMs = document.getElementById("waitTime").value * 1000
  setTimeout(createNotification, waitTimeMs)
}

function createNotification(){
  new Notification('Timer test!', {
    body: 'Your time is up!'
  })
}
