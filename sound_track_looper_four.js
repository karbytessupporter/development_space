/**
 * file: sound_track_looper_four.js
 * type: JavaScript
 * author: karbytes
 * date: 03_JUNE_2025
 * license: PUBLIC_DOMAIN
 */

let track_count = 1; // This global variable is used to keep track how many sound track file menus are added to the application user interface (and is 1 immediately after the page is loaded).

/**
 * Dynamically add a new sound track menu to the application web page (and increment the global variable named track_count).
 * 
 * Assume this function is called in response to the add_another_sound_file_menu() button being clicked.
 * 
 * Also append a time-stamped message to the output DIV indicating when this function was called (assumedly by the add button being clicked).
 */
function add_another_sound_file_menu() {
	try {
		// Generate a time-stamped message string containing the (approximate) number of milliseconds which have elapsed since the Unix Epoch (i.e. 12:00AM Coordinated Universal Time on 01_JANUARY_1970).
		const message = "The add_another_sound_file_menu() button was clicked at time: " + generate_time_stamp();

        	let sound_file_menu_area = document.getElementById("sound_file_menu_area");

        	// Create a new paragraph (i.e. <p>) element.
        	let new_paragraph = document.createElement("p");

        	// Create a new menu (i.e. <select>) element.
        	let new_select = document.createElement("select");
        	new_select.id = "sound_file_menu_" + track_count;

       		// Populate the <select> with menu options.
        	new_select.innerHTML = get_menu_options();

        	// Append the <select> to the <p>.
        	new_paragraph.appendChild(new_select);

        	// Append the <p> to the menu area.
        	sound_file_menu_area.appendChild(new_paragraph);

        	// Increment the track count by one.
        	track_count += 1;

        	// Append a new paragraph element to the DIV element on the respective web page whose ID is "console_display".
        	document.getElementById("console_display").innerHTML += (('<' + 'p' + '>') + message + ('<' + '/' + 'p' + '>'));
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of add_another_sound_file_menu(): " + e);
	}
}

/**
 * Extract the sound file portion from a Uniform Resource Locator (URL).
 * 
 * @param {String} url - The full URL to the sound track file.
 * 
 * @return {String} The sound file portion of the URL.
 */
function extractSoundFileName(url) {
  try {
    // Use the last index of '/' to find the start of the file name.
    const fileName = url.substring(url.lastIndexOf('/') + 1);
    return fileName;
  } 
  catch (e) {
    console.error("An error occurred in extractSoundFileName:", e);
    return "";
  }
}

/**
 * Get the Number of milliseconds which have elapsed since the Unix Epoch.
 * 
 * The Unix Epoch is 01_JANUARY_1970 at midnight (Coordinated Universal Time (UTC)).
 * 
 * @return {String} message displaying the time at which this function was called.
 */
function generate_time_stamp() {
 	const milliseconds_elapsed_since_unix_epoch = Date.now();
 	return milliseconds_elapsed_since_unix_epoch + " milliseconds since midnight on 01_JANUARY_1970.";
}

/**
 * Generate an HTML formatted string which represents the list of OPTIONs displayed by a SELECT menu.
 * 
 * By clicking on the SELECT element, a scrollable list of OPTIONs will appear.
 * 
 * @return {String} a sequence of characters representing some natural number of OPTIONs inside of a SELECT menu.
 */
function get_menu_options() {
    let file_path_root = 'https://raw.githubusercontent.com/karbytessupporter/ANNOYING_AUTOMOBILE_DRIVER_SOUND_TRACK_LOOPER_github_hosted_website/main/';
    let HTML_string = '';
    
    // Define the list of sound eleven sound files and their display names.
    const sound_files = [
        'annoying_automobile_driver_sound_track_01june2025_p0.mp3',
        'annoying_automobile_driver_sound_track_01june2025_p1.mp3',
        'annoying_automobile_driver_sound_track_01june2025_p2.mp3',
        'annoying_automobile_driver_sound_track_01june2025_p3.mp3',
        'annoying_automobile_driver_sound_track_01june2025_p4.mp3',
        'annoying_automobile_driver_sound_track_01june2025_p5.mp3',
        'annoying_automobile_driver_sound_track_01june2025_p6.mp3',
        'annoying_automobile_driver_sound_track_01june2025_p7.mp3',
        'annoying_automobile_driver_sound_track_01june2025_p8.mp3'
    ];
    
    // Build the HTML string for each sound file
    sound_files.forEach((file, index) => {
        const selected = index === 0 ? ' selected' : ''; // Make the first option selected.
        HTML_string += `<option value="${file_path_root + file}"${selected}>${file}</option>`;
    });

    return HTML_string;
}

/**
 * Return the value of the selected menu OPTION of a SELECT menu element.
 * 
 * @param {String} select_menu_identifier is the identifier (id) of a SELECT HTML element.
 * 
 * @return {String} the value of the selected menu OPTION.
 */
function get_selected_menu_option_value(select_menu_identifier) {
	try {
		let menu_object = {}, options_array = [], selected_option_index = 0, selected_option_object = {}, selected_option_value;
		menu_object = document.getElementById(select_menu_identifier);
		options_array = menu_object.options;
		selected_option_index = menu_object.selectedIndex;
		selected_option_object = options_array[selected_option_index];
		selected_option_value = selected_option_object.value
		return selected_option_value;
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of get_selected_menu_option(select_menu_identifier): " + e);
	}
}

