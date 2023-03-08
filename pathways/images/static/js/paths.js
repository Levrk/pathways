

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




/* // Get the path name from the id attribute
        const pathName = path.querySelector('.pathway-img').id;

        // Add an event listener to update the title text when the path is hovered over
        path.addEventListener('mouseover', () => {
        const title = document.getElementById('title');
        title.textContent = pathName;
        });

        // Add an event listener to reset the title text when the path is no longer being hovered over
        path.addEventListener('mouseout', () => {
        const title = document.getElementById('title');
        title.textContent = '';
        });*/