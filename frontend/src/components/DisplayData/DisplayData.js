import React from 'react';

const DisplayData = ({data: {message, data}}) => {
    if (!message) {
        return (<p style={{textAlign: "center"}}>Žádné data k zobrazení.<br/> Použijte vyhledávání.</p>);
    }

    if(!data?.ZAU) 
        return 'Společnost nenalezena.';

    const checkArray = (array) => {
        return Array.isArray(array);
    }

    //checkArray(data.ZI.Z) -> true -> render all 
    //                      -> false -> render one

    const renderBusinessScope = () => {
        console.log(checkArray(data.ZI.Z))
        if (checkArray(data.ZI.Z)) {
            return (
                data.ZI.Z.map((item, index) => {
                    console.log(item);
                    return (
                        <tr key={index}>
                            <td colSpan='2'>{item.PP}</td>
                        </tr>
                    )
                }
            )
        )} else {
            return (
                <tr>
                    <td colSpan='2'>{data.ZI.Z.PP}</td>
                </tr>
            )
        }
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td className='company-name'colSpan='2'>{data.ZAU.OF}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Datum vzniku a zápisu</th>
                        <td>{new Date(data.ZAU.ZI1).toLocaleDateString('cs-CZ')}</td>
                    </tr>
                    <tr>
                        <th>Sídlo</th>
                        <td>{data.Adresy.A.NU} {data.Adresy.A.CD}, {data.Adresy.A.PSC} {data.Adresy.A.N}</td>
                    </tr>
                    <tr>
                        <th>IČO</th>
                        <td>{data.ZAU.ICO}</td>
                    </tr>
                    <tr>
                        <th>Právní forma</th>
                        <td>{data.ZAU.PF.NPF}</td>
                    </tr>
                    <tr>
                        <th colSpan='2'>Předmět podnikání</th>
                    </tr>
                    {renderBusinessScope()}
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <td colSpan='2'>Statutární orgán</td>
                    </tr>
                </thead>
                <tbody>
                    {data.Osoby.Osoba?.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td colSpan='2'>{item.TP} {item.J} {item.P}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayData;