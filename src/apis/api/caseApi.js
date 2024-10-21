import rest from "@/apis/rest.js"

export async function getCaseCategoryApi(dto){
    return await rest({
        url: '/api/category',
        method: 'get',
    })
}
