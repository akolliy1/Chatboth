const createUserThread = (text) => {
    return (`
        <span class="author">me <i class="pl-7">
        ${Date().split(' ').splice(1, 3).join(' ')},
        ${SystemController.currentTime()}</i></span>
        <span class="float-right">${text}</span>
    `)
}

const createSystemThread = (text) => {
    return (`
        <span>${text}</span>
        <span class="float-right author pt-5">we <i class="pl-7">
            ${Date().split(' ').splice(1, 3).join(' ')},
            ${SystemController.currentTime()}</i>
        </span>
    `)
}

const chatInitializer = (message, user) => {
    const thread = document.createElement('li');
    let userThread = createSystemThread(message);
    if (user) userThread = createUserThread(message);
    thread.innerHTML = userThread;
    return thread;
}

const createThread = (text, type) => {
    const chatContainer = document.querySelector('.main');
    const thread = chatInitializer(text, type);
    chatContainer.appendChild(thread);
}
