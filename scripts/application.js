// Triggered on the HTML body load
function OnLoad() {
    //document.addEventListener("deviceready", OnDeviceReady, false);
    InitializeApplication();
}

// Triggered when mobile initialization is complete
function OnDeviceReady() {  
    //InitializeApplication();
}

// Application initialization
function InitializeApplication() {
    // Initilize the backend (Stackmob)
	StackMob.init({
    publicKey: "da3d4dd5-a165-466f-9e5a-80ce2e9dedc3",
    apiVersion: 0
	});
}
