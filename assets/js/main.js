

function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const local1 = document.getElementById('profile.local1')
    local1.innerText = profileData.local1

    const local2 = document.getElementById('profile.local2')
    local2.innerText = profileData.local2

    const number1 = document.getElementById('profile.number1')
    number1.innerText = profileData.number1

    const number2 = document.getElementById('profile.number2')
    number2.innerText = profileData.number2

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email

    const linkedin = document.getElementById('profile.linkedin')
    linkedin.innerText = profileData.linkedin

}

function updateEducation(profileData) {
    const educations = document.getElementById('profile.educations')

    educations.innerHTML = profileData.educations.map(education => `<div class="content">
                    <ul>
                        <li class="anhembi"><h3>${education.graduation}</h3></li>
                        <li class="calendar">${education.time}</li>
                        <li>${education.institution}</li>
                    </ul>
                </div>`)
        .join('')
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softskills')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardskills')

    hardSkills.innerHTML = profileData.skills.hardSkills
        .map(skill =>
            `<li class="${skill.name}">
            <img src="${skill.logo}" alt="${skill.name}">
        </li>`)
        .join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')

    languages.innerHTML = profileData.languages.map(language =>
        `<li>${language}</li>`
    )
        .join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(site =>
        `<li>
                        <h3 class="tittle">${site.name}</h3>
                        <a href="${site.url}" target="_blank">${site.url}</a>
                    </li>`
    ).join('')
}

function updateExperiences(profileData) {
    const experiences = document.getElementById('profile.experiences')
    experiences.innerHTML = profileData.professionalExperience.map(experience => `
                    <li>
                        <h3 class="tittle">${experience.name}</h3>
                        <p class="calendar">${experience.period}</p>
                        <p>${experience.description}</p>
                    </li>`
    ).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updateEducation(profileData)
    updatePortfolio(profileData)
    updateExperiences(profileData)
})()