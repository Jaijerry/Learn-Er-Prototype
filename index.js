document.getElementById('dropbtn').addEventListener('click', function() { 
    var content = document.getElementById('dropdown-content'); 
    if (content.style.display === 'block') { 
        content.style.display = 'none'; 
    } else { 
        content.style.display = 'block'; 
    }
});

document.getElementById('nav-toggle').addEventListener('click', function() { 
    var menu = document.getElementById('nav-menu');
    var bar = document.getElementById('bar'); 
    if (menu.style.display === 'flex') { 
        menu.style.display = 'none';
        bar.style.color = 'black'; 
    } else { 
        menu.style.display = 'flex'; 
        bar.style.color = '#FFFECB';
    }
});

document.getElementById('qrBtn').addEventListener('click', function() {
    document.getElementById('qr-container').style.display = 'flex';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('qr-container').style.display = 'none';
});

document.getElementById('brochure-btn').addEventListener('click', function() {
    document.getElementById('brochure').style.display = 'flex';
});

document.getElementById('closeBrochure').addEventListener('click', function() {
    document.getElementById('brochure').style.display = 'none';
});