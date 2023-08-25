async function getJobs(searchParams?: any) {

    const res = await fetch("https://devjobs-finder-production.up.railway.app/jobs/", {cache: "no-cache"});
    const data = await res.json();
    return await data;
}

export default getJobs