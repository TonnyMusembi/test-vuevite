import { Ref } from "vue";
import axios from 'axios'

export default function useCompanies() {

    const companies = ref(value, [])


    const getCompanies = async() => {
        let response = await axios.get(url, 'api/companies')
        companies.value = response.data.data;

    }

    const destroyCompanies = async() => {
        await axios.get(url, 'api/companies/{$id}')

    }
    const createUser = async() =>
        await axios.get(url, 'api/companies/create')

    return {
        companies,
        getCompanies,
        destroyCompanies,
        createUser,
    }

}