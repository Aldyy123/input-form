const filterData = (data: any, id: any) => {
    const filteredData = data.filter((item: any) => {
        return item.id == id;
    });
    return filteredData[0];
}

export default filterData;