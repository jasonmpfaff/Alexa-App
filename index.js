'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.dc27d450-d924-4523-9353-58b9ef5d01dc';

const SKILL_NAME = 'Oklahoma Education facts';
const GET_FACT_MESSAGE = "Here's an Oklahoma Education fact: ";
const HELP_MESSAGE = 'You can say tell me an Oklahoma Education fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
    
    'Oklahoma has made the deepest cuts to school funding in the nation since the start of the recession in 2008. Would you like another fact? ' ,
    'Among its neighboring states, Oklahoma had the lowest spending per pupil, at seven thousand four hundred and sixty six dollars, and the highest teacher-to-student ratio, with one teacher for every sixteen students. Would you like another fact? ',
    'Compared to three neighboring states Arkansas, Kansas, and Missouri, Oklahoma had the smallest percentage of students scoring at or above proficient in all categories of the National Assesment of Educational Proficiency.  Would you like another fact? ',
    'In 2013, Oklahoma schools reported a graduation rate of 84.8 percent, the lowest among its neighboring states.  Would you like another fact? ',
    'Oklahoma now spends $1 billion less on K-12 education than it did a decade ago. Would you like another fact? ',
    'Oklahomas neighboring states invest substantially more in common education on a per-student basis. Oklahoma would have to invest nearly $1.3 billion more annually to reach the regional average per-student spending.  Would you like another fact? ',
    'Oklahomas special education student-to-teacher ratio is almost 23:1.  Would you like another fact?' ,
    'According to the Bureau of Labor Statistics, the average annual pay of Oklahoma’s elementary, middle school and high school teachers all ranked last among the 50 states.  Would you like another fact? ',
    'The average salary for teachers across elementary, middle and high school in Oklahoma was $41,834. Nationally, the average was $59,978.  Would you like another fact? ',
    'One in five districts in Oklahoma have gone from a five to a four day school week.  Would you like another fact? ',
    'Per student spending in Oklahoma has declined fourteen percent since 2008.  Would you like another fact? ',
    'Oklahoma school districts have eliminated 480 teaching positions since last year and there are more than 500 vacancies.  Would you like another fact? ',
    'OKlahoma spends about sixteen hundred dollars per student less than the regional average. This translates to eighty three hundred dollars over a five year span.  Would you like another fact? ',
    
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================
const handlers = {
    'LaunchRequest': function () {
        this.response.speak("Would you like another fact?").listen
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.response.listen('Do you want to know more facts?');
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
