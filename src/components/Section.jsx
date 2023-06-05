import React from 'react'



const Section = () => {
    const listProduct = [
        {
          id: 1,
          productName: 'Sneakers Converse CTAS',
          productPrice: 'Rp. 599.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/2/02-CONVERSE-FFSSBCONA-CONA03576C-Yellow.jpg'
        },
        {
          id: 2,
          productName: 'Converse Run Star Motion Canvas',
          productPrice: 'Rp. 1.799.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/C/O/CON171546C-1.jpg'
        },
        {
          id: 3,
          productName: 'Converse CTAS Construct Colorblock',
          productPrice: 'Rp. 1.599.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA03472C-Grey.jpg'
        },
        {
          id: 4,
          productName: 'Converse Chuck Taylor All Star',
          productPrice: 'Rp. 899.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCON0-CON135251C-Black.jpg'
        },
        {
          id: 5,
          productName: 'Converse Unisex Chuck 70 Plus',
          productPrice: 'Rp. 1.599.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA02871C-Brown.jpg'
        },
      ];
      const style2 = {
        display : "flex",
        flexWrap: "wrap",
        width: "100%",
        backgroundColor: "darkgray",
        gap: "30px",
        justifyContent: "center",
        padding: "10px 30px",
        boxSizing: "border-box"
    };
  return (
    <section style={
        style2
    }>
        {
            listProduct.map((product)=>{
                const style3 = {
                    width: "30%",
                    minWidth: "300px",
                    padding: "5px",
                    border: "3px solid grey",
                    borderRadius: "15px",
                    backgroundColor: "lightgrey"
                };
                return (
                        <div onClick={()=>{
                            return alert("Nama Barang Ini adalah "+product.productName);
                        }} style={style3} key={product.id}>
                            <img style={{
                                width: "100%"
                            }} src={product.urlImage} alt={product.productName} />
                            <h1>{product.productName}</h1>
                            <p>{product.productPrice}</p>
                        </div>
                )
            })
        }
    </section>
  )
}

export default Section