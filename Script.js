if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true; 
    recognition.interimResults = true; 

    const startBtn = document.getElementById('start-btn');
    const resultArea = document.getElementById('result');

    
    startBtn.addEventListener('click', () => {
        recognition.start();
        resultArea.value = ''; 
        console.log('Speech recognition started');
    });

    
    recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        resultArea.value = transcript; 
    };

    
    recognition.onerror = (event) => {
        console.error('Speech recognition error detected: ' + event.error);
    };

    
    recognition.onend = () => {
        console.log('Speech recognition ended');
    };
} else {
    console.error('Speech recognition not supported in this browser.');
}
