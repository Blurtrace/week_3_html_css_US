const toggle = document.querySelector('.MenuToggle');
const sidebar = document.querySelector('.sidebar');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
});
