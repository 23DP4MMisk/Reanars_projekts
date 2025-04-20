function Dowloadzip() {
    // Failu.zip vajag pievienot projekta mape dowloadzip
    const zipUrl = 'dowloadzip/LibaryManager-1.zip'; // faila atrodašanas vieta
    const a = document.createElement('a');
    a.href = zipUrl;
    a.download = 'LibaryManager.zip'; // faila nosaukums 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    
}