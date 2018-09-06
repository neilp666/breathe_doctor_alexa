'use strict';
const Alexa = require('alexa-sdk');

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = '';
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
  LaunchRequest() {
   const response = "<audio src='https://s3.amazonaws.com/ask-soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_bridge_01.mp3'/>Welcome to Breathe Doctor. " +
                    "My aim is to help you improve your breathing. " +
                    "Most people are only using about 25 to 30 per cent of their lungs. " +
                    "studies show that deep breathing promotes calmness. " +
                    "You can ask me for instructions. practice. or start breathing exercises.";

   const reprompt = "Try saying, instructions, or practice or  start breathing";

   this.emit(':askWithCard', response, reprompt);
},
    "InstructionsIntent": function() {
    const response = "So there are five easy steps. " +
                     "Step One. " +
                     "Lie on the floor. Place one hand on your chest and one hand on your stomach. " +
                     "Step Two. " +
                     "Close your mouth completely. Breathe in and  Breathe out only through your nose. " +
                     "Imagine the air going in through your nose and down your windpipe and straight into your stomach. " +
                     "Step Three. " +
                     "Slowly inhale. Try to prevent the chest hand from moving at all. " +
                     "Step Four. " +
                     "breathe in for five seconds.  And then breathe out for seven seconds. " +
                     "I will count this for you. " +
                     "Step Five. " +
                     "Do this ten times. but no more. It will get easier each time. " +
                     "Try to achieve five sets of 10. " +
                     "The first set should be done when your wake up in the morning. " +
                     "The last set should be done before you go to sleep. " +
                     "That is all the steps. Do you want to do a practice session. Or start the exercise. Or do you want to hear the instructions again. say instructions ";

    const reprompt = "Step One. Lie on floor, one hand on your chest and one hand on your tummy ." +
                     "Step Two. Close your mouth completely, Breathe in, and Breathe out. only through your nose. " +
                     "Step Three. Breathe in for five seconds.  And then breathe out for seven seconds. " +
                     "Step Four. Slowly inhale, try to prevent the chest hand from moving at all. " +
                     "Step Five. do this ten times. Try to achieve five sets of 10. " +
                     "The first set should be done when your wake up in the morning. " +
                     "And the last set should be done before you go to sleep. " +
                     "That is all the steps. Do you want to do a practice session. Or start the exercise. Or do you want to hear the instructions again. say instructions";

   this.emit(':askWithCard', response, reprompt);
  },
   "PracticeIntent": function() {
    const response = "Ok lets practice  ";
    const reprompt = "Five easy steps";

   this.emit(':askWithCard', response, reprompt);

  },
  "AMAZON.StopIntent": function() {
        this.emit(":tellWithCard", "Alright , Thanks for using Breathe Doctor, see you around and breathe well. <audio src='https://s3.amazonaws.com/ask-soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01.mp3'/>");
  },
  "AMAZON.CancelIntent": function() {
        this.emit("AMAZON.StopIntent");
  },
  "AMAZON.HelpIntent": function() {
        this.emit(":ask", 'You can ask Breath Doctor to improve your breathing.  My aim is to help you breathe better. Most people are only using about 25 to 30 per cent of their lung,  Numerous studies show that deep breathing promotes calmness',' HELP - You can ask Breath Doctor to improve your breathing ','You can ask Breath Doctor to improve your breathing');
  },
  "AMAZON.FallbackIntent": function() {
       this.emit("tell", "I did not get any response from you, please open the skill again");
  }
};
