import axiosClient from "./axiosClient";

const schoolApi = {
    async getAll(params) {
        // Transform _page to _start
        const newParams = { ...params };
        // Remove un-needed key
        delete newParams._page;
        // Fetch school list + count
        const schoolList = await axiosClient.get('/schools', { params:
        newParams });
        // Build response and return
            return {
                data: schoolList,
                pagination: {
                page: params.page,
                limit: params.limit,
            }
        }
    }
};

export default schoolApi;