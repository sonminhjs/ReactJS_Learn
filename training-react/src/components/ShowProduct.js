import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const ShowProduct = () => {
    const params = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = async function () {
            const baseURL = `http://localhost:5000/currentData/${params.id}`;
            const response = await axios.get(baseURL);
            const new_data = response.data;
            setData(new_data);
        }
        getData();
    }, [params.id])

    console.log(data);
    return (
        <>
            <h2 className="text-center mt-5 mb-5">Chi tiết sản phẩm</h2>
            <div className="w-100 d-flex justify-content-center align-items-center">
                <Table striped hover className="w-75 border border-1 " >
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-dark" style={{ fontWeight: "bold" }}>Id</td>
                            <td className="border border-dark">{data.id}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark" style={{ fontWeight: "bold" }}>Title</td>
                            <td className="border border-dark">{data.title}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark" style={{ fontWeight: "bold" }}>Description</td>
                            <td className="border border-dark">{data.description}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark" style={{ fontWeight: "bold" }}>Price</td>
                            <td className="border border-dark">{data.price}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark" style={{ fontWeight: "bold" }}>DiscountPercentage</td>
                            <td className="border border-dark">{data.discountPercentage}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark" style={{ fontWeight: "bold" }}>Rating</td>
                            <td className="border border-dark">{data.rating}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark" style={{ fontWeight: "bold" }}>Stock</td>
                            <td className="border border-dark">{data.stock}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark" style={{ fontWeight: "bold" }}>Brand</td>
                            <td className="border border-dark">{data.brand}</td>
                        </tr>

                        <tr>
                            <td className="border border-dark" style={{ fontWeight: "bold" }}>Category</td>
                            <td className="border border-dark">{data.category}</td>
                        </tr>
                        <tr>
                            <td className="border border-dark" style={{ fontWeight: "bold" }}>Thumbnail</td>
                            <td className="border border-dark text-center">
                                <img src={data.thumbnail} style={{ width: "30%" }} />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div></>
    )
}

export default ShowProduct;