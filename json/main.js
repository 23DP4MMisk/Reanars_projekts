document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.highlight-link');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Saites klikšķu novēršana

            const targetId = link.getAttribute('href').slice(1); // Iegūstiet elementa ID no href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Ritiniet lapu līdz vajadzīgajam elementam
                targetElement.scrollIntoView({
                    behavior: "smooth", // vienmērīga ritināšana
                    block: "start"      // elements tiks nogādāts redzamās zonas sākumā
                });

                // Izceltās animācijas pievienošana
                targetElement.classList.add('highlight');
                
                // Mēs noņemam fona apgaismojumu pēc 3 sekundēm
                setTimeout(() => {
                    targetElement.classList.remove('highlight');
                }, 3000);
            }
        });
    });
});