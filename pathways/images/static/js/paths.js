

document.addEventListener('DOMContentLoaded', () => {
    const paths = document.querySelectorAll('.pathway-img'); 
    console.log(paths[0]);
    // Rest of your code here

    paths.forEach((path) => {
        
        //mouse on event
        path.addEventListener('mouseover', () => {
            const title = document.getElementById('title');
            title.textContent = path.id; 
            title.classList.add('on');
            });

        //mouse off event
        path.addEventListener('mouseout', () => {
            const title = document.getElementById('title');
            title.textContent = ""; 
            title.classList.remove('on');
            }); 
    });
});

