const milestonesData = JSON.parse(data).data;

function loadMilestones() {
    const milestones = document.querySelector('.milestones');
    milestones.innerHTML = `${milestonesData.map(function (milestone) {
        return `<div class="milestone border-b">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" /></div>
              <div onclick="openMilestone(this,${milestone._id})">
                <p>
                  ${milestone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              ${milestone.modules.map(function (module) {
            return `<div class="module border-b">
                <p>${module.name}</p>
              </div>`
        }).join("")};
            </div>
          </div>`
    }).join("")}`;
}
// Click korle khulbe....
function openMilestone(mileStoneElement, id) {
    const currentPannel = mileStoneElement.parentNode.nextElementSibling;
    const shownPannel = document.querySelector('.show');
    const active = document.querySelector('.active');

    if (active && !mileStoneElement.classList.contains('active')) {
        active.classList.remove('active');
    }
    mileStoneElement.classList.toggle('active');


    if (!currentPannel.classList.contains('show') && shownPannel) {
        shownPannel.classList.remove('show');
    } // ager shown closed
    currentPannel.classList.toggle("show");
    // const animation=document.querySelector('.milestoneDetails')
    showMileStone(id);

}
function showMileStone(id) {
    const milestoneImage = document.querySelector('.milestoneImage');
    milestoneImage.src = milestonesData[id].image;

    const title = document.querySelector('.title');
    const description = document.querySelector('.details');

    milestoneImage.style.opacity = '0';
    title.innerText = milestonesData[id].name;
    description.innerText = milestonesData[id].description;


}

// listen for image loading
const milestoneImage = document.querySelector('.milestoneImage');
milestoneImage.onload = function () {
    this.style.opacity = '1';
}
loadMilestones(); 