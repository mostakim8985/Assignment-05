async function loadAllIssues() {
    spinnerShow(true)
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    spinnerShow(true)
    allIssues(data)
}







const labelsByEl = (arr) => {
    const createElement = arr.map((el) => `<span class="badge badge-warning">${el}</span>`);
    return createElement.join(" ");
}


const allIssues = (issues) => {
    const allIssues = document.getElementById('allIssues');
    let count = 0;


    const countingContainer = document.getElementById('countissue');



    allIssues.innerHTML = " ";


    issues.data.forEach((issue) => {
        count++;

        let createdAt = issue.createdAt.split('T')[0];
        let updatedAt = issue.updatedAt.split('T')[0];
        const div = document.createElement('div');
        if (issue.status != 'open') {
            div.innerHTML = `
        <div id="statusBy${issue.id}" onclick="loadModalInfo(${issue.id})" class="shadow shadow-green-950 border-t-5 border-blue-700 p-4 rounded-xl space-y-4 h-full">
                <div class="flex items-center justify-between">
                    <img src="assets/Closed- Status .png" alt="">
                    <span class="badge badge-outline badge-error">${issue.priority}</span>
                </div>

                <div class="space-y-2">
                    <h3 class="text-xl font-semibold lg:w-[70%]">${issue.title}</h3>
                    <p class="text-[#64748B] line-clamp-2">${issue.description}</p>
                </div>
                <div class="space-x-2">${labelsByEl(issue.labels)}</div>
                <div class="badge badge-success mt-3">${issue.status}</div>
                               <div class="flex items-center justify-between lg:mt-20 text-[#64748B]">
                    <div class="space-y-4">
                        <p>#${issue.id} by ${issue.author}</p>
                        <p>Assignee: ${issue.assignee ? issue.assignee : 'unassigned'}</p>
                    </div>
                    <div class="text-end space-y-4">
                        <p>${createdAt}</p>
                        <p>Updated: ${updatedAt}</p>
                    </div>
                </div>
            </div>
        
        
            `;
            allIssues.appendChild(div);
        }
        else {
            div.innerHTML = `
        <div id="statusBy${issue.id}" onclick="loadModalInfo(${issue.id})" class="shadow shadow-green-950 border-t-5 border-green-700 p-4 rounded-xl space-y-4 h-full">
                <div class="flex items-center justify-between">
                    <img src="assets/Open-Status.png" alt="">
                    <span class="badge badge-outline badge-error">${issue.priority}</span>
                </div>

                <div class="space-y-2">
                    <h3 class="text-xl font-semibold lg:w-[70%]">${issue.title}</h3>
                    <p class="text-[#64748B] line-clamp-2">${issue.description}</p>
                </div>
                <div class="space-x-2">${labelsByEl(issue.labels)}</div>
                <div class="badge badge-success mt-3">${issue.status}</div>
                               <div class="flex items-center justify-between lg:mt-20 text-[#64748B]">
                    <div class="space-y-4">
                        <p>#${issue.id} by ${issue.author}</p>
                        <p>Assignee: ${issue.assignee ? issue.assignee : 'unassigned'}</p>
                    </div>
                    <div class="text-end space-y-4">
                        <p>${createdAt}</p>
                        <p>Updated: ${updatedAt}</p>
                    </div>
                </div>
            </div>
        
        
            `;
            allIssues.appendChild(div);
        }




    })



    countingContainer.innerHTML = `
    <h4 class="lg:text-xl font-semibold">${count} Issues</h4>
                    <p class="text-[#64748B] lg:text-[16px] text-[12px] lg:w-full w-30">Track and manage your project issues</p>
    `;
    spinnerShow(false)
}


// toggol btn

const toggolBtn = (id) => {
    const allBtn = document.getElementById('allBtn');
    allBtn.classList.remove('active')
    const openBtn = document.getElementById('openBtn');
    openBtn.classList.remove('active');
    const closedBtn = document.getElementById('closedBtn');
    closedBtn.classList.remove('active');

    const selected = document.getElementById(id);
    selected.classList.add('active')



}




// Load All section 


document.getElementById('allBtn').addEventListener('click', () => {
    loadAllIssues();


})

// Load Open Section
async function loadOpenIssues() {
    spinnerShow(true)
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    openIssues(data.data);
}







document.getElementById('openBtn').addEventListener('click', () => {
    loadOpenIssues();


})







const openIssues = (data) => {

    const countingContainer = document.getElementById('countissue');
    const allIssues = document.getElementById('allIssues');
    let count = 0;
    allIssues.innerHTML = " ";

    data.forEach((issue) => {

        let createdAt = issue.createdAt.split('T')[0];
        let updatedAt = issue.updatedAt.split('T')[0];
        const div = document.createElement('div');
        if (issue.status == 'open') {
            count++;
            div.innerHTML = `
        <div id="statusBy${issue.id}" onclick="loadModalInfo(${issue.id})" class="shadow shadow-green-950 border-t-5 border-green-700 p-4 rounded-xl space-y-4 h-full">
                <div class="flex items-center justify-between">
                    <img src="assets/Open-Status.png" alt="">
                    <span class="badge badge-outline badge-error">${issue.priority}</span>
                </div>

                <div class="space-y-2">
                    <h3 class="text-xl font-semibold lg:w-[70%]">${issue.title}</h3>
                    <p class="text-[#64748B] line-clamp-2">${issue.description}</p>
                </div>
                <div class="space-x-2">${labelsByEl(issue.labels)}</div>
                <div class="badge badge-success mt-3">${issue.status}</div>
                               <div class="flex items-center justify-between lg:mt-20 text-[#64748B]">
                    <div class="space-y-4">
                        <p>#${issue.id} by ${issue.author}</p>
                        <p>Assignee: ${issue.assignee ? issue.assignee : 'unassigned'}</p>
                    </div>
                    <div class="text-end space-y-4">
                        <p>${createdAt}</p>
                        <p>Updated: ${updatedAt}</p>
                    </div>
                </div>
            </div>
        
        
            `;
            allIssues.appendChild(div);
        }
    })
    spinnerShow(false)

    countingContainer.innerHTML = `
    <h4 class="lg:text-xl font-semibold">${count} Issues</h4>
                    <p class="text-[#64748B] lg:text-[16px] text-[12px] lg:w-full w-30">Track and manage your project issues</p>
    `;
}




// Load Closed section 




async function loadClosedIssues() {
    spinnerShow(true)
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    ClosedIssues(data.data);
}

document.getElementById('closedBtn').addEventListener('click', () => {
    loadClosedIssues();


})
const ClosedIssues = (data) => {
    const countingContainer = document.getElementById('countissue');
    let count = 0;
    const allIssues = document.getElementById('allIssues');
    allIssues.innerHTML = " ";

    data.forEach((issue) => {

        let createdAt = issue.createdAt.split('T')[0];
        let updatedAt = issue.updatedAt.split('T')[0];
        const div = document.createElement('div');
        if (issue.status != 'open') {
            count++;
            div.innerHTML = `
        <div id="statusBy${issue.id}" onclick="loadModalInfo(${issue.id})" class="shadow shadow-green-950 border-t-5 border-blue-700 p-4 rounded-xl space-y-4 h-full">
                <div class="flex items-center justify-between">
                    <img src="assets/Closed- Status .png" alt="">
                    <span class="badge badge-outline badge-error">${issue.priority}</span>
                </div>

                <div class="space-y-2">
                    <h3 class="text-xl font-semibold lg:w-[70%]">${issue.title}</h3>
                    <p class="text-[#64748B] line-clamp-2">${issue.description}</p>
                </div>
                <div class="space-x-2">${labelsByEl(issue.labels)}</div>
                <div class="badge badge-success mt-3">${issue.status}</div>
                               <div class="flex items-center justify-between lg:mt-20 text-[#64748B]">
                    <div class="space-y-4">
                        <p>#${issue.id} by ${issue.author}</p>
                        <p>Assignee: ${issue.assignee ? issue.assignee : 'unassigned'}</p>
                    </div>
                    <div class="text-end space-y-4">
                        <p>${createdAt}</p>
                        <p>Updated: ${updatedAt}</p>
                    </div>
                </div>
            </div>
        `;
            allIssues.appendChild(div);
        }
    })
    spinnerShow(false)

    countingContainer.innerHTML = `
    <h4 class="lg:text-xl font-semibold">${count} Issues</h4>
                    <p class="text-[#64748B] lg:text-[16px] text-[12px] lg:w-full w-30">Track and manage your project issues</p>
    `;
}


document.getElementById('searchBtn').addEventListener('click', () => {
    const searchValue = document.getElementById('searchValue').value;

    loadSearch(searchValue);
})


async function loadSearch(input) {
    spinnerShow(true)
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${input}`);
    const data = await res.json();
    allIssues(data);
}









const loadModalInfo = (id) => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
    fetch(url)
        .then((res) => res.json())
        .then((json) => loadModal(json.data))
}


const loadModal = (input) => {
    let createdAt = input.createdAt.split('T')[0];
    const modalInfo = document.getElementById('modalInfo');
    modalInfo.innerHTML = `
<div class="space-y-2">
                        <h3 class="text-2xl font-bold">${input.title}</h3>
                        <div class="flex text-[#64748B] space-x-2 text-[14px]">
                            <span class="badge badge-success">${input.status}</span>
                            <span class="text-[6px] text-green-500 flex items-center justify-center"><i class="fa-solid fa-circle"></i></span>
                            <span>Opened by ${input.author}</span>
                           <span class="text-[6px] text-green-500 flex items-center justify-center"><i class="fa-solid fa-circle"></i></span>
                            <span>${createdAt}</span>

                        </div>
                    </div>
                    <div class="space-x-2">${labelsByEl(input.labels)}</div>
                    <p class="text-[#64748B]">${input.description}</p>
                    <div class="flex justify-between">
                        <div>
                            <p class="text-[#64748B]">Assignee:</p>
                            <p class="font-semibold">${input.assignee ? input.assignee : 'Unassigned'}</p>
                        </div>
                        <div>
                            <p class="text-[#64748B]">Priority:</p>
                            <span class="badge badge-warning">${input.priority}</span>
                        </div>
                    </div>

`


    document.getElementById('my_modal').showModal()
}


const spinnerShow = (input) => {
    if (input == true) {
        const spinner = document.getElementById('spinner');
        spinner.classList.remove('hidden')
        
        spinner.classList.add('flex')

        document.getElementById('allIssues').classList.add('hidden');
    }
    else {
        document.getElementById('allIssues').classList.remove('hidden');

        document.getElementById('spinner').classList.add('hidden');
    }
}
loadAllIssues();