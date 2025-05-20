import imgToText from './imgToText';

async function processText(value:string){
    const data = await imgToText();
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'anthropic/claude-3.5-haiku',
            messages: [
                { role: 'system', content: data },
                { role: 'system', content: '당신은 한국어로만 답변하는 친절하고 정확한 한국어 비서입니다. 모든 답변은 오직 **한글만** 사용하세요. 한자나 영어는 사용하지 마세요. 한국어의 자연스러운 표현으로 대답하세요.' },
                { role: 'user', content: value }
            ]
        })
    });
    const result = await response.json();
    console.log(await result);
    return result.choices[0].message.content;
}

export default processText;