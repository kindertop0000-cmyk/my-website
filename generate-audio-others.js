import * as googleTTS from 'google-tts-api';
import fs from 'fs';
import https from 'https';

const texts = {
  en: `Welcome to Emad Hadid's website — where true digital excellence begins.
We transform your vision into advanced digital solutions, building a presence that confidently asserts itself in the competitive world.
We offer an integrated ecosystem of services designed to achieve tangible results:
Employing artificial intelligence technologies to develop your business and increase its efficiency.
Designing elegant interfaces that reflect your brand identity with the highest degree of professionalism.
High-speed performance ensuring a smooth and ideal user experience.
Strategic consulting supporting your decisions and expanding your chances of success.
Developing advanced systems and secure, scalable infrastructures.
Topping search engine results to enhance your global presence.
Continuous technical support ensuring the stability of your business without interruption.
We create an unrivaled digital presence for you... and always put you in the lead.`,
  de: `Willkommen auf der Website von Emad Hadid – wo wahre digitale Exzellenz beginnt.
Wir verwandeln Ihre Vision in fortschrittliche digitale Lösungen und bauen eine Präsenz auf, die sich in der wettbewerbsintensiven Welt selbstbewusst behauptet.
Wir bieten ein integriertes Ökosystem von Dienstleistungen, das darauf ausgelegt ist, greifbare Ergebnisse zu erzielen:
Einsatz von Technologien der künstlichen Intelligenz, um Ihr Unternehmen zu entwickeln und seine Effizienz zu steigern.
Design eleganter Benutzeroberflächen, die Ihre Markenidentität mit höchster Professionalität widerspiegeln.
Hochgeschwindigkeitsleistung, die ein reibungsloses und ideales Benutzererlebnis gewährleistet.
Strategische Beratung, die Ihre Entscheidungen unterstützt und Ihre Erfolgschancen erweitert.
Entwicklung fortschrittlicher Systeme und sicherer, skalierbarer Infrastrukturen.
Spitzenplätze in Suchmaschinenergebnissen, um Ihre globale Präsenz zu verbessern.
Kontinuierlicher technischer Support, der die Stabilität Ihres Unternehmens ohne Unterbrechung gewährleistet.
Wir schaffen für Sie eine konkurrenzlose digitale Präsenz... und setzen Sie immer an die Spitze.`
};

async function downloadAudio(lang, text) {
  try {
    const results = googleTTS.getAllAudioUrls(text, {
      lang: lang,
      slow: false,
      host: 'https://translate.google.com',
    });

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
    fs.writeFileSync('./public/summary-' + lang + '.mp3', finalBuffer);
    console.log('Audio saved to public/summary-' + lang + '.mp3');
  } catch (err) {
    console.error('Error:', err);
  }
}

async function run() {
  await downloadAudio('en', texts.en);
  await downloadAudio('de', texts.de);
}

run();
