const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function removeBorder(e){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShowcase(e){
    tabContentItems.forEach(item => item.classList.remove('show'))
}

function selectItem(e){
    //Add border to current tab
    removeBorder();
    removeShowcase();
    this.classList.add('tab-border')
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

//Listen for tab click
tabItems.forEach(item =>item.addEventListener('click', selectItem))