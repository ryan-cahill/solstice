const uuid = require('uuid'),
    utilityData = require('../../data/utilData.json');

const getUtilityDataWithUuids = () => {
    const utilityDataMap = {},
        utilityDataChronological = utilityData.reverse();
    utilityDataChronological.forEach(utilityDataPart => {
        const utilUuid = uuid.v4();
        utilityDataMap[utilUuid] = utilityDataPart;
        utilityDataMap[utilUuid]['milliseconds'] = new Date(utilityDataPart.year + '-' + utilityDataPart.month + '-01').getTime();
    });
    return utilityDataMap;
};

module.exports = {
    getUtilityDataWithUuids
};