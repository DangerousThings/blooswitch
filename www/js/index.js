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

 var roo = {
    switcheroos: {},
    connected: [],
    loadFake: function(){
        // return localStorage.getItem("switcheroos");
        // This is just some test data I can work from..
        return {
            "E1:8C:FB:02:D6:45":{
                name: "Car",
                image: "data:image/gif;base64,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",
                inRange: true,
                firmware: "1.4.2",
                ports: {
                    1: {
                        type: "toggle"
                    },
                    2: {
                        type: "pulse",
                        duration: 300,
                    },
                    3: {
                        type: "pulse",
                        duration: 100,
                    },
                    4: {
                        type: "toggle"
                    }
                }
            },
            "E1:8C:FB:02:D6:46":{
                name: "Monkey",
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA2U",
                inRange: true,
                firmware: "1.4.2",
                ports: {
                    1: {
                        type: "toggle"
                    },
                    2: {
                        type: "pulse",
                        duration: 300,
                    },
                    3: {
                        type: "pulse",
                        duration: 100,
                    },
                    4: {
                        type: "toggle"
                    }
                }
            },
            "E1:8C:FB:02:D6:47":{
                name: "Homeless person",
                image: "data:image/gif;base64,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",
                inRange: false,
                firmware: "1.4.2",
                ports: {
                    1: {
                        type: "toggle"
                    },
                    2: {
                        type: "pulse",
                        duration: 300,
                    },
                    3: {
                        type: "pulse",
                        duration: 100,
                    },
                    4: {
                        type: "toggle"
                    }
                }
            },
        }
    },
    // Display the overview page
    displaySwitcheroos: function(fromSettings, dontUpdateScreen){
        console.log("Displaying all Switcheroos from the roo.switcheroos object")
        $('.switcheroos').html(""); // Clear existing..
        $.each(roo.switcheroos, function(id, switcheroo){
            console.log("appending", id, switcheroo, fromSettings)
            roo.appendSwitcheroo(id, switcheroo, fromSettings)
        });
        console.log(roo.switcheroos);
        if(!dontUpdateScreen){
            $('#switcheroo, #settings').hide();
            $('#myswitcheroos').show();
        }
    },
    // Append switcheroo details to the overview page
    appendSwitcheroo: function(id, switcheroo, fromSettings){
        console.log("appending", id, switcheroo, "and from settings?", fromSettings)
        if(!switcheroo.image) switcheroo.image = "img/board.png";
        if(switcheroo.inRange && !fromSettings){
            $("#inrange").append("<div class='switcheroo' data-switcherooid='"+id+"'><div class='switcherooimagecontainer'><img src='"+switcheroo.image+"' class='switcherooimage'></div><div class='switcherooname'>"+(switcheroo.name || "Switcheroo")+"</div><div class='switcherooid'>"+id+"</div></div>");
        }else{
            $("#outofrange").append("<div class='switcheroo' data-switcherooid='"+id+"'><div class='switcherooimagecontainer'><img src='"+switcheroo.image+"' class='switcherooimage'></div><div class='switcherooname'>"+(switcheroo.name || "Switcheroo")+"</div><div class='switcherooid'>"+id+"</div></div>");
        }
    },
    // Display a specific switcheroo on the page
    displaySwitcheroo: function(id){
        clearTimeout(roo.scanTimer);
        $("#scan").text("Scan for Switcheroos");
        $(".search").removeClass("searching");
        roo.id = id;
        app.switcherooConnect();
        if(roo.history[roo.history.length-1] !== "switcheroo"){
            roo.history.push("switcheroo");
        }
        console.log("Showing ", roo.id);
        $('#switcheroo > .topbar > .switcherooid').text(roo.switcheroos[roo.id].name || "Switcheroo");

        // Show On / Off / Pulse depending on the setting..
        // First of all hide everything
        $('.switch').hide();
        var port = 1;

        // If it's a new device
        if(!roo.switcheroos[roo.id].ports){
            roo.switcheroos[roo.id].name = "Unnamed Switcheroo";
            roo.switcheroos[roo.id].ports = {};
            roo.switcheroos[roo.id].image = "img/board.png";
        }
        while(port <= 4){
            // If we don't have settings for these ports..
            if(!roo.switcheroos[roo.id].ports[port]){
                roo.switcheroos[roo.id].ports[port] = {
                    type: "toggle"
                }
            }
            if(roo.switcheroos[roo.id].ports[port].type === "toggle"){
                console.log("showing port", port)
                $('#port'+port + ' > .on').show();
                $('#port'+port + ' > .off').show();
            }
            if(roo.switcheroos[roo.id].ports[port].type === "pulse"){
                $('#port'+port + ' > .pulse').show();
            }
            port++;
        }
        $('#myswitcheroos, #settings').hide();
        $('#switcheroo').show();
        ble.read(roo.id, "180a", "2a26", function(buffer){
            var firmware = String.fromCharCode.apply(null, new Uint8Array(buffer));
            console.log("Read Firmware", firmware);
            roo.switcheroos[roo.id].firmware = firmware;
        }, function(e){
            console.log("Unable to read firmware from " +roo.id)
        });
    },
    // Display the Settings page
    displaySettings: function(){
        if(roo.history[roo.history.length-1] !== "settings"){
            roo.history.push("settings");
        }
        console.log("displaying Settings for ", roo.switcheroos[roo.id].name)
        $('.options .name').text(roo.switcheroos[roo.id].name);
        $('.options .image img').attr("src", roo.switcheroos[roo.id].image);
        var port = 1;
        while(port <= 4){
            var duration = roo.switcheroos[roo.id].ports[port].duration;
            if(duration){
                duration = duration +"ms"
            }
            else{
                duration = "";
            }
            $('.output'+port).text(roo.switcheroos[roo.id].ports[port].type +" "+ duration);
            port++;
        }
        $('.settings .firmware').text(roo.switcheroos[roo.id].firmware);
        $('#switcheroo').hide();
        $('#settings').show();
    },
    // Constant of Service IDs and Characteristics
    servicesAndCharacteristics: {
        1: {serviceID: "00000015-9d7a-4919-b570-3bb24a4bf68e", characteristicID: "00000021-9d7a-4919-b570-3bb24a4bf68e"},
        2: {serviceID: "00000015-9d7a-4919-b570-3bb24a4bf68e", characteristicID: "00000022-9d7a-4919-b570-3bb24a4bf68e"},
        3: {serviceID: "00000015-9d7a-4919-b570-3bb24a4bf68e", characteristicID: "00000023-9d7a-4919-b570-3bb24a4bf68e"},
        4: {serviceID: "00000015-9d7a-4919-b570-3bb24a4bf68e", characteristicID: "00000024-9d7a-4919-b570-3bb24a4bf68e"}
    },
    // delete a switcheroo from localstorage
    delete: function(){
        delete roo.switcheroos[roo.id];
        console.log(roo.switcheroos);
        roo.displaySwitcheroos();
    },
    // Save Name of switcheroo
    saveName: function(result){
        // Save to object
        roo.switcheroos[roo.id].name = result.input1;
        roo.saveSettings();
        roo.displaySettings();
    },
    // Save an Image
    saveImage: function(imageData){
        roo.switcheroos[roo.id].image = "data:image/jpeg;base64," + imageData;
        roo.saveSettings();
        roo.displaySettings();
    },
    // Save change of an output
    saveOutput: function(result){
        // If it's a toggle setting
        console.log("save output result", result.input1);
        if(result.input1 === "0"){
           roo.switcheroos[roo.id].ports[roo.port].duration = false;
           roo.switcheroos[roo.id].ports[roo.port].type = "toggle";
        }
        if(result.input1 > 0){
           roo.switcheroos[roo.id].ports[roo.port].duration = result.input1;
           roo.switcheroos[roo.id].ports[roo.port].type = "pulse";
        }
        roo.saveSettings();
        roo.displaySettings();
    },
    // Saves all settings to localStorage
    saveSettings: function(){
        localStorage.setItem("switcheroos", JSON.stringify(roo.switcheroos));
    },
    loadSettings: function(){
        console.log("loading Settings");
        roo.switcheroos = JSON.parse(localStorage.getItem("switcheroos"));
        // If we don't have any settings
        if(roo.switcheroos === "null" || !roo.switcheroos){
            roo.switcheroos = {}; // Create empty object
        }
        if(roo.switcheroos) console.log("Loaded ", roo.switcheroos)
    },
    // Create a blank history stack
    history: []
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("backbutton", handleBack, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.bleScan();
        setInterval(function(){
            app.checkConnectivity()
        }, 20000);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    },
    // Check connectivity of connected switcheroos
    checkConnectivity: function(){
        console.log("checking for connecvitiy");
        if(!roo.switcheroos) return;
        // Go through each item in roo.switcheroos;
        $.each(roo.switcheroos, function(k,v){
            roo.switcheroos[k].inRange = false;
        })
        ble.scan(["00000015-9d7a-4919-b570-3bb24a4bf68e"], 5, function(switcheroo){
            roo.switcheroos[switcheroo.id].inRange = true;
        }, function(e){
            console.log("Unable to scan for Switcheroos")
        });
        setTimeout(function(){
            roo.displaySwitcheroos(false, true);
        }, 5100);
        
    },
    // Scan for Switcheroos
    bleScan: function(){
        $('.search').addClass("searching");''
        $("#scan").text("Scanning for Switcheroos");
        console.log("beginning scan for Switcheroos")
        ble.scan(["00000015-9d7a-4919-b570-3bb24a4bf68e"], 5, function(switcheroo){
            console.log("Scanned and found roo.switcheroos", switcheroo);
            console.log("roo.switcheroos", roo.switcheroos)
            if(roo.switcheroos[switcheroo.id]){
                roo.switcheroos[switcheroo.id].inRange = true;
            }else{
                // Create new switcheroo!
                console.log("created new switcheroo!");
                roo.switcheroos[switcheroo.id] = {};
                roo.switcheroos[switcheroo.id].inRange = true;
            }
            $("#scan").text("Scan for Switcheroos");
            $(".search").removeClass("searching");
            roo.saveSettings();
            console.log("connecting to ", switcheroo.id);
            roo.displaySwitcheroos();
        }, function(e){
            console.log("Unable to scan for Switcheroos")
        });
        roo.scanTimer = setTimeout(function(){
            if(roo.history[roo.history.length-1] === "switcheroo"){
                console.log("Showing switcheroos from localStorage");
                roo.displaySwitcheroos(true);
            }
            console.log("changing text back to scan for switcheroos")
            $("#scan").text("Scan for Switcheroos");
            $(".search").removeClass("searching");
        }, 5000)
    },
    // Connect to a Switcheroo
    switcherooConnect: function(){
        console.log("Trrying to connect to ", roo.id)
        ble.connect(roo.id, app.switcherooConnected, function(e){
            console.log("Unable to connect to Switcheroo");//cake
        });
        roo.saveSettings();
    },
    switcherooConnected: function(switcheroo){
        roo.connected.push(roo.id);
        console.log(switcheroo);
        console.log("Connected to a switcheroo", roo.id);
        // Get the Firmware # and store it.
        ble.read(roo.id, "180a", "2a26", function(buffer){
            var firmware = String.fromCharCode.apply(null, new Uint8Array(buffer));
            console.log("Read Firmware", firmware);
            roo.switcheroos[roo.id].firmware = firmware;
        }, function(e){
            handleError("Unable to read firmware from " +roo.id)
        });
    },
    readSwitcherooID: function(deviceID){
        /*
        ble.read(deviceID, "1800", "2a00", function(buffer){
            console.log("Read ID", String.fromCharCode.apply(null, new Uint8Array(buffer)));
        }, function(e){
            handleError("Unable to read Device ID from" +deviceID)
        });
        */
    },
    switchPort: function(state, port, duration){
        data = new Uint8Array(4);
        if(state === "on" || duration){
            data[0] = 1;
        }
        if(state === "off"){
            data[0] = 0;
        }
        if(duration){
            data[1] = duration / 100;
        }
        console.log("Writing state", state, "port", port, "duration", duration)
        ble.writeWithoutResponse(roo.id, 
            roo.servicesAndCharacteristics[port].serviceID, 
            roo.servicesAndCharacteristics[port].characteristicID, 
            data.buffer, 
            function(s){
                console.log("done writing data to port");
            }, 
            function(e){
                handleError("error writing");
            }
        );
    }
};