/**
 * Assume that this function is called whenever the web page file is opened or refreshed by a web browser.
 * 
 * Display a time-stamped message which indicates the time at which the web page was opened as GREEN text inside the DIV at the bottom of the web page.
 * 
 * Set the CYAN SPAN text which displays the number of seconds elapsed after the start_sound_track_looper() button is clicked to the value 0.
 * 
 * Set the CYAN SPAN text which displays the number of times the selected audio track is played to the value 0.
 * 
 * Populate the sound file SELECT menu with multiple sound file OPTIONs.
 * 
 * Set the start_sound_track_looper() button to be visible rather than hidden to the application end user.
 * 
 * If a runtime error occurs, use the try-catch block to perform exception handling by displaying a relevant web console message.
 */
/*
function load_web_page() {
	try {
		const message = "The web page was loaded by the web browser at time: " + generate_time_stamp();
		document.getElementById("console_display").innerHTML = message;
		document.getElementById("seconds_elapsed_display").innerHTML = "0";
		document.getElementById("loops_completed_display").innerHTML = "0";
		document.getElementById("sound_file_menu_0").innerHTML = get_menu_options();
		document.getElementById("file_selected_display").innerHTML = get_selected_menu_option_value("sound_file_menu_0");
		document.getElementById("the_button").style.display = "block";
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of load_web_page(): " + e);
	}
}
*/

/**
 * Assume that this function is called whenever the web page file is opened or refreshed by a web browser.
 * 
 * Display a time-stamped message which indicates the time at which the web page was opened as GREEN text inside the DIV at the bottom of the web page.
 * 
 * Set the CYAN SPAN text which displays the number of seconds elapsed after the start_sound_track_looper() button is clicked to the value 0.
 * 
 * Set the CYAN SPAN text which displays the number of times the selected audio track is played to the value 0.
 * 
 * Populate the sound file SELECT menu with multiple sound file OPTIONs.
 * 
 * Set the start_sound_track_looper() button to be visible rather than hidden to the application end user.
 * 
 * If a runtime error occurs, use the try-catch block to perform exception handling by displaying a relevant web console message.
 */
function load_web_page() {
  try {
    const message = "The web page was loaded by the web browser at time: " + generate_time_stamp();
    const menuElement = document.getElementById("sound_file_menu_0");
    if (menuElement) {
    	menuElement.innerHTML = get_menu_options();
      console.log("Menu populated successfully.");
    } 
    else {
      console.error("Menu element not found during load_web_page().");
    }
    document.getElementById("console_display").innerHTML = message;
  } 
  catch (e) {
    console.error("An exception occurred in load_web_page():", e);
  }
}

/**
 * Assume that this function is called by the event of the start_sound_track_looper() button being clicked.
 * 
 * Hide the add_another_sound_file_menu() button from the web page after that button is clicked.
 * 
 * Hide the start_sound_track_looper() button from the web page after that button is clicked.
 * 
 * Append a time-stamped message which indicates the time at which the button was clicked as green text to the DIV content at the bottom of the web page.
 * 
 * Set the CYAN SPAN text which displays the number of times the each of the selected audio track is played to the value 0 (and increment by one each second after that indefinitely).
 * 
 * Start playing the selected sound file(s) for an indefinite number of times and start incrementing the number of seconds elapsed and the number of times each sound track is played.
 * 
 * If a runtime error occurs, use the try-catch block to perform exception handling by displaying a relevant web console message.
 */
function start_sound_track_looper() {
	try {
		const message = "The start_sound_track_looper() button was clicked at time: " + generate_time_stamp();
		let sound_track_array = [];
		// let elapsed_seconds_display = document.getElementById("seconds_elapsed_display");
		let output_display = document.getElementById("output");
		let console_display = document.getElementById("console_display");
		let add_button = document.getElementById("add_another_sound_file_menu_button");
		let start_button = document.getElementById("the_button");

		// Hide the buttons.
		add_button.style.display = "none";
		start_button.style.display = "none";

		// Reset the elapsed seconds display.
		//elapsed_seconds_display.innerHTML = "0";

		// Clear the content which is initially displayed in the output display element (DIV).
		output_display.innerHTML = "";

		// Loop through each track and set up the player.
		for (let i = 0; i < track_count; i++) {
			const menu_id = "sound_file_menu_" + i;
			const sound_file_name = extractSoundFileName(get_selected_menu_option_value(menu_id));

			// Create an audio object for the track.
			const audio_file = new Audio(get_selected_menu_option_value(menu_id));
			const loops_display_id = `loops_completed_${i}`;
			const elapsed_display_id = `elapsed_seconds_${i}`;

			// Add a track object for managing its data.
			sound_track_array.push(
				{
					sound_track_name: sound_file_name,
					loops_completed: 0,
					elapsed_seconds: 0,
					audio: audio_file,
				}
			);

			// Create dynamic loop and elapsed displays for the track.
			const track_display_html = `
				<p>* * *</p>
				<p>Sound Track: ${sound_file_name}</p>
				<p>Loops Completed: <span id="${loops_display_id}">0</span></p>
				<p>Seconds Elapsed: <span id="${elapsed_display_id}">0</span></p>
			`;

			// Replace the content which is displayed in the output DIV with the sound track data.
			output_display.innerHTML += track_display_html;
			if (i == (track_count - 1)) output_display.innerHTML += '<p>* * *</p>';

      // Play the sound and start tracking loops and elapsed time
      audio_file.play();
      setInterval(() => {
        const track_data = sound_track_array[i];
        track_data.elapsed_seconds += 1;
        document.getElementById(elapsed_display_id).textContent = track_data.elapsed_seconds;

        if (audio_file.ended) {
          track_data.loops_completed += 1;
          document.getElementById(loops_display_id).textContent = track_data.loops_completed;
          audio_file.play(); // Restart the track
        }
      }, 1000);
    }
    console_display.innerHTML += `<p>${message}</p>`;
  } 
    catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of start_sound_track_looper(): " + e);
	}
}

