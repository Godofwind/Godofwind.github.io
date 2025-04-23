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
// 页面加载初始化
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有内容区块
    const articles = document.querySelectorAll('.content-article');
    // 获取所有导航链接
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    // 默认显示首页
    showArticle('home');

    // 绑定导航点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showArticle(targetId);
            updateUrlHash(targetId);
        });
    });

    // 监听浏览器前进/后退
    window.addEventListener('hashchange', function() {
        const targetId = window.location.hash.substring(1) || 'home';
        showArticle(targetId);
    });
});

// 显示指定文章
function showArticle(targetId) {
    const articles = document.querySelectorAll('.content-article');
    
    articles.forEach(article => {
        if (article.id === targetId) {
            article.classList.add('active');
        } else {
            article.classList.remove('active');
        }
    });

    // 更新导航高亮
    updateNavHighlight(targetId);
}

// 更新URL Hash
function updateUrlHash(targetId) {
    if (targetId === 'home') {
        history.replaceState(null, null, ' ');
    } else {
        history.replaceState(null, null, `#${targetId}`);
    }
}

// 更新导航高亮状态
function updateNavHighlight(activeId) {
    const links = document.querySelectorAll('.sidebar-nav a');
    
    links.forEach(link => {
        const linkId = link.getAttribute('href').substring(1);
        if (linkId === activeId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
