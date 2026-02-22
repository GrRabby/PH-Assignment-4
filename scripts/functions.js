function add_job_cards(jobs_list){
    document.getElementById('no-jobs-card').hidden = false
    const job_section = document.getElementById('job-cards');
    update_dashboard()
    let filtered_jobs;
    if (current_tab === 'all'){
        filtered_jobs = jobs_list
    }else if(current_tab === 'interview'){
        filtered_jobs = jobs_list.filter(job => job.status === 'INTERVIEW')
    }else if(current_tab === 'rejected'){
        filtered_jobs = jobs_list.filter(job => job.status === 'REJECTED')
    }
    document.getElementById('availabe-jobs').innerText =  `${filtered_jobs.length} of ${jobs_list.length} Jobs`;
    job_section.innerHTML = ''
    // iterate all jobs and create the cards for each job and append
    let index = 0
    for(jobs of filtered_jobs){
        // hide the default no jobs card
        document.getElementById('no-jobs-card').hidden = true
        const div = document.createElement('div');
        div.setAttribute('id', 'cards');
        div.setAttribute('class', 'bg-base-100 p-6 rounded-lg border border-base-300 shadow-md border-l-4 hover:-translate-y-0.5 transition duration-400 ease-in-out opacity-0 -translate-x-10');
        if(jobs.status === 'INTERVIEW') div.classList.add('border-l-green-600/50')
        if(jobs.status === 'REJECTED') div.classList.add('border-l-red-600/50')
        div.innerHTML = `
            <div class="w-full space-y-1 flex justify-between items-center">
                <div>
                    <h1 class="text-[18px] font-semibold">${jobs.company}</h1>
                    <h2 class="text-4 text-[#64748B]">${jobs.designation}</h2>
                </div>
                <button class="btn btn-soft btn-primary h-8 w-8 rounded-[1000px] flex border" onclick="openDeleteModal(${jobs.JobId})"><i class="fa-regular fa-trash-can"></i></button>
            </div>
            <p class="text-[14px] text-gray-600 my-5">${jobs.salary}</p>
            <div id="badge" class="bg-gray-200 w-[113px] h-9 flex justify-center items-center py-2 px-3 mb-2 rounded-sm">
                <p class="text-gray-800 text-[14px] font-medium">${jobs.status}</p>
            </div>
            <p class="text-base-900 text-[14px]">${jobs.details}</p>
            <div id="buttons" class="mt-5 space-x-2">
                <button class="btn btn-soft border border-[#10B981] bg-base-100 max-h-9" onclick="update_job_status(${jobs.JobId},'INTERVIEW',this)">
                    <p class="text-[#10B981] font-bold">Interview</p>
                </button>
                <button class="btn btn-soft border border-[#EF4444] bg-base-100 max-h-9" onclick="update_job_status(${jobs.JobId},'REJECTED',this)">
                    <p class="text-[#EF4444] font-bold">Rejected</p>
                </button>
            </div>
        `
        if (jobs.status === 'INTERVIEW') {
            const badge = div.querySelector('#badge');
            const badge_text = badge.querySelector('p');
            badge.classList.add('bg-green-200', 'border', 'border-[#10B981]');
            badge_text.classList.add('text-[#10B981]');
        }else if(jobs.status === 'REJECTED'){
            const badge = div.querySelector('#badge');
            const badge_text = badge.querySelector('p');
            badge.classList.add('bg-red-200', 'border', 'border-[#EF4444]');
            badge_text.classList.add('text-[#EF4444]');
        }
        
        
        job_section.appendChild(div);
        setTimeout(() => {
            div.classList.remove('opacity-0', '-translate-x-10');
            div.classList.add('opacity-100',);
        }, 10);
        index++
    }
}
function tabs_switched(element,type){
    const children = document.getElementById('tab-items').children;
    Array.from(children).forEach(ele => {
        ele.classList.remove('btn-primary');
        ele.children[0].classList.remove('text-white');
    });
    current_tab = type // flag the selected tab to update job list depending on selected tab
    if (type === 'all'){
        element.classList.add('btn-primary')
        element.children[0].classList.add('text-white')
        add_job_cards(jobs_data)
    }else if(type === 'interview'){
        element.classList.add('btn-primary')
        element.children[0].classList.add('text-white')
        add_job_cards(jobs_data)
    }else if(type === 'rejected'){
        element.classList.add('btn-primary')
        element.children[0].classList.add('text-white')
        add_job_cards(jobs_data)
    }
}
function remove_job(id){
    if(current_tab === 'all'){
        jobs_data = jobs_data.filter(job => job.JobId !== id);
        add_job_cards(jobs_data)
    }else{
        update_job_status(id) // reset the status to default
    }
}
function update_job_status(id,type='NOT APPLIED',element=null){
    for(jobs of jobs_data){
        if(jobs.JobId === id){
            if(type === 'REJECTED'){
                jobs.status = 'REJECTED'
            }else if(type === 'INTERVIEW'){
                jobs.status = 'INTERVIEW'
            }else{
                jobs.status = 'NOT APPLIED'
            }
        }
    }
    add_job_cards(jobs_data)
}
function openDeleteModal(id) {
  selectedJobId = id;
  document.getElementById("my_modal").showModal();
}
function confirmDelete(result) {
    document.getElementById("my_modal").close();
    if(!result){
        return
    }  
    remove_job(selectedJobId);
}
function update_dashboard(){
    document.getElementById('total-jobs').innerText =  jobs_data.length;
    document.getElementById('interview').innerText = jobs_data.filter(job => job.status === 'INTERVIEW').length
    document.getElementById('rejected').innerText = jobs_data.filter(job => job.status === 'REJECTED').length
}

