document.getElementById('download-cv').addEventListener('click', function () {
    const a = document.getElementById('download-cv')
    a.href = 'test.pdf'
    a.download = 'SOROKINA_QA_RESUME.pdf'
});