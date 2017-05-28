var correctAnswersCount;
        function askQuestion(textBoxId, answer) {
            var userAnswer = document.getElementById(textBoxId).value;
            if (userAnswer == answer) {
                correctAnswersCount++;
            }
        }

        function playPuzzle() {
            correctAnswersCount = 0;
            askQuestion("userAnswer1", "елка");
            askQuestion("userAnswer2", "капуста");
            alert("Количество правильных ответов: " + correctAnswersCount);
        }