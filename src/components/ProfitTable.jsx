
import React from 'react';
import { useGetOrdersQuery } from '../redux/apiSlice'; 

function ProfitTable() {
  const { data, error, isLoading } = useGetOrdersQuery();
  console.log(data);
  

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <div>
      <h1>Orders</h1>
      <div>
       <table className="w-full border-collapse border border-gray-300">
         <thead className="bg-gray-100">
           <tr>
             <th>Müşteri</th>
             <th>Fatura Numarası</th>
             <th>Toplam Miktar</th>
             <th>Toplam Tutar</th>
             <th>Toplam Maliyet</th>
             <th>Toplam Karlılık</th>
             <th>Net Kar</th>
           </tr>
         </thead>
         <tbody>
           {data.orders.map((row, index) => (
            <tr key={index}>
              <td>{JSON.parse(row.customer).companyname}</td>
              <td>{row.invoice_number}</td>
              <td>{row.products[0].quantity} ton</td>
              <td>{(row.subtotal * row.primary_rate).toFixed(2)} USD</td>
              <td>
                {row.products
                  .reduce((total, product) => {
                    return (
                      total +
                      product.stocklogs.reduce(
                        (sum, log) =>
                          sum +
                          log.stock_cost +
                          log.shipment_cost +
                          log.credit_cost,
                        0
                      )
                    );
                  }, 0)
                  .toFixed(2)}{" "}
                USD
              </td>
              <td>
                {(
                  row.subtotal * row.primary_rate -
                  row.products.reduce((total, product) => {
                    return (
                      total +
                      product.stocklogs.reduce(
                        (sum, log) =>
                          sum +
                          log.stock_cost +
                          log.shipment_cost +
                          log.credit_cost,
                        0
                      )
                    );
                  }, 0)
                ).toFixed(2)}{" "}
                USD
              </td>
              <td>
                {(
                  (row.subtotal * row.primary_rate -
                    row.products.reduce((total, product) => {
                      return (
                        total +
                        product.stocklogs.reduce(
                          (sum, log) =>
                            sum +
                            log.stock_cost +
                            log.shipment_cost +
                            log.credit_cost,
                          0
                        )
                      );
                    }, 0)) *
                  0.5
                ).toFixed(2)}{" "}
                USD
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default ProfitTable;
