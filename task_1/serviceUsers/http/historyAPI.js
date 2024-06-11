const { $host } = require("./index");

const createActionHistoryUser = async (id, action, date) => {
    try {
        const { data } = await $host.post(`history/${id}`, { action, date });
        return data.message;
    } catch (error) {
        if (error.response) {
            return error.response.status
        } else {
            return 500;
        }
    }
}

module.exports = {
    createActionHistoryUser,
};
