async function call() {
    var prompt = "Generate 4 passages about a given topic. The information should be unique, interesting, and interactive. Each passage should be a minimum of 75 words. The passages should stand alone and must be numbered. The text must be at grade level 12 on the topic of horses";

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        body: {
            model: "gpt-3.5-turbo",
            messages: [
                { "role": "system", "content": "You are a helpful assistant that helps me write texts at a specific readability level" },
                { "role": "user", "content": prompt }
            ],
            temperature: 0.5,
            max_tokens: 440,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0

        }, // string or object
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    alert("Response achieved");
    alert(myJson);
    alert(JSON.stringify(myJson));
}
