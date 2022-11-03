export function showCustomElements() {
   const projects = document.querySelectorAll(`.project`);
   const projectsButtonsWrapper = document.querySelector(`.projects-buttons`);
   const projectsButtons = projectsButtonsWrapper.querySelectorAll('.button');

   projectsButtonsWrapper.addEventListener('click', (e) => {
      if (e.target.tagName != 'BUTTON') {
         return
      }
      projectsButtons.forEach(button => button.classList.remove('projects-button-active'));
      e.target.classList.add('projects-button-active');

      projects.forEach(project => {
         project.classList.remove('project-disable');
         if (project.dataset.projectCategory.indexOf(e.target.dataset.projectCategory) == -1 && e.target.dataset.projectCategory != 'all') {
            project.classList.add('project-disable')
         }
      })
   })
}
