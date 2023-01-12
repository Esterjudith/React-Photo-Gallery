import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL

export const getData = async ({ setGetDataLoading, setResult }) => {
    try {

        let res = await axios.get(URL)
        setGetDataLoading(false)
        setResult(res.data)

    } catch (error) {
        console.log(error.response.data.msg)
        setGetDataLoading(false)
    }
}

export const postData = async ({
    setpostDataLoading,
    setPostDatas,
    image,
}) => {
    try {
        const datas = { image: image.filesUploaded[0].url };
        setpostDataLoading(true);
        let res = await axios.post(`${URL}/createImages`, datas);
        if (res) {
            setpostDataLoading(false);
            setPostDatas(res.data);
        }
    } catch (error) {
        alert(error.response.data.msg);
        setpostDataLoading(false);
    }
};