import https from 'https';
import fs from 'fs';

const musicUrl = 'https://assets.mixkit.co/music/preview/mixkit-inspiring-corporate-742.mp3'; // Inspiring Corporate
const outputPath = './public/bg-music.mp3';

const file = fs.createWriteStream(outputPath);
https.get(musicUrl, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Background music downloaded successfully');
  });
}).on('error', (err) => {
  fs.unlink(outputPath, () => {});
  console.error('Error downloading music:', err.message);
});
