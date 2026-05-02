import { EdgeTTS } from 'node-edge-tts';
import fs from 'fs';

const texts = {
  ar: `التميّز ليس خيارًا، بل قرار.
نحوّل الأفكار إلى تجارب رقمية متقدمة.
ونبني حضورًا يلفت الانتباه ويصعب تجاهله.
حلول ذكية، تصميم احترافي، وأداء موثوق.
نضعك في صدارة نتائج البحث.
ونمنحك حضورًا رقميًا يعكس طموحك.
حضور قوي.
ومستوى يليق بالقمة.`,
  en: `Excellence is not an option... it's a decision.
We transform ideas into advanced digital experiences.
We build a presence that captures attention and is hard to ignore.
Smart solutions... professional design... and reliable performance.
We put you at the top of search results.
We give you a digital presence that reflects your ambition.
The result:
A strong presence.
And a level that belongs at the top.`,
  de: `Exzellenz ist keine Option... sondern eine Entscheidung.
Wir verwandeln Ideen in fortschrittliche digitale Erlebnisse.
Wir bauen eine Präsenz auf, die Aufmerksamkeit erregt und schwer zu ignorieren ist.
Intelligente Lösungen... professionelles Design... und zuverlässige Leistung.
Wir bringen Sie an die Spitze der Suchergebnisse.
Wir geben Ihnen eine digitale Präsenz, die Ihren Ehrgeiz widerspiegelt.
Das Ergebnis:
Eine starke Präsenz.
Und ein Niveau, das an die Spitze gehört.`
};

const voices = {
  ar: 'ar-SA-HamedNeural',
  en: 'en-US-BrianNeural', // Brian: Deep, professional, authoritative male voice
  de: 'de-DE-KillianNeural'
};

async function generateAudio() {
  for (const lang of ['ar', 'en', 'de']) {
    try {
      const tts = new EdgeTTS({
        voice: voices[lang],
        lang: lang === 'ar' ? 'ar-SA' : lang === 'en' ? 'en-US' : 'de-DE',
        outputFormat: 'audio-24khz-48kbitrate-mono-mp3',
        rate: lang === 'ar' ? '-10%' : '-5%', // Slight slowdown for all to keep the prestige
      });
      
      await tts.ttsPromise(texts[lang], `./src/assets/audio/summary-${lang}.mp3`);
      console.log(`Successfully generated summary-${lang}.mp3`);
    } catch (err) {
      console.error(`Error generating ${lang}:`, err);
    }
  }
}

generateAudio();
