const poll = {
    question: 'What is your favourite programming language?',
    option: ['0:JavaScript', '1:Python', '2:Rust', '3:C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answers = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')}
                \n(write option number)`
            )
        );
    },
};


