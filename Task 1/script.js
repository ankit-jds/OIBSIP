const pop_join = document.getElementById('pop_join');

window.addEventListener('scroll', () => {
    console.log("window is scrolled...");
    let btn = document.getElementById("join_btn");
    // console.log(btn);
    let btn_rect = btn.getBoundingClientRect();
    // console.log(btn_rect);
    let bottom = btn_rect.bottom;
    let top = btn_rect.top;
    let viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    // console.log(viewportHeight,top,bottom);

    // partial visible condition
    if (viewportHeight - top > 0 && bottom > 0) {
        console.log("join is partially visible");
        pop_join.classList.replace('show_flex', "hide");
    } else {
        pop_join.classList.replace('hide', 'show_flex');
    }

    // full visible condition
    if (bottom > 0 && bottom <= viewportHeight && top >= 0) {
        console.log("join is in the view");
    }
});

const member_template = [
    [
        './images/member.png', 'Member', 'Designation'
    ]
]
let html_to_be_added = ''
for (let index = 0; index < 10; index++) {
    const member = member_template[0];
    let image_path = member[0];
    let name = member[1];
    let designation = member[2];
    if (designation === 'Team Lead') {
        leader = 'leader';
    }
    let member_code = `
<div class="member">
<div class="photo">
    <img src="${image_path}"
        alt="team member photo" class="photo">
</div>
<div class="name">${name}
</div>
<div class="designation">${designation}</div>
</div>`
    html_to_be_added += member_code;
};

document.getElementsByClassName('team')[0].innerHTML += html_to_be_added;
