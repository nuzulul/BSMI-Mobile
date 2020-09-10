/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
function clickBody() {
    window.location.href = window.location.href
}
document.body.addEventListener("click", clickBody);
 
function checkConnection() {
     var networkState = navigator.network.connection.type;
     var states = {};
     states[Connection.UNKNOWN]  = 'Unknown connection';
     states[Connection.ETHERNET] = 'Ethernet connection';
     states[Connection.WIFI]     = 'WiFi connection';
     states[Connection.CELL_2G]  = 'Cell 2G connection';
     states[Connection.CELL_3G]  = 'Cell 3G connection';
     states[Connection.CELL_4G]  = 'Cell 4G connection';
     states[Connection.NONE]     = 'No network connection';
    
     return networkState;
    
 }
 
function aftercommand(){
var i = 0;
(function move() {
  if (i == 60) {
  window.location.replace('index.html');
  }

  i++
  setTimeout(move, 1000);
  
})();
}
       
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        var networkState = checkConnection();
            if (networkState == Connection.NONE) {
                navigator.notification.alert('No connection');
            } else {
            //
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                  console.log(this.responseText);
                  
                  if (this.responseText == 1) {window.location.replace(window.atob('aHR0cHM6Ly9ic21pbW9iaWxlLm5ldGxpZnkuYXBwL2luZGV4Lmh0bWw='));}
                }
                };
                xhttp.open("GET", window.atob("aHR0cHM6Ly9ic21pbW9iaWxlLm5ldGxpZnkuYXBwL2NvbmVjdC5odG1s") + "?date=" + new Date().getTime(), true);
                xhttp.send();
                setTimeout(function () {aftercommand();}, 1000);
            }
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();