if(window.navigator.platform === "Win32"){
    // If we are in the web browser on windows let's fake the data!
    // TODO use device specific ops
    fakeData();
}else{
    roo.loadSettings();
    app.initialize();
}

function stringToBytes(string) {
   var array = new Uint8Array(string.length);
   for (var i = 0, l = string.length; i < l; i++) {
       array[i] = string.charCodeAt(i);
    }
    return array.buffer;
}

function handleError(e){
    alert("Error" + e)
}

$("body").on("click", ".switches > .port > .switch", function(){
    var type = $(this).data("type"); // on or off
    var port = $(this).data("port"); // 1-->4
    var id = roo.id;
    if(type === "pulse"){
        var duration = roo.switcheroos[roo.id].ports[port].duration;
        app.switchPort(type, port, duration)
    }
    if(type === "on"){
        app.switchPort(type, port);
    }
    if(type === "off"){
        app.switchPort(type, port);
    }
});

$("body").on("click", "#inrange .switcheroo", function(){
    var id = $(this).data("switcherooid");
    roo.displaySwitcheroo(id);
});

$("body").on("click", "#outofrange .switcheroo", function(){
    console.log("trying to bring out of range device into range");
    app.bleScan();
});

function fakeData(){
    console.log("Faking data for web browser development");
    console.log(roo);
    roo.switcheroos = roo.loadFake();
    roo.displaySwitcheroos();
}

$("body").on("click", ".topbar > .settings", function(){
    console.log("showing settings");
    roo.displaySettings();
});

$("body").on("click", ".delete", function(){
    console.log("deleting switcheroo", roo.id);
    roo.delete(roo.id);
});

$("body").on("click", ".back", function(){
    console.log("going back");
    handleBack();
});

function handleBack(){
    console.log("history", roo.history);
    console.log(roo.history.length);
    if(roo.history.length === 0){
        navigator.app.exitApp();
    }else{
        var page = roo.history[roo.history.length-1];
        console.log("need to show", page);
        roo.history.pop();
        if(page === "settings") roo.displaySwitcheroo(roo.id);
        if(page === "switcheroo") roo.displaySwitcheroos();
    }
}

$("body").on("click", ".rooname", function(){
    navigator.notification.prompt(
        "Provide a new Switcheroo name", 
        roo.saveName, 
        "New Switheroo name",
        false,
        ""
    )
});

$("body").on("click", ".rooimage", function(){
    navigator.camera.getPicture(
        roo.saveImage, 
        function(){
            alert("Error")
        }, 
        {
            destinationType: Camera.DestinationType.DATA_URL
        }
    )
});

$("body").on("click", ".roooutput", function(){
    roo.port = $(this).data("port");
    console.log(roo.port);
    navigator.notification.prompt(
        "Duration to stay on in Milliseconds.  Leave as 0 to toggle", 
        roo.saveOutput, 
        "Switheroo Output Setting",
        false,
        "0"
    )
});

$("body").on("click", ".scanCont", function(){
    // Performing a scan
    app.bleScan();
});