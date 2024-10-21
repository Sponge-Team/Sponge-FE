import { getCaseCategoryApi } from "@/apis/api/caseApi.js";

export async function getCaseCategory () {
    getCaseCategoryApi().then( res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}
