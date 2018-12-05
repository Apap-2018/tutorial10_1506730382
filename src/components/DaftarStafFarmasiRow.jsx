import React from 'react';
import { Link } from "react-router-dom";

export const DaftarStafFarmasiRow = (props) => {
    return (
        <tbody>
            {props.listStafFarmasi.map(stafFarmasi => {
                return (
                    <tr key={stafFarmasi.id}>
                        <td>{stafFarmasi.nama}</td>
                        {/* <td>{pasien.statusPasien.jenis}</td>
                        <td>
                            <Link to={`/update-pasien/${pasien.id}`} className="btn btn-info">Update</Link>
                        </td> */}
                    </tr>
                )
            })}
        </tbody>
    )
}