  /** This js file will defines the function of a stop watch used in the experiment. The function for start, stop and pause the timer is defined below. */
  var sec=0;
  var minute=0;
  var hour=00;
  var stop_watch_timer;
  var hrVal,minVal,secVal;
  
  /** Starting stopwatch function in the timer */
  function startWatch(hr,mins,secs){ /** This parameter is passing from the function call part in the source file */
	hrVal=hr;
	minVal=mins;
	secVal=secs; /** Assigning the hr, sec and min value to the text filed given in the stopwatch */
	stop_watch_timer=setInterval("showWatch()",10); /** Calling the timer repeatedly */
  }
  
  /** Show the stopwatch */
  function showWatch(){
	startStopWatch(); /** Start the watch */
  }
  
  /** Stopwatch running function */
  function startStopWatch(){
	sec++;
	if ( sec == 60 ) {	
	  sec = 00;
	  minute = minute + 1;
	} else {
	  minute = minute;
	}
	if ( minute == 60 ) {
	  minute = 00;
	  hour = hour+1;
	} else {
	  hour=hour;
	}
	if ( sec <= 9 ) {
	  sec = "0"+sec; /** Appending 0 to the text box value */
	}
	if ( hrVal.text <= 9 ) {
	  hrVal.text="0"+hour;  /** Appending 0 to the text box value */
	} else {
	  hrVal.text=hour;
	}
	if ( minVal.text <= 9 ) {
	  minVal.text="0"+minute;  /** Appending 0 to the text box value */
	} else {
	  minVal.text=minute;
	}
	secVal.text=sec;
  }
  
  /** Resetting the stopwatch and timer */
  function resetStopWatch(){
	sec=0;
 	minute=0;
 	hour=00;
	clearInterval(stop_watch_timer);
  }
  
  /** Pause the timer of the stopwatch */
  function pauseTimer(){ 
	clearInterval(stop_watch_timer);
  }