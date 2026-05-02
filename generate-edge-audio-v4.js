import { EdgeTTS } from 'node-edge-tts';
import fs from 'fs';

const textAr = `مرحبًا بك في موقعِ عماد حديد، حيثُ يبدأُ التَّفَوُّقُ الرَّقميُّ الحقيقي.
نُحَوِّلُ رؤيتَكَ إلى حُلولٍ رقميةٍ متقدِّمة، ونبني لك حضورًا يَفرِضُ نفسَه بثقةٍ في عالَمِ المنافسة.
نُقَدِّمُ مَنظومةً متكاملةً من الخدمات، المُصمَّمة لتحقيقِ نتائجَ ملموسة:
توظيفُ تقنياتِ الذكاءِ الاصطناعي، لتطويرِ أعمالِكَ ورفعِ كفاءتها.
تصميمُ واجهاتٍ راقية، تعكسُ هويةَ علامتِكَ بأعلى درجاتِ الاحتراف.
أداءٌ عالي السُّرعة، يضمنُ تجربةَ مستخدمٍ سلسةً ومثالية.
استشاراتٌ استراتيجية، تدعمُ قراراتِكَ وتوسِّعُ فرصَ نجاحِكَ.
تطويرُ أنظمةٍ متقدِّمة، وبُنى تحتيةٍ آمنةٍ وقابلةٍ للنمو.
تصدُّرُ نتائجِ محركاتِ البحث، لتعزيزِ حضورِكَ عالميًا.
دعمٌ تقنيٌّ مستمر، لضمانِ استقرارِ أعمالِكَ دون انقطاع.
نصنعُ لك حضورًا رقميًا لا يُنافَس، ونضعُكَ دائمًا في المقدِّمة.`;

async function generateAudio() {
  try {
    const tts = new EdgeTTS({
      voice: 'ar-AE-FatimaNeural', // صوت إماراتي نسائي فخم
      lang: 'ar-AE',
      outputFormat: 'audio-24khz-48kbitrate-mono-mp3',
      rate: '+5%', // 1.05
      pitch: '+0%',
      volume: '+10%'
    });
    
    await tts.ttsPromise(textAr, './public/summary-ar.mp3');
    console.log('Successfully generated summary-ar.mp3 with Fatima (Commercial style)');
  } catch (err) {
    console.error('Error generating ar:', err);
  }
}

generateAudio();
