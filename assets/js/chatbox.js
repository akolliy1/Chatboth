const handleInputSubmit = (chatContainer, value) => {
    setState({ inputData: value });
    const loaderToRemoves = document.querySelector('.loading');
    deleteElement(chatContainer, loaderToRemoves);
    createThread(state.inputData, 'user');
}

const handleAutoScroll = () => {
    const height = document.querySelector('.main').scrollHeight
    const width = document.querySelector('.main').scrollWidth
    document.querySelector('.main').scrollTo(width, height)
}

/**
 * @param {*} firstLoop the first loop conditions `i < firstLoop.length`
 * @param {*} secondLoop the second loop conditions `i < secondLoop.length`
 * @param {*} cb call back function
 * @returns {Function} function
 */
const createLoop = (firstLoop, secondLoop, cb) => {
    for (let i = 0; i < firstLoop.length; i++) {
        for (let k = 0; k < secondLoop.length; k++) {
            cb(firstLoop[i], secondLoop[k]);
        }
    }
}

const sysTemDefualtReply = () => {
    const chatContainer = document.querySelector('.main');
    const loading = document.querySelector('.loading');
    if (loading) deleteElement(chatContainer, loading);
    createThread(state.inputData, 'user');
    createThread('I would get back to you, I\'m busy!');
}

/**
 * @param {*} event event emmited
 * @param {*} totalWordFound number of word found in the dictionary base on user input
 * @param {*} userInputLength lenght of user input after splitting to an array `userInput.split(' ')`
 * @returns {void} viod
 */
const handleEnterKeyPress = (event, totalWordFound, userInputLength, cb) => {
    if (event.keyCode === 13 && totalWordFound >= userInputLength && totalWordFound >= 1) {
        cb();
    } else if (event.keyCode === 13 && (totalWordFound === 0 || totalWordFound < userInputLength)) {
        sysTemDefualtReply();
    }
}

const handleSubmit = () => {
    const inputField= document.getElementById('chat_box_input');
    const chatContainer = document.querySelector('.main');
    setState({ inputData: inputField.value });
    handleInputSubmit(chatContainer, state.inputData);
    handleSystemReply();
    handleAutoScroll();
    inputField.value = '';
};

const handleSystemReply = () => {
    let combinationFound = 0;
    const wordCombination = [], textArray = [];
    const stateText = state.inputData.split(' '), dictionary = chatBoth.greetings;
    createLoop(stateText, dictionary.text, (firstIteration, secondIteration) => {
        if (firstIteration.includes(secondIteration)) {
            combinationFound += 1;
            textArray.push(firstIteration);
        }
    })
    stateText.filter(text => {
        if (dictionary.context[text]) {
            wordCombination.push(dictionary.context[text]);
        }
    });
    
    const message = SystemController.messageTuner(wordCombination.join(' '));
    createThread(message);
}

window.onload = () => {
    const inputField= document.getElementById('chat_box_input');
    const chatContainer = document.querySelector('.main');
    const promise = new Promise((resolve, reject) => {
        handleUserTypingNotification(state.isLoading);
        inputField.addEventListener('keypress', (event) => {
            loaderComponent();
            handleAutoScroll();
            const { value: text } = event.target, wordFound = [], textArray = text.split(' ');
            setState({ inputData: text, isLoading: false });
            const dictionary = chatBoth.greetings.text;
            createLoop(textArray, dictionary, (firstIteration, secondIteration) => {
                if (firstIteration.toLowerCase().includes(secondIteration.toLowerCase())) {
                    wordFound.push(secondIteration);
                    console.log('dictionary[k]', secondIteration);
                }
            });
            const combinationFound = wordFound.length;
            handleEnterKeyPress(event, combinationFound, textArray.length, () => {
                handleInputSubmit(chatContainer, text);
                handleSystemReply();
                handleAutoScroll();
                event.target.value = '';
            });
        })
    })
    .then((res) => {
        if (res) {
            console.log('res')
        }
    });
    return promise;
}

