async function loadAllIssues() {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    allIssues(data)
}
loadAllIssues();





// {
// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"
// },


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
        <div id="statusBy${issue.id}" class="shadow shadow-green-950 border-t-5 border-blue-700 p-4 rounded-xl space-y-4 h-full">
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
                        <p>Assignee: ${issue.assignee}</p>
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
        <div id="statusBy${issue.id}" class="shadow shadow-green-950 border-t-5 border-green-700 p-4 rounded-xl space-y-4 h-full">
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
                        <p>Assignee: ${issue.assignee}</p>
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
        <div id="statusBy${issue.id}" class="shadow shadow-green-950 border-t-5 border-green-700 p-4 rounded-xl space-y-4 h-full">
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
                        <p>Assignee: ${issue.assignee}</p>
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
}




// Load Closed section 




async function loadClosedIssues() {
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
        <div id="statusBy${issue.id}" class="shadow shadow-green-950 border-t-5 border-blue-700 p-4 rounded-xl space-y-4 h-full">
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
                        <p>Assignee: ${issue.assignee}</p>
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

    countingContainer.innerHTML=`
    <h4 class="lg:text-xl font-semibold">${count} Issues</h4>
                    <p class="text-[#64748B] lg:text-[16px] text-[12px] lg:w-full w-30">Track and manage your project issues</p>
    `;
}





