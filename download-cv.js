document.getElementById('download-cv').addEventListener('click', () => {
    const a = document.getElementById('download-cv')
    a.href = 'CV.pdf'
    a.download = 'SOROKINA_QA_RESUME.pdf'
})