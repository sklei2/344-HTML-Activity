window.addEventListener('load', function() {	

	if (localStorage) {
		// load up our saved values and put it on the screen		
		var name = localStorage.name;
		var state = localStorage.state;
		var email = localStorage.email;
		var like = localStorage.like;

		if (name && state && email && like) {
			var localData = document.getElementById("locallyStoredData");
			localData.innerHTML = "<label> Name: </label>" +
							  "<p> " + name + " </p>" + 
							  "<label> State: </label>" +
							  "<p> " + state + " </p>" + 
							  "<label> Email: </label>" +
							  "<p> " + email + " </p>" + 
							  "<label> Do You Like Me?: </label>" +
							  "<p> " + like + " </p>";	
		}	
	}

	// Set Click handler on local storage
	var localStorageForm = document.getElementById("localStorageForm");
	localStorageForm.addEventListener('submit', function(event) {
		if (localStorage) {
			for (var i = 0; i < localStorageForm.length; i++) {
				var data = localStorageForm[i];
				if (data.type != "submit") {
					if ((data.type == "radio" && data.checked) || data.type != "radio") {
						localStorage.setItem(data.name, data.value);	
					}					
				}					
			}	
		}		
	});

	var resetButton = document.getElementById("resetStorage");
	resetButton.addEventListener('click', function(event) {
		if (localStorage) {
			localStorage.clear();
		}
	});
});

