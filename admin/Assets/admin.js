// يمكنك إضافة أي دوال تفاعلية هنا
document.addEventListener('DOMContentLoaded', function() {
    console.log('Admin dashboard loaded');
    
    // مثال: تفعيل العناصر النشطة في القائمة
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
