// 自动高亮当前章节
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar-nav a');
    const currentHash = window.location.hash;

    links.forEach(link => {
        if (link.getAttribute('href') === currentHash) {
            link.style.backgroundColor = '#0366d6';
            link.style.color = 'white';
        }

        link.addEventListener('click', function(e) {
            links.forEach(l => {
                l.style.backgroundColor = '';
                l.style.color = '';
            });
            this.style.backgroundColor = '#0366d6';
            this.style.color = 'white';
        });
    });
});

// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
