export const filterData = (data, supplierId) => {
    const { vehicleMakes, suppliers, states } = data
    const finalResult = [];
    suppliers.forEach((s) => {
        if (parseInt(s.supplierTypeId) === supplierId) {
            let tempdata = {};
            tempdata.name = s.name;
            let state = states.find(i => i.id === s.stateId)
            tempdata.state = state.name;
            let vehicle = vehicleMakes.find(j => j.id === s.vehicleMakeId)
            tempdata.vehicles = vehicle.name;
            tempdata.rating = s.rating;
            finalResult.push(tempdata)
        }
    })
    return finalResult;
}