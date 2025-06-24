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
            model: 'deepseek/deepseek-r1-0528:free',
            messages: [
                { role: 'system', content: data },
                { role: 'system', content: '당신은 다른 언어로 쓰인 문장을 **한글**로 충실히 번역하는 데 초점을 맞춘 한국어 비서입니다. 주어진 문장은 이미지에서 추출한 문장으로, 이를 활용하여 대답하세요.' },
                { role: 'system', content: '당신은 교육 목적으로 활용됩니다. 질문에 대한 답변과 함께 도움이 되는 추가적인 정보를 제공할 수 있습니다.'},
                { role: 'user', content: value }
            ]
        })
    });
    const result = await response.json();
    console.log(await result);
    return result.choices[0].message.content;
}

export default processText;