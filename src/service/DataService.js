import data from "./data.json";

export const DataService = {
    getDataService() {
        return data;
    },
    getData() {
        return Promise.resolve(this.getDataService())
    }
}