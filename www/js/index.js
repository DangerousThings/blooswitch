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
    blooswitches: {},
    connected: [],
    loadFake: function(){
        // return localStorage.getItem("blooswitches");
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
                name: "Monkey with a really long name hombre",
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
        }
    },
    // Display the overview page
    displayBlooSwitches: function(fromSettings, dontUpdateScreen){
        console.log("Displaying all BlooSwitches from the roo.blooswitches object")
        $('.blooswitches').html(""); // Clear existing..
        $.each(roo.blooswitches, function(id, blooswitch){
            console.log("appending", id, blooswitch, fromSettings)
            roo.appendBlooSwitch(id, blooswitch, fromSettings)
        });
        console.log(roo.blooswitches);
        if(!dontUpdateScreen){
            $('#blooswitch, #settings').hide();
            $('#myblooswitches').show();
        }
    },
    // Append blooswitch details to the overview page
    appendBlooSwitch: function(id, blooswitch, fromSettings){
        console.log("appending", id, blooswitch, "and from settings?", fromSettings)
        if(!blooswitch.image) blooswitch.image = "img/board.png";
        if(blooswitch.inRange && !fromSettings){
            $("#inrange").append("<div class='blooswitch' data-blooswitchid='"+id+"'><div class='blooswitchimagecontainer'><img src='"+blooswitch.image+"' class='blooswitchimage'></div><div class='blooswitchname'>"+(blooswitch.name || "BlooSwitch")+"</div><div class='blooswitchid'>"+id+"</div></div>");
        }else{
            $("#outofrange").append("<div class='blooswitch' data-blooswitchid='"+id+"'><div class='blooswitchimagecontainer'><img src='"+blooswitch.image+"' class='blooswitchimage'></div><div class='blooswitchname'>"+(blooswitch.name || "BlooSwitch")+"</div><div class='blooswitchid'>"+id+"</div></div>");
        }
    },
    // Display a specific blooswitch on the page
    displayBlooSwitch: function(id){
        clearTimeout(roo.scanTimer);
        $("#scan").text("Scan for BlooSwitches");
        $(".search").removeClass("searching");
        roo.id = id;
        $(".switch").attr("disabled", "disabled");
        $(".switch").addClass("disabled");
        if(!roo.fakeBlooSwitches) app.blooswitchConnect();
        if(roo.history[roo.history.length-1] !== "blooswitch"){
            roo.history.push("blooswitch");
        }
        console.log("Showing ", roo.id);
        $('#blooswitch > .topbar > .blooswitchid').text(roo.blooswitches[roo.id].name || "BlooSwitch");

        // Show On / Off / Pulse depending on the setting..
        // First of all hide everything
        $('.switch').hide();
        var port = 1;

        // If it's a new device
        if(!roo.blooswitches[roo.id].ports){
            roo.blooswitches[roo.id].name = "Unnamed BlooSwitch";
            roo.blooswitches[roo.id].ports = {};
            roo.blooswitches[roo.id].image = "img/board.png";
        }
        while(port <= 4){
            // If we don't have settings for these ports..
            if(!roo.blooswitches[roo.id].ports[port]){
                roo.blooswitches[roo.id].ports[port] = {
                    type: "toggle"
                }
            }
            if(roo.blooswitches[roo.id].ports[port].type === "toggle"){
                console.log("showing port", port)
                $('#port'+port + ' > .on').show();
                $('#port'+port + ' > .off').show();
            }
            if(roo.blooswitches[roo.id].ports[port].type === "pulse"){
                $('#port'+port + ' > .pulse').show();
            }
            port++;
        }
        $('#myblooswitches, #settings').hide();
        $('#blooswitch').show();
        if(!roo.fakeBlooSwitches){
            ble.read(roo.id, "180a", "2a26", function(buffer){
                var firmware = String.fromCharCode.apply(null, new Uint8Array(buffer));
                console.log("Read Firmware", firmware);
                roo.blooswitches[roo.id].firmware = firmware;
            }, function(e){
                console.log("Unable to read firmware from " +roo.id)
            });
        }
    },
    // Display the Settings page
    displaySettings: function(){
        if(roo.history[roo.history.length-1] !== "settings"){
            roo.history.push("settings");
        }
        console.log("displaying Settings for ", roo.blooswitches[roo.id].name)
        $('.options .name').text(roo.blooswitches[roo.id].name);
        $('.options .image img').attr("src", roo.blooswitches[roo.id].image);
        var port = 1;
        while(port <= 4){
            var duration = roo.blooswitches[roo.id].ports[port].duration;
            if(duration){
                duration = duration +"ms"
            }
            else{
                duration = "";
            }
            $('.output'+port).text(roo.blooswitches[roo.id].ports[port].type +" "+ duration);
            port++;
        }
        $('.settings .firmware').text(roo.blooswitches[roo.id].firmware);
        $('#blooswitch').hide();
        $('#settings').show();
    },
    // Constant of Service IDs and Characteristics
    servicesAndCharacteristics: {
        1: {serviceID: "00000015-9d7a-4919-b570-3bb24a4bf68e", characteristicID: "00000021-9d7a-4919-b570-3bb24a4bf68e"},
        2: {serviceID: "00000015-9d7a-4919-b570-3bb24a4bf68e", characteristicID: "00000022-9d7a-4919-b570-3bb24a4bf68e"},
        3: {serviceID: "00000015-9d7a-4919-b570-3bb24a4bf68e", characteristicID: "00000023-9d7a-4919-b570-3bb24a4bf68e"},
        4: {serviceID: "00000015-9d7a-4919-b570-3bb24a4bf68e", characteristicID: "00000024-9d7a-4919-b570-3bb24a4bf68e"}
    },
    // delete a blooswitch from localstorage
    delete: function(){
        delete roo.blooswitches[roo.id];
        console.log(roo.blooswitches);
        roo.displayBlooSwitches();
    },
    // Save Name of blooswitch
    saveName: function(result){
        // Save to object
        roo.blooswitches[roo.id].name = result.input1;
        roo.saveSettings();
        roo.displaySettings();
    },
    // Save an Image
    saveImage: function(imageData){
        roo.blooswitches[roo.id].image = "data:image/jpeg;base64," + imageData;
        roo.saveSettings();
        roo.displaySettings();
    },
    // Save change of an output
    saveOutput: function(result){
        // If it's a toggle setting
        console.log("save output result", result.input1);
        if(result.input1 === "0"){
            roo.blooswitches[roo.id].ports[roo.port].duration = false;
            roo.blooswitches[roo.id].ports[roo.port].type = "toggle";
        }
        if(result.input1 > 0){
            result.input1 = Math.ceil(result.input1/100)*100
            roo.blooswitches[roo.id].ports[roo.port].duration = result.input1;
            roo.blooswitches[roo.id].ports[roo.port].type = "pulse";
        }
        roo.saveSettings();
        roo.displaySettings();
    },
    // Saves all settings to localStorage
    saveSettings: function(){
        localStorage.setItem("blooswitches", JSON.stringify(roo.blooswitches));
    },
    loadSettings: function(){
        console.log("loading Settings");
        roo.blooswitches = JSON.parse(localStorage.getItem("blooswitches"));
        // If we don't have any settings
        if(roo.blooswitches === "null" || !roo.blooswitches){
            roo.blooswitches = {}; // Create empty object
        }
        if(roo.blooswitches) console.log("Loaded ", roo.blooswitches)
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
        // Check for BLE first..
        ble.isEnabled(app.bleScan, function(){
            alert("Bluetooth not enabled, hold my hand, I will take you to the promise land..");
            ble.showBluetoothSettings(function(){
                app.bleScan(); // Might not be needed but leave in for now..
                console.log("Bluetooth now enabled");
            }, function(){
                console.log("failure on Show Bluetooth settings");
            });
        });
        
        /*
        setInterval(function(){
            app.checkConnectivity()
        }, 20000);
        */
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    },
    // Check connectivity of connected blooswitches
    checkConnectivity: function(){
        console.log("checking for connecvitiy");
        if(!roo.blooswitches) return;
        // Go through each item in roo.blooswitches;
        $.each(roo.blooswitches, function(k,v){
            roo.blooswitches[k].inRange = false;
        })
        ble.scan(["00000015-9d7a-4919-b570-3bb24a4bf68e"], 5, function(blooswitch){
            roo.blooswitches[blooswitch.id].inRange = true;
        }, function(e){
            console.log("Unable to scan for BlooSwitches")
        });
        setTimeout(function(){
            roo.displayBlooSwitches(false, true);
        }, 5100);
    },
    // Scan for BlooSwitches
    bleScan: function(){
        $('.search').addClass("searching");''
        $("#scan").text("Scanning for BlooSwitches");
        console.log("beginning scan for BlooSwitches")
        ble.scan(["00000015-9d7a-4919-b570-3bb24a4bf68e"], 5, function(blooswitch){
            console.log("Scanned and found roo.blooswitches", blooswitch);
            console.log("roo.blooswitches", roo.blooswitches)
            if(roo.blooswitches[blooswitch.id]){
                roo.blooswitches[blooswitch.id].inRange = true;
            }else{
                // Create new blooswitch!
                console.log("created new blooswitch!");
                roo.blooswitches[blooswitch.id] = {};
                roo.blooswitches[blooswitch.id].inRange = true;
            }
            $("#scan").text("Scan for BlooSwitches");
            $(".search").removeClass("searching");
            roo.saveSettings();
            console.log("connecting to ", blooswitch.id);
            roo.displayBlooSwitches();
        }, function(e){
            console.log("Unable to scan for BlooSwitches")
        });
        roo.scanTimer = setTimeout(function(){
            if(roo.history[roo.history.length-1] === "blooswitch"){
                console.log("Showing blooswitches from localStorage");
                roo.displayBlooSwitches(true);
            }
            console.log("changing text back to scan for blooswitches")
            $("#scan").text("Scan for BlooSwitches");
            $(".search").removeClass("searching");
        }, 5000)
    },
    // Connect to a BlooSwitch
    blooswitchConnect: function(){
        $(".connectivity").text("Connecting");
        console.log("Trrying to connect to ", roo.id)
        ble.connect(roo.id, app.blooswitchConnected, function(e){
            $(".connectivity").text("Disconnected");
            $(".connectivity").addClass("disconnected");
            $(".switch").attr("disabled", "disabled");
            $(".switch").addClass("disabled");
            console.log("Unable to connect to BlooSwitch OR disconnected from BlooSwitch");//easter egg
            // NMote that connect failure event fires on disconnect too!
            // Let's rescan and see what is available...
            app.checkConnectivity();
        });
        roo.saveSettings();
    },
    blooswitchConnected: function(blooswitch){
        $(".switch").attr("disabled", false);
        $(".switch").removeClass("disabled");
        $(".connectivity").text("Connected");
        $(".connectivity").removeClass("disconnected");
        roo.connected.push(roo.id);
        console.log(blooswitch);
        console.log("Connected to a blooswitch", roo.id);
        // Get the Firmware # and store it.
        ble.read(roo.id, "180a", "2a26", function(buffer){
            var firmware = String.fromCharCode.apply(null, new Uint8Array(buffer));
            console.log("Read Firmware", firmware);
            roo.blooswitches[roo.id].firmware = firmware;
        }, function(e){
            handleError("Unable to read firmware from " +roo.id)
        });
    },
    readBlooSwitchID: function(deviceID){
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
        var duration = roo.blooswitches[roo.id].ports[port].duration;
        app.switchPort(type, port, duration)
    }
    if(type === "on"){
        app.switchPort(type, port);
    }
    if(type === "off"){
        app.switchPort(type, port);
    }
});

$("body").on("click", "#inrange .blooswitch", function(){
    var id = $(this).data("blooswitchid");
    roo.displayBlooSwitch(id);
});

$("body").on("click", "#outofrange .blooswitch", function(){
    console.log("trying to bring out of range device into range");
    app.bleScan();
});

function fakeData(){
    console.log("Faking data for web browser development");
    console.log(roo);
    roo.blooswitches = roo.loadFake();
    roo.fakeBlooSwitches = true;
    roo.displayBlooSwitches();
}

$("body").on("click", ".topbar > .settings", function(){
    console.log("showing settings");
    roo.displaySettings();
});

$("body").on("click", ".delete", function(){
    console.log("deleting blooswitch", roo.id);
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
        if(page === "settings") roo.displayBlooSwitch(roo.id);
        if(page === "blooswitch") roo.displayBlooSwitches();
    }
}

$("body").on("click", ".rooname", function(){
    navigator.notification.prompt(
        "Provide a new BlooSwitch name",
        roo.saveName, 
        "New BlooSwitch name",
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
        "BlooSwitch Output Setting",
        false,
        "0"
    )
});

$("body").on("click", ".scanCont", function(){
    // Performing a scan
    app.bleScan();
});