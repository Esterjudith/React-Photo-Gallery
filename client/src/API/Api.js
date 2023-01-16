import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL

export const getData = async ({ setGetDataLoading, setResult }) => {
    console.log("getData")
    try {
        console.log("checking");
        let res = await axios.get(`/images`);
        console.log(res);
        setGetDataLoading(false);
        console.log("res.data:", res.data);
        setResult(res.data);

    } catch (error) {
        console.log(error.response.data.msg);
        setGetDataLoading(false);
    }
}

export const postData = async ({
    setpostDataLoading,
    setPostDatas,
    title,
    image,
}) => {
    try {
        const datas = { title, image: image.filesUploaded[0].url };
        setpostDataLoading(true);
        let res = await axios.post(`/`, datas);
        if (res) {
            setpostDataLoading(false);
            setPostDatas(res.data);
        }
    } catch (error) {
        alert(error.response.data.msg);
        setpostDataLoading(false);
    }
};