import * as googleTTS from 'google-tts-api';
import fs from 'fs';
import https from 'https';

const text = `مرحباً بك في موقع عماد حديد — حيث يبدأ التفوق الرقمي الحقيقي.
نحوّل رؤيتك إلى حلول رقمية متقدمة، ونبني لك حضوراً يفرض نفسه بثقة في عالم المنافسة.
نقدّم منظومة متكاملة من الخدمات المصممة لتحقيق نتائج ملموسة:
توظيف تقنيات الذكاء الاصطناعي لتطوير أعمالك ورفع كفاءتها.
تصميم واجهات راقية تعكس هوية علامتك بأعلى درجات الاحتراف.
أداء عالي السرعة يضمن تجربة مستخدم سلسة ومثالية.
استشارات استراتيجية تدعم قراراتك وتوسّع فرص نجاحك.
تطوير أنظمة متقدمة وبنى تحتية آمنة وقابلة للنمو.
تصدّر نتائج محركات البحث لتعزيز حضورك عالمياً.
دعم تقني مستمر لضمان استقرار أعمالك دون انقطاع.
نصنع لك حضوراً رقمياً لا يُنافس… ونضعك دائماً في المقدمة.`;

async function downloadAudio() {
  try {
    const results = googleTTS.getAllAudioUrls(text, {
      lang: 'ar',
      slow: false,
      host: 'https://translate.google.com',
    });

    console.log('Got URLs:', results.length);

    const buffers = [];

    for (const result of results) {
      const buffer = await new Promise((resolve, reject) => {
        https.get(result.url, (res) => {
          const chunks = [];
          res.on('data', (chunk) => chunks.push(chunk));
          res.on('end', () => resolve(Buffer.concat(chunks)));
          res.on('error', reject);
        }).on('error', reject);
      });
      buffers.push(buffer);
    }

    const finalBuffer = Buffer.concat(buffers);
    
    if (!fs.existsSync('./public')) {
      fs.mkdirSync('./public');
    }
    
    fs.writeFileSync('./public/summary-ar.mp3', finalBuffer);
    console.log('Audio saved to public/summary-ar.mp3');
  } catch (err) {
    console.error('Error:', err);
  }
}

downloadAudio();
