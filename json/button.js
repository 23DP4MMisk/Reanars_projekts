function Dowloadzip() {
    // Failu.zip vajag pievienot projekta mape dowloadzip
    const zipUrl = ''; // faila atrodašanas vieta
    a.href = zipUrl;
    a.dowload = ''; // faila nosaukums 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}