// index.js

// Fungsi untuk menganimasikan teks yang sudah ada
function animateText(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = ''; // Menggunakan innerHTML

    let i = 0;
    function animate() {
        if (i < text.length) {
            if (text.charAt(i) === "<") {
                let closingBracketIndex = text.indexOf(">", i);
                if (closingBracketIndex !== -1) {
                    element.innerHTML += text.slice(i, closingBracketIndex + 1);
                    i = closingBracketIndex + 1;
                }
            } else {
                element.innerHTML += text.charAt(i); // Menggunakan innerHTML
                i++;
            }
            setTimeout(animate, speed);
        }
    }
    animate();
}

// Panggil fungsi untuk menganimasikan teks setelah dokumen selesai dimuat
window.addEventListener('DOMContentLoaded', () => {
    const pElement = document.querySelector('.header-text p');
    const h1Element = document.querySelector('.header-text h1 span');

    animateText(pElement, 100);
    setTimeout(() => {
        animateText(h1Element, 100);
    }, 3000); // Tunggu 3 detik sebelum menganimasikan teks h1
});
