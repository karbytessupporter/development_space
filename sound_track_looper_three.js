/**
 * file: sound_track_looper_three.js
 * type: JavaScript
 * author: karbytes
 * date: 14_APRIL_2025
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
    let file_path_root = 'http://qkbrwfubnh4knc6kkhx6uepccavpwezdf2al7w2quepe3qociegsi3yd.onion/KARBYTES_BLOG_APPS/SOUND_TRACK_LOOP_COUNTER_THREE/';
    let HTML_string = '';
    
    // Define the list of sound eleven sound files and their display names.
    const sound_files = [
        /*
        'frogs_croaking_in_castro_valley_california_21_april_2022.mp3',
        'coyote_vocalizations_01_july_2023.mp3',
        'karbytes_drums_castro_valley_california_12_december_2022.mp3',
        'drums_karbytes_10_september_2023_part_0.mp3',
        'karbytes_guitar_castro_valley_california_12_december_2022.mp3',
        'karbytes_guitar_13_may_2023.mp3',
        'karbytes_guitar_07_june_2023.mp3',
        'karbytes_guitar_16_october_2023.mp3',
        'karbytes_drums_20_october_2023.mp3',
        'guitar_karbytes_13july2024.mp3',
        'guitar_karbytes_20august2024.mp3'
        */
        'abridged_keyboard_by_karbytes_use_case_13sep2024.mp3',
        'abridged_keyboard_sonic_weapon_toy_26dec2024.mp3',
        'acoustic_guitar_sample_by_karbytes_08april2024.mp3',
        'alviso_slough_san_jose_california_09july2024.mp3',
	'amplifier_original_mix_(hardtrance_1995)_by_macrocosm_downloaded_by_karbytes_26march2025.mp3',
	'asmr_girl_whimpering_downloaded_by_karbytes_27march2025.mp3',
	'asmr_pig_gorl_simpering_by_karbytes_27mar2025_p0.mp3',
	'asmr_pig_gorl_simpering_by_karbytes_27mar2025_p1.mp3',
	'asmr_pig_gorl_simpering_by_karbytes_27mar2025_p2.mp3',
        'baylands_alviso_san_jose_california_23jan2025_p6.mp3',
        'baylands_alviso_san_jose_california_23jan2025_p7.mp3',
        'baylands_fremont_california_21march2025_p23.mp3',
        'blackened_metallica_1988_downloaded_by_karbytes_21september2024.mp3',
        'cafe_restaurant_by_mynoise_dot_net_customized_and_downloaded_by_karbytes_24january2025.mp3',
        'cafe_restaurant_(misophonia_edition)_by_mynoise_dot_net_customized_and_downloaded_by_karbytes_25january2025.mp3',
	'chatgpt_karbytes_voicemode_16march2025.mp3',
	'deep_summer_spacetime_continuum_sound_13june2024.mp3',
        'diamond_(original_mix)_by_giada_released_2002_downloaded_by_karbytes_26march2025.mp3',
        'drums_karbytes_08march2025.mp3',
        'eagle_of_the_serpent_sun_from_winds_of_serpentine_ascension_by_into_oblivion_downloaded_by_karbytes_on_11april2024.mp3',
        'elevenlabs_creator_voice_clone_karbytes_generated_text_to_speech_output_05aug2024.mp3',
        'elevenlabs_text_to_speech_generation_05aug2024.mp3',
        'för_dem_mitt_blod_setherial_released_1996_downloaded_by_karbytes_on_28july2024.mp3',
	'freewill_startalk_march2025_downloaded_by_karbytes_30march2025.mp3',
	'guitar_karbytes_08march2025.mp3',
	'guitar_karbytes_14april2025.mp3',
        'guitar_karbytes_29january2025.mp3',
        'healing_water_by_mynoise_dot_net_customized_and_downloaded_by_karbytes_24january2025.mp3',
	'horrors_of_a_withered_dimension_by_bloodstained_ground_released_2022_downloaded_by_karbytes_21february2025.mp3',
        'input_audio_source_karbytes_01november2024.mp3',
        'instagram_kabytes_02_june_2023.mp3',
        'instagram_karbytes_12_march_2024_post_154.mp3',
        'instagram_karbytes_12_march_2024_post_197.mp3',
        'instagram_karbytes_12_march_2024_post_255.mp3',
        'instagram_karbytes_12_march_2024_post_265.mp3',
        'instagram_karbytes_13_june_2023_part_0.mp3',
        'instagram_karbytes_13_june_2023_part_1.mp3',
        'instagram_karbytes_13_june_2023_part_2.mp3',
        'instagram_karbytes_28_october_2023_part_1.mp3',
        'karbytes_darknet_beats_generator_sample_03mar2025.mp3',
        'medieval_library_by_mynoise_dot_net_customized_and_downloaded_by_karbytes_24january2025.mp3',
        'medieval_village_by_mynoise_dot_net_customized_and_downloaded_by_karbytes_28february2025_(animal_vocalizations_and_occasional_blacksmithing).mp3',
        'memories_of_children_david_darling_healing_music_project_radiance_2003_downloaded_by_karbytes_on_13june2024.mp3',
        'merced_manure_sound_files_karlina_beringer_2008_to_2009_track_0_retrieved_on_24_december_2023_[clock_shatter].mp3',
	'moonlight_sonata_[originally_named-_piano_sonata_No._14_in_C♯_minor_“Quasi una fantasia”]_by_ludwig_van_beethoven_released_1802_downloaded_by_karbytes_30march2025.mp3',
	'pig_boi_24_june_2023.mp3',
        'pig_gorl_02_april_2024_part_0.mp3',
        'pig_gorl_02_april_2024_part_1.mp3',
        'pig_gorl_03_november_2023_part_0.mp3',
        'pig_gorl_03_november_2023_part_1.mp3',
        'pig_gorl_06_january_2024_bonus_recording.mp3',
        'pig_gorl_08_december_2023_part_1.mp3',
        'pig_gorl_08july2024_part_0.mp3',
        'pig_gorl_08july2024_part_1.mp3',
        'pig_gorl_09_november_2023_part_0.mp3',
        'pig_gorl_09_november_2023_part_1.mp3',
        'pig_gorl_09_november_2023_part_2.mp3',
        'pig_gorl_12july2024_p1.mp3',
        'pig_gorl_18january2025_p0.mp3',
        'pig_gorl_18january2025_p1.mp3',
        'pig_gorl_18january2025_p2.mp3',
        'pig_gorl_18_october_2023.mp3',
        'pig_gorl_29_may_2023.mp3',
        'pig_gorl_30_december_2023_bonus_recording.mp3',
        'pig_gorl_30_october_2023_part_2.mp3',
        'pig_gorl_31august2024_p2.mp3',
        'pig_gorl_31_october_2023_part_0.mp3',
        'pig_gorl_noises_part_0_06_july_2023.mp3',
        'pig_gorl_noises_part_1_06_july_2023.mp3',
        'plaintive_droning_by_karbytes_17march2025_p0.mp3',
        'plaintive_droning_by_karbytes_17march2025_p1.mp3',
        'plaintive_droning_by_karbytes_17march2025_p2.mp3',
        'plaintive_droning_by_karbytes_17march2025_p3.mp3',
        'protection_racket_by_napalm_death_released_2012_downloaded_via_cobalt_tools_by_karbytes_on_17january2025.mp3',
        'pyramid_meditation_music_kings_chamber_frequencies_[downloaded_from_magnetic_minds_by_karbytes_on_16june2024].mp3',
        'shepardmadness_by_mynoise_dot_net_customized_and_downloaded_by_karbytes_26march2025.mp3',
        'sicko_mode_ft_drake_travis_scott_2018_downloaded_via_aiseo_by_karbytes_25january2025.mp3',
        'solfeggio_tones_by_mynoise_dot_net_customized_and_downloaded_by_karbytes_24january2025.mp3',
        'the_aquatic_garden_of_extra_celestial_delights_shpongle_released_2013_downloaded_by_karbytes_29july2024.mp3',
	'the_conjuring_by_megadeth_originally_released_1986_downloaded_by_karbytes_20february2025.mp3',
        'the_battle_fought_by_agrimonia_released_2013_downloaded_via_cobalt_tools_by_karbytes_on_17january2025.mp3',
        'train_san_jose_california_07october2024.mp3',
        'unintentional_asmr_björk_takes_her_tv_apart_(icelandic_accent)_downloaded_by_karbytes_17march2025.mp3',
        'unintentional_asmr_relaxing_repair_&_restoration_of_vintage_guitar_amps_downloaded_by_karbytes_17march2025.mp3',
        'unintentional_asmr_senior_japanese_handcrafted_fountain_pen_masters_downloaded_by_karbytes_17march2025.mp3',
        'unlock_akashic_records_💫_remember_mastery_🌈_ultra_shamanic_drums_[abridged_to_ten_minutes]_lokosmotives_2018_downloaded_by_karbytes_27september2024.mp3',
	'the_pilgrim_by_mynoise_dot_net_customized_and_downloaded_by_karbytes_28february2025_(contemplative_instrumental).mp3',
        'vintage_office_sounds_from_mynoise_dot_net_downloaded_by_karbytes_21december2024.mp3'
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
		//let elapsed_seconds_display = document.getElementById("seconds_elapsed_display");
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

