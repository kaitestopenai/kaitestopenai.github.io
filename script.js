async function call() {
    var prompt = "Generate 4 passages about a given topic. The information should be unique, interesting, and interactive. Each passage should be a minimum of 75 words. The passages should stand alone and must be numbered. The text must be at grade level 12 on the topic of horses";
    var key1 = "sk-u3BBPzUvuKbWLVh5KofVT3Blbk";
    var key2 = "FJbuJfKqkTCB9QGa2Qhoun";
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        body: JSON.stringify({
            model: "davinci:ft-sawyer-laboratories:new-test-2023-06-23-15-15-58",
            messages: [
                { role: "system", content: "You are a helpful assistant that helps me write texts at a specific readability level" },
                { role: "user", content: prompt }
            ],
            prompt: prompt,
            temperature: 1,
            max_tokens: 380,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop:["END"]

        }), // string or object
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + key1 + key2
        }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    alert("Response achieved");
    alert(myJson);
    alert(JSON.stringify(myJson));
}
