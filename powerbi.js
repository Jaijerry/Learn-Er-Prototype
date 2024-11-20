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

document.getElementById('mod1-btn').addEventListener('click', function() {
    var content = document.getElementById('mod1-content');
    if(content.style.display === 'block') {
        content.style.display = 'none';
    }
    else {
        content.style.display = 'block';
    }
});

document.getElementById('mod2-btn').addEventListener('click', function() {
    var content = document.getElementById('mod2-content');
    if(content.style.display === 'block') {
        content.style.display = 'none';
    }
    else {
        content.style.display = 'block';
    }
});

document.getElementById('mod3-btn').addEventListener('click', function() {
    var content = document.getElementById('mod3-content');
    if(content.style.display === 'block') {
        content.style.display = 'none';
    }
    else {
        content.style.display = 'block';
    }
});

document.getElementById('mod4-btn').addEventListener('click', function() {
    var content = document.getElementById('mod4-content');
    if(content.style.display === 'block') {
        content.style.display = 'none';
    }
    else {
        content.style.display = 'block';
    }
});

document.getElementById('mod5-btn').addEventListener('click', function() {
    var content = document.getElementById('mod5-content');
    if(content.style.display === 'block') {
        content.style.display = 'none';
    }
    else {
        content.style.display = 'block';
    }
});