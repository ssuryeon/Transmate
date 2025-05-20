import {RecognizeResult, createWorker} from 'tesseract.js';

async function imgToText(){
    const worker = await createWorker('eng');
    const image = document.querySelector('#uploaded') as HTMLImageElement;
    let ret: RecognizeResult;
    if (image) {
        ret = await worker.recognize(image.src);
        console.log(ret.data.text);
        await worker.terminate();
    } else {
        throw new Error("이미지 파일을 업로드해주세요.");
    }
    return ret.data.text;
}

export default imgToText;