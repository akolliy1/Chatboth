const LoaderElements = `
    <span id="loading-text">typing </span>
    <span id="bouncer1">.</span>
    <span id="bouncer2">.</span>
    <span id="bouncer3">.</span>
`;

const createLoader = () => {
    const Loader = document.createElement('li');
    Loader.className = 'loading';
    Loader.innerHTML = LoaderElements;

    return Loader;
}

const appendLoaderToComponent = (parentNode) => {
    const loaderComponent = createLoader();
    parentNode.appendChild(loaderComponent);
};

const loaderComponent = () => {
    const chatContainer = document.querySelector('.main');
    const loading = document.querySelector('.loading');
    if (loading) deleteElement(chatContainer, loading);
    appendLoaderToComponent(chatContainer);
};

const handleUserTypingNotification = (isLoading) => {
    const inputField= document.getElementById('chat_box_input');
    const chatContainer = document.querySelector('.main');
    if (!isLoading) {
        inputField.addEventListener('focus', () => {
            const loading = document.querySelector('.loading');
            if (loading) deleteElement(chatContainer, loading);
            setState({ isLoading: true })
            appendLoaderToComponent(chatContainer)
        })
    }
    return true
}
