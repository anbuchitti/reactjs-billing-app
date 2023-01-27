import { useEffect, useState } from 'react';
import DashboardHeader from '../components/dashboard-header';
import { getAllTypename, CreateType } from './../service/api-call';
import { Form, Formik, Field } from 'formik';

export default function AccountType() {
    let [typenamelist, setTypenamelist] = useState([]);

    useEffect(() => {
        getTypenamelist();
    }, [])

    // function submitForm() {
    //     CreateType(reqPayload).then((res) => {
    //         getTypenamelist();
    //     })
    // }

    function getTypenamelist() {
        getAllTypename().then((items) => setTypenamelist(items.data))
    }

    return (
        <div className="container">
            <DashboardHeader></DashboardHeader>
            <Formik
                initialValues={{
                    typename: ''
                }}

                onSubmit={(value) => {
                    const uniqueid = (value?.typename?.toLowerCase()).replace(/ /g, '_');
                    CreateType({ uniqueid, typename: value.typename }).then((res) => {
                        getTypenamelist();
                        document.getElementById('typename').value = "";
                    })
                }}
            >
                <Form>
                    <div className="form-sec">
                        <div className="form-control">
                            <label className="lft-label">Typename</label>
                            <Field type="text" className="form-field" name='typename' id='typename'/>
                        </div>
                        <button className="primary-btn" type='submit'>submit</button>
                    </div>
                </Form>
            </Formik>
            <div>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>Typename</th>
                            <th>Unique Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {typenamelist.map((e, ind) => (
                            <tr key={e._id}>
                                <td>{e.typename}</td>
                                <td>{e.uniqueid}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}