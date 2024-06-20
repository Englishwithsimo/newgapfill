document.getElementById('check-answers').addEventListener('click', function() {
            const answers = {
                q1: 'will visit',
                q2: 'visited'
            };
let score = 0;

            for (let key in answers) {
                const input = document.getElementById(key);
                if (input.value.trim().toLowerCase() === answers[key]) {
                    input.style.backgroundColor = 'lightgreen';
                    score++;
                } else {
                    input.style.backgroundColor = 'lightcoral';
                }
            }

            document.getElementById('score').textContent = `Your score: ${score} / 2`;
        });

        document.getElementById('redo-quiz').addEventListener('click', function() {
            const inputs = document.querySelectorAll('.quiz-question input');
            inputs.forEach(input => {
                input.value = '';
                input.style.backgroundColor = '';
            });

            document.getElementById('score').textContent = '';
        });
