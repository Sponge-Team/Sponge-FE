import rest from "@/apis/rest"

export async function getLoginApi(dto){
    return await rest({
        url: '/api/v1/auth/login',
        method: 'post',
        data: {
            lgn_id: dto.lgn_id,
            pwd: dto.pwd
        }
    })
}