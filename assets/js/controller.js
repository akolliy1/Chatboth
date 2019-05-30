class SystemController {
    static timeConfirmation = () => {
        const time = Date().split(' '); // ["Wed", "May", "29", "2019", "14:36:23", "GMT+0100", "(West", "Africa", "Standard", "Time)"]
        const currentTime = time[4].split(':'); // ["14", "36", "23"]
        return Number(currentTime[0]);
    }

    static timePicker = () => {
        const currentTimeFormat = SystemController.timeConfirmation();
        if (currentTimeFormat < 12) {
            return 'Good morning'
        } else if (currentTimeFormat >= 12 && currentTimeFormat <= 17) {
            return 'Good afternoon'
        } else {
            return 'Good evening'
        }
    }

    static currentTime = () => {
        const currentTimeformat = Date().split(' ').splice(4, 1).join('').split(':'); // (3) ["16", "29", "32"]
        const timeformat = Number(currentTimeformat[0]);
        const formatTime = timeformat >= 12 ? 'pm' : 'am';
        currentTimeformat[0] = timeformat > 12 ? timeformat - 12 : timeformat;
        return currentTimeformat.join(':') + `${formatTime}`
    }

    static filterDot = () => {
        // '... can you buy food'.split('...')
        // (2) ["", " can you buy food"]
        // '... can you buy food'.split('...')[1].trim()
        // "can you buy food"
    }

    static messageTuner = (message) => {
        const index = basicContext.indexOf(message);
        if (index !== -1) {
            const selectResponseMsg = basicContext[index];
            const selector = collections[selectResponseMsg];
            return this[selector]();
        }
        return message
    }
}