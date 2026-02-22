const jobs_data = [
    {
        company : 'Mobile First Corp',
        designation : 'React Native Developer',
        salary : 'Remote • Full-time • $130,000 - $175,000',
        status : 'NOT APPLIED',
        details : 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
        JobId : 0
    },
    {
        company : 'WebFlow Agency',
        designation : 'React Native Developer',
        salary : 'Los Angeles, CA • Part-time • $80,000 - $120,000',
        status : 'NOT APPLIED',
        details : 'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.',
        JobId : 1
    },
    {
        company : 'DataViz Solutions',
        designation : 'Data Visualization Specialist',
        salary : 'Boston, MA • Full-time • $125,000 - $165,000',
        status : 'NOT APPLIED',
        details : 'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.',
        JobId : 2
    },
    {
        company : 'CloudFirst Inc',
        designation : 'Backend Developer',
        salary : 'Seattle, WA • Full-time • $140,000 - $190,000',
        status : 'NOT APPLIED',
        details : 'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.',
        JobId : 3
    },
    {
        company : 'Innovation Labs',
        designation : 'UI/UX Engineer',
        salary : 'Austin, TX • Full-time • $110,000 - $150,000',
        status : 'NOT APPLIED',
        details : 'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.',
        JobId : 4
    },
    {
        company : 'MegaCorp Solutions',
        designation : 'JavaScript Developer',
        salary : 'New York, NY • Full-time • $130,000 - $170,00',
        status : 'NOT APPLIED',
        details : 'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.',
        JobId : 5
    },
    {
        company : 'StartupXYZ',
        designation : 'Full Stack Engineer',
        salary : 'Remote • Full-time • $120,000 - $160,000',
        status : 'Interview',
        details : 'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.',
        JobId : 6
    },
        {
        company : 'TechCorp Industries',
        designation : 'Senior Frontend Developer',
        salary : 'San Francisco, CA • Full-time • $130,000 - $175,000',
        status : 'NOT APPLIED',
        details : 'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.',
        JobId : 7
    },
]
document.getElementById('availabe-jobs').innerText =  `${jobs_data.length} Jobs`;
document.getElementById('total-jobs').innerText =  jobs_data.length;
document.getElementById('no-jobs-card').hidden = false
add_job_cards(jobs_data)
function add_job_cards(jobs_data){
    // iterate all jobs and create the cards for each job and append
    for(jobs of jobs_data){
        // hide the default no jobs card
        document.getElementById('no-jobs-card').hidden = true
        const div = document.createElement('div');
        const job_section = document.getElementById('job-cards');
        div.setAttribute('id', 'cards');
        div.setAttribute('class', 'bg-white p-6 rounded-lg border border-[#F1F2F4]');
        div.innerHTML = `
            <div class="w-full space-y-1 flex justify-between items-center">
                <div>
                    <h1 class="text-[18px] font-semibold">${jobs.company}</h1>
                    <h2 class="text-4 text-[#64748B]">${jobs.designation}</h2>
                </div>
                <button class="btn btn-soft h-8 w-8 rounded-[1000px] bg-transparent flex"><i class="fa-regular fa-trash-can"></i></button>
            </div>
            <p class="text-[14px] text-[#64748B] my-5">${jobs.salary}</p>
            <div id="badge" class="bg-[#EEF4FF] w-[113px] h-9 flex justify-center items-center py-2 px-3 mb-2 rounded-sm">
                <p class="text-[#002C5C] text-[14px] font-medium">${jobs.status}</p>
            </div>
            <p class="text-[#323B49] text-[14px]">${jobs.details}</p>
            <div id="buttons" class="mt-5 space-x-2">
                <button class="btn btn-soft border border-[#10B981] bg-base-100 max-h-9">
                    <p class="text-[#10B981] font-bold">Interview</p>
                </button>
                <button class="btn btn-soft border border-[#EF4444] bg-base-100 max-h-9">
                    <p class="text-[#EF4444] font-bold">Rejected</p>
                </button>
            </div>
        `
        job_section.appendChild(div);
    }
}

