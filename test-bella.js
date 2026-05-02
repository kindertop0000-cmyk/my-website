import { EdgeTTS } from 'node-edge-tts';

const textAr = `مرحبًا بك في موقعِ عماد حديد`;

async function generateAudio() {
  try {
    const tts = new EdgeTTS({
      voice: 'en-US-BellaNeural',
      lang: 'en-US',
      outputFormat: 'audio-24khz-48kbitrate-mono-mp3',
      rate: '+5%',
    });
    
    await tts.ttsPromise(textAr, './public/test-bella.mp3');
    console.log('Successfully generated test-bella.mp3');
  } catch (err) {
    console.error('Error generating:', err);
  }
}

generateAudio();
