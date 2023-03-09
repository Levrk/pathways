
document.addEventListener('DOMContentLoaded', () => {
    // ! identifying all paths on load
    const paths = document.querySelectorAll('.pathway-img'); 

    paths.forEach((path) => {
        
        // ! mouse on event changes title to path.name
        path.addEventListener('mouseover', () => {
            const title = document.getElementById('title');
            title.textContent = path.id; 
            title.classList.add('on');
            });

        // ! mouse off event sets title to blank
        path.addEventListener('mouseout', () => {
            const title = document.getElementById('title');
            title.textContent = ""; 
            title.classList.remove('on');
            }); 
    });
});

