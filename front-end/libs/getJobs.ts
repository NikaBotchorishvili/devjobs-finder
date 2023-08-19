async function getJobs() {
    const res = await fetch("https://devjobs-finder-production.up.railway.app/jobs");
    const data = await res.json();
    return await data;
}

export default getJobs