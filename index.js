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

document.getElementById('excel-download').onclick = function() {
    location.href = "https://www.microsoft.com/en-in/microsoft-365/excel";
}

document.getElementById('basic').addEventListener('click', function() {
    var content = document.getElementById('basic-content');
    if(content.style.display === 'block') {
        content.style.display = 'none';
    }
    else {
        content.style.display = 'block';
    }
});

document.getElementById('intermediate').addEventListener('click', function() {
    var content = document.getElementById('inter-content');
    if(content.style.display === 'block') {
        content.style.display = 'none';
    }
    else {
        content.style.display = 'block';
    }
});

document.getElementById('advanced').addEventListener('click', function() {
    var content = document.getElementById('advanced-content');
    document.getElementById('advanced').style.color = 'white';
    if(content.style.display === 'block') {
        content.style.display = 'none';
    }
    else {
        content.style.display = 'block';
    }
});

document.getElementById('aws').addEventListener('click', function() {
    var content = document.getElementById('aws-content');
    document.getElementById('aws').style.color = 'white';
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