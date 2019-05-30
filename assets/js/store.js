let state = {
    isLoading: false,
    inputData: '',
    combinationFound: 0
}

const setState = (data) => {
    state = {
        ...state,
        ...data
    }
};

const deleteElement = (parentNode, childNode) => {
    if (childNode) {
        return parentNode.removeChild(childNode);
    }
}
