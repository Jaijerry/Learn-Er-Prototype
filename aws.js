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

document.getElementById('aws').addEventListener('click', function() {
    var content = document.getElementById('aws-content');
    if(content.style.display === 'block') {
        content.style.display = 'none';
    }
    else {
        content.style.display = 'block';
    }
});

document.getElementById('aws-download').onclick = function() {
    location.href = "https://aws.amazon.com/certification/certified-solutions-architect-associate/";
}

document.getElementById('mod-btn').addEventListener('click', function() {
    var content = document.getElementById('mod-content');
    if(content.style.display === 'block') {
        content.style.display = 'none';
    }
    else {
        content.style.display = 'block';
    }
});