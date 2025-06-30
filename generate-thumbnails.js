const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'public/albums');
const destDir = path.join(__dirname, 'public/albums/thumbs');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(
  file =>
    /\.(jpe?g|png|webp)$/i.test(file) &&
    file !== 'thumbs' // thumbs 폴더 제외
);

const size = 32; // 썸네일 한 변의 크기(px)

files.forEach(file => {
  const inputPath = path.join(srcDir, file);
  const outputPath = path.join(destDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

  sharp(inputPath)
    .resize(size, size, { fit: 'cover' })
    .webp({ quality: 60 })
    .toFile(outputPath)
    .then(() => {
      console.log(`썸네일 생성 완료: ${outputPath}`);
    })
    .catch(err => {
      console.error(`썸네일 생성 실패: ${file}`, err);
    });
}); 