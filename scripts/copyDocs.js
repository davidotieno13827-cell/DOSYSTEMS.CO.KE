const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../out');
const destDir = path.resolve(__dirname, '../docs');

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

function removeDir(target) {
    if (!fs.existsSync(target)) return;
    fs.rmSync(target, { recursive: true, force: true });
}

if (!fs.existsSync(srcDir)) {
    console.error('Source folder not found:', srcDir);
    process.exit(1);
}

if (fs.existsSync(destDir)) {
    removeDir(destDir);
}

copyDir(srcDir, destDir);
fs.writeFileSync(path.join(destDir, '.nojekyll'), '');
console.log('Copied out/ to docs/ successfully.');
