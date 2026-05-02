import { EdgeTTS } from 'node-edge-tts';
import fs from 'fs';

// إزالة التشكيل الزائد الذي يسبب نطقاً آلياً أو خاطئاً في نهايات الكلمات
// الاعتماد على النص الصافي لكي يقوم الذكاء الاصطناعي بنطقه بشكل طبيعي وسلس جداً
const textAr = `التميز ليس خيارا... بل قرار.
نحول الأفكار إلى تجارب رقمية متقدمة.
ونبني حضورا يلفت الانتباه ويصعب تجاهله.
حلول ذكية... تصميم احترافي... وأداء موثوق.
نضعك في صدارة نتائج البحث.
ونمنحك حضورا رقميا يعكس طموحك.
النتيجة:
حضور قوي.
ومستوى يليق بالقمة.`;

async function generateAudio() {
  try {
    const tts = new EdgeTTS({
      voice: 'ar-SA-HamedNeural', // حامد: الصوت الأكثر فخامة وعمقاً، يطابق أداء كليان الألماني
      lang: 'ar-SA',
      outputFormat: 'audio-24khz-48kbitrate-mono-mp3',
      rate: '-10%', // سرعة هادئة وواثقة جداً
      pitch: '-5%',
      volume: '+15%'
    });
    
    await tts.ttsPromise(textAr, './src/assets/audio/summary-ar.mp3');
    console.log('Successfully generated summary-ar.mp3 with Hamed (SSML Pauses & Natural Flow)');
  } catch (err) {
    console.error('Error generating ar:', err);
  }
}

generateAudio();
