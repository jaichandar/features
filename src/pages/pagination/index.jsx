import { useEffect, useState } from 'react';
import Loader from '../../components/loader';
import './index.scss';

const Pagination = () => {

    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        if(loader) {
            const url = new URL(`http://localhost:5000/api/v1/paginate?page=${page}`)
                fetch(url.href, {
                    method: 'GET'
                }).then((val) => val.json()).then((val) => {
                    if(val.success) {
                        setData((prev) => ([...prev, ...val.value]));
                        setLoader(false);
                    }
                })
        }
    }, []);

    return(
        <div className='parent-wrapper'>
            {loader && <Loader />}
            <p className='heading'>Pagination Feature</p>
            <table className='table'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Release Year</th>
                        <th>Length</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 ? data.map((val, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{val.title}</td>
                                    <td>{val.description}</td>
                                    <td>{val.release_year}</td>
                                    <td>{val.length}</td>
                                </tr>
                            )
                        })
                    : null }
                </tbody>
            </table>
        </div>
    )
}

export default Pagination;
