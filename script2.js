//aritmatika
function calculateSum() {
    let a = parseFloat(document.getElementById('firstTerm').value);
    let d = parseFloat(document.getElementById('commonDifference').value);
    let n = parseInt(document.getElementById('numberOfTerms').value);

    if (isNaN(a) || isNaN(d) || isNaN(n) || n <= 0) {
        document.getElementById('result-arithmetic').innerText = 'Harap masukkan nilai yang valid!';
        return;
    }

    let sum = (n / 2) * (2 * a + (n - 1) * d);
    document.getElementById('result-arithmetic').innerText = `Jumlah deret: ${sum}`;
}

function calculateNthTerm() {
    let a = parseFloat(document.getElementById('firstTerm').value);
    let d = parseFloat(document.getElementById('commonDifference').value);
    let n = parseInt(document.getElementById('numberOfTerms').value);

    if (isNaN(a) || isNaN(d) || isNaN(n) || n <= 0) {
        document.getElementById('result-arithmetic').innerText = 'Harap masukkan nilai yang valid!';
        return;
    }

    let nthTerm = a + (n - 1) * d;
    document.getElementById('result-arithmetic').innerText = `Suku ke-${n}: ${nthTerm}`;
}

//geometri
function calculateSumGeo() {
    let a = parseFloat(document.getElementById('firstTermGeo').value);
    let r = parseFloat(document.getElementById('commonRatio').value);
    let n = parseInt(document.getElementById('numberOfTermsGeo').value);

    if (isNaN(a) || isNaN(r) || isNaN(n) || n <= 0) {
        document.getElementById('result-geo').innerText = 'Harap masukkan nilai yang valid!';
        return;
    }

    let sumGeo;
    if (r === 1) {
        sumGeo = a * n;
    } else {
        sumGeo = a * (1 - Math.pow(r, n)) / (1 - r);
    }

    document.getElementById('result-geo').innerText = `Jumlah deret geometri: ${sumGeo}`;
}

function calculateNthTermGeo() {
    let a = parseFloat(document.getElementById('firstTermGeo').value);
    let r = parseFloat(document.getElementById('commonRatio').value);
    let n = parseInt(document.getElementById('numberOfTermsGeo').value);

    if (isNaN(a) || isNaN(r) || isNaN(n) || n <= 0) {
        document.getElementById('result-geo').innerText = 'Harap masukkan nilai yang valid!';
        return;
    }

    let nthTermGeo = a * Math.pow(r, n - 1);
    document.getElementById('result-geo').innerText = `Suku ke-${n} dari deret geometri: ${nthTermGeo}`;
}
