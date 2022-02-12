function getBotResponse(input) {
    //rock paper scissors
    if (input == "cold") {
        return "you should not go out and make social distancing while you are ill.";
    } else if (input == "breathing problem") {
        return "Hi if you need any help you can contact us at 9696632966 utkarsh.pandey2020@vitbhopal.ac.in";
    } else if (input == "need doctor advice ") {
        return "you can send a message on this number(9696632966) a doctor will contact you ";
    }

    // Simple responses
    if (input == "hi") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}
