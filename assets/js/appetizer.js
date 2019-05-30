const chatBoth = {
    greetings:
        {
            text: [
                'Hi', 'how', 'are', 'you', 'your', 'hello', 'Evening', 'Morning', 'afternoon', 'Good',
                'Bad', 'wonderful', 'name', 'what', 'sir', 'ma', 'wonder', 'doing', 'buy', 'food', 'i',
                'how', 'can', 'whatsupp','whatsup','whatsap', 'whatsapp'
            ],
            combination: 0,
            context: {
                it: 'how',
                hi: 'Hello',
                hello: 'Hi',
                morning: 'Good morning',
                afternoon: 'Good afternoon',
                evening: 'Good evening',
                wonder: 'amazing',
                good: '!',
                how: '',
                are: 'am',
                you: 'very well',
                bad: 'the experience.',
                name: 'I\'m accolade',
                can: 'can',
                i: 'you',
                buy: 'buy',
                food: 'food at ...',
                whatsupp: 'hi',
                whatsapp: 'hi',
                whatsup: 'hi',
                whatsap: 'hi'
            },
            complexContext: {
                'how are': 'what ?',
                'very bad': 'tell me how i can serve up to your expectation.'
            }
        }
}

const basicContext = [
    'Good morning',
    'Good afternoon',
    'Good evening',
    '! Good morning',
    '! Good afternoon',
    '! Good evening'
];

const collections = {
    'Good morning': 'timePicker',
    'Good afternoon': 'timePicker',
    'Good evening': 'timePicker',
    '! Good morning': 'timePicker',
    '! Good afternoon': 'timePicker',
    '! Good evening': 'timePicker'
}
