export function filterData(searchInput,restraunts){
        
    const filterData =restraunts.filter((rest)=>rest.info.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    return filterData;

};